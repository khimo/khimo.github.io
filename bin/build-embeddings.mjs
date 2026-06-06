#!/usr/bin/env node
/* build-embeddings.mjs — precompute a static semantic-search index for khimo.
 *
 * Reads the built Jekyll site under ./_site, extracts the title + main body
 * (the [data-pagefind-body] element) of every published page, chunks each page
 * into ~250-350 word passages, embeds every chunk with Transformers.js using
 * Xenova/bge-small-en-v1.5 (mean pooling + L2 normalize → 384-dim unit vectors),
 * an asymmetric retrieval model: PASSAGES are embedded as-is (no prefix); the
 * QUERY (in the browser) is prefixed with the model's retrieval instruction.
 * quantizes each vector to int8 with a per-vector scale, and writes the whole
 * thing to ./_site/search-index.json.
 *
 * The browser (js/khimo-search.js) loads the SAME model/pooling from a CDN,
 * embeds the query, dequantizes these vectors and ranks by cosine similarity.
 *
 * Run via docker compose:  docker compose run --rm embeddings
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const SITE_DIR = '_site';
const OUT_FILE = join(SITE_DIR, 'search-index.json');
const MODEL = 'Xenova/bge-small-en-v1.5';

// Pages we never index.
const SKIP_URLS = new Set([
  '/search.html',
  '/search2.html',
  '/googled2d2e9c64ffcb22d.html',
  '/404.html',
]);

// ---------------------------------------------------------------------------
// 1. Walk _site for .html files
// ---------------------------------------------------------------------------
async function walk(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip Pagefind's own index and vendor assets
      if (entry.name === 'pagefind' || entry.name === 'vendor' ||
          entry.name === 'assets' || entry.name === 'js' ||
          entry.name === 'css' || entry.name === 'icons' ||
          entry.name === 'img' || entry.name === 'logos') continue;
      await walk(full, acc);
    } else if (entry.name.endsWith('.html')) {
      acc.push(full);
    }
  }
  return acc;
}

// ---------------------------------------------------------------------------
// 2. HTML extraction (no DOM dependency — targeted regex/string scanning)
// ---------------------------------------------------------------------------

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&rsquo;/g, '’')
    .replace(/&nbsp;/g, ' ').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function getTitle(html) {
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (t) {
    let title = decodeEntities(t[1].replace(/\s+/g, ' ').trim());
    // strip the common "— by khimo" / site suffix noise but keep page identity
    return title;
  }
  const h1 = html.match(/<h1[^>]*class="[^"]*ph-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i)
          || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decodeEntities(h1[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  return null;
}

// Extract the inner HTML of the first [data-pagefind-body] element by
// balanced-tag scanning from the opening tag.
function getBodyHTML(html) {
  const open = html.search(/<(main|div|article|section)[^>]*\bdata-pagefind-body\b[^>]*>/i);
  if (open === -1) return null;
  const tagMatch = html.slice(open).match(/<(main|div|article|section)[^>]*\bdata-pagefind-body\b[^>]*>/i);
  const tagName = tagMatch[1].toLowerCase();
  const contentStart = open + tagMatch[0].length;

  // Balance nested same-type tags to find the matching close.
  const tagRe = new RegExp(`<(/?)${tagName}\\b[^>]*>`, 'gi');
  tagRe.lastIndex = contentStart;
  let depth = 1, m;
  while ((m = tagRe.exec(html))) {
    if (m[1] === '/') { depth--; if (depth === 0) return html.slice(contentStart, m.index); }
    else depth++;
  }
  return html.slice(contentStart);
}

// Convert a body HTML fragment into an ordered list of sections, each tied to
// the nearest preceding heading. Strips script/style/nav/svg.
function htmlToSections(bodyHTML) {
  let h = bodyHTML
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/data-pagefind-ignore[\s\S]*?(?=<)/gi, ' '); // best-effort

  const sections = [];
  let currentHeading = '';
  let buffer = '';

  const flush = () => {
    const text = decodeEntities(buffer.replace(/<[^>]+>/g, ' '))
      .replace(/\s+/g, ' ').trim();
    if (text) sections.push({ heading: currentHeading, text });
    buffer = '';
  };

  // Tokenize on headings h1-h4.
  const headingRe = /<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let last = 0, hm;
  while ((hm = headingRe.exec(h))) {
    buffer += h.slice(last, hm.index);
    flush();
    currentHeading = decodeEntities(hm[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    last = headingRe.lastIndex;
  }
  buffer += h.slice(last);
  flush();
  return sections;
}

// Chunk sections into ~250-350 word passages with small overlap, keeping the
// heading context for each chunk.
const TARGET = 300, MAX = 360, OVERLAP = 30;
function chunkSections(sections) {
  const chunks = [];
  for (const sec of sections) {
    const words = sec.text.split(/\s+/).filter(Boolean);
    if (words.length === 0) continue;
    if (words.length <= MAX) {
      chunks.push({ heading: sec.heading, text: sec.text });
      continue;
    }
    let i = 0;
    while (i < words.length) {
      const slice = words.slice(i, i + TARGET);
      chunks.push({ heading: sec.heading, text: slice.join(' ') });
      if (i + TARGET >= words.length) break;
      i += TARGET - OVERLAP;
    }
  }
  return chunks;
}

function urlForFile(file) {
  let rel = relative(SITE_DIR, file).split(sep).join('/');
  // index.html → directory URL
  rel = rel.replace(/index\.html$/, '');
  return '/' + rel;
}

// ---------------------------------------------------------------------------
// 3. Build chunk records
// ---------------------------------------------------------------------------
async function buildRecords() {
  const files = await walk(SITE_DIR);
  const records = [];
  let skipped = 0, pages = 0;

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const url = urlForFile(file);
    if (SKIP_URLS.has(url)) { skipped++; continue; }
    // search_exclude pages set search_exclude:true → carry data-pagefind-ignore
    // on the whole doc, OR have no body. We detect both.
    if (/<html[^>]*\bdata-pagefind-ignore\b/i.test(html) ||
        /<body[^>]*\bdata-pagefind-ignore\b/i.test(html)) { skipped++; continue; }

    const bodyHTML = getBodyHTML(html);
    if (!bodyHTML) { skipped++; continue; }

    const title = getTitle(html) || url;
    const sections = htmlToSections(bodyHTML);
    const chunks = chunkSections(sections);
    if (chunks.length === 0) { skipped++; continue; }

    pages++;
    for (const c of chunks) {
      records.push({ url, title, heading: c.heading, text: c.text });
    }
  }
  console.log(`[embeddings] pages indexed: ${pages}, skipped: ${skipped}, chunks: ${records.length}`);
  return records;
}

// ---------------------------------------------------------------------------
// 4. Embed + quantize
// ---------------------------------------------------------------------------

// int8 quantization with a per-vector scale. Vectors are unit-norm so values
// are in [-1,1]; we map to [-127,127]. The int8 bytes are base64-encoded
// (signed → stored as unsigned 0..255 = byte & 0xFF) to keep the JSON small.
// Browser decodes base64 → Int8Array, dequantizes as q[i]*s.
function quantize(vec) {
  let maxAbs = 0;
  for (const v of vec) { const a = Math.abs(v); if (a > maxAbs) maxAbs = a; }
  const scale = maxAbs / 127 || 1e-8;
  const buf = Buffer.allocUnsafe(vec.length);
  for (let i = 0; i < vec.length; i++) {
    const q = Math.max(-127, Math.min(127, Math.round(vec[i] / scale)));
    buf[i] = q & 0xFF;        // store signed int8 as a byte
  }
  return { q: buf.toString('base64'), s: scale };
}

async function main() {
  try { await stat(SITE_DIR); }
  catch { console.error(`[embeddings] ${SITE_DIR} not found — run the Jekyll build first.`); process.exit(1); }

  const records = await buildRecords();

  console.log('[embeddings] loading model', MODEL, '…');
  const { pipeline, env } = await import('@huggingface/transformers');
  // Cache model files in the named docker volume mounted at HOME/.cache.
  env.allowLocalModels = false;
  const extractor = await pipeline('feature-extraction', MODEL, { dtype: 'fp32' });

  const docs = [];
  const BATCH = 32;
  for (let i = 0; i < records.length; i += BATCH) {
    const batch = records.slice(i, i + BATCH);
    const inputs = batch.map(r => {
      const head = r.heading ? r.heading + '. ' : '';
      return (head + r.text).slice(0, 2000);
    });
    const out = await extractor(inputs, { pooling: 'mean', normalize: true });
    const dims = out.dims;                // [batch, 384]
    const data = out.data;                // Float32Array flat
    const dim = dims[1];
    for (let b = 0; b < batch.length; b++) {
      const vec = Array.from(data.subarray(b * dim, b * dim + dim));
      const { q, s } = quantize(vec);
      const r = batch[b];
      // Store a trimmed snippet for display + lexical matching (full text was
      // already embedded). bge needs no query prefix on passages. We keep more
      // body than the old 420 chars so the client-side lexical (BM25-lite)
      // score has real term coverage; index stays well under ~2 MB.
      const text = r.text.length > 900 ? r.text.slice(0, 900) : r.text;
      docs.push({ url: r.url, title: r.title, heading: r.heading, text, q, s });
    }
    process.stdout.write(`\r[embeddings] embedded ${Math.min(i + BATCH, records.length)}/${records.length} chunks`);
  }
  process.stdout.write('\n');

  const index = {
    model: MODEL,
    dim: 384,
    quant: 'int8-b64-pervec',   // q = base64(int8 bytes); value[i] = int8(q)[i] * s
    pooling: 'mean',
    normalize: true,
    count: docs.length,
    built: new Date().toISOString(),
    docs,
  };

  const json = JSON.stringify(index);
  await writeFile(OUT_FILE, json);
  const mb = (Buffer.byteLength(json) / (1024 * 1024)).toFixed(2);
  console.log(`[embeddings] wrote ${OUT_FILE} — ${docs.length} chunks, ${mb} MB`);
}

main().catch(e => { console.error(e); process.exit(1); });
