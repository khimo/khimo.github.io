/* khimo-search.js — fully static, client-side SEMANTIC search.
 *
 * No server, no Google, no API key. A precomputed embedding index
 * (/search-index.json) ships as a static file. At runtime we lazy-load the
 * SAME embedding model used at build time — Xenova/bge-small-en-v1.5 via
 * Transformers.js from the jsDelivr CDN — embed the query (mean pooling +
 * L2 normalize), dequantize the stored int8 vectors, and rank by a HYBRID of
 * cosine similarity + a lexical (BM25-lite) term-overlap score, dedupe to the
 * best chunk per page, and render khimo cards.
 *
 * bge-small-en-v1.5 is an ASYMMETRIC retrieval model: the QUERY must be
 * prefixed with its retrieval instruction (QUERY_PREFIX below); PASSAGES are
 * embedded as-is at build time. Build counterpart: bin/build-embeddings.mjs
 * (must use the same model, pooling, normalization and prefixing convention).
 * Index format is asserted against `model`.
 */

const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.0';
const MODEL = 'Xenova/bge-small-en-v1.5';
// bge retrieval instruction — prepended to the QUERY only (not to passages).
const QUERY_PREFIX = 'Represent this sentence for searching relevant passages: ';
const INDEX_URL = '/search-index.json';

// Hybrid ranking: final = SEM_W*cosine + LEX_W*lexical.
//   cosine  — bge cosine on (prefixed query, passage). bge relevant chunks
//             typically score ~0.55-0.80; marginal ~0.45; irrelevant <0.40.
//   lexical — normalized term-overlap of the query's meaningful terms against
//             the chunk's title/heading/text, with title+heading weighted
//             higher than body. Range ~[0,1]. Rewards literal & title hits.
// The floor is applied to the BLENDED score (re-tuned for bge + hybrid).
const SEM_W = 0.7;
const LEX_W = 0.3;
const MIN_SCORE = 0.34;
const MAX_RESULTS = 12;
const MIN_FALLBACK = 3;

// Common words we never highlight (semantic match ≠ keyword match, so marking
// "the"/"when" in snippets just looks noisy). Highlight only meaningful terms.
const STOPWORDS = new Set(('a an and are as at be but by can do does for from how i if in into is it its '
  + 'me my no not of on or our so that the their them then there these they this to use using was we what '
  + 'when where which who why will with you your').split(' '));

const inputEl   = document.getElementById('ks-input');
const clearEl   = document.getElementById('ks-clear');
const statusEl  = document.getElementById('ks-status');
const resultsEl = document.getElementById('ks-results');

let extractor = null;      // the embedding pipeline
let index = null;          // { model, dim, docs:[{url,title,heading,text,q,s}] }
let loadPromise = null;    // single-flight engine load
let seq = 0;
let debounceTimer = null;

function escapeHTML(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setStatus(msg) { statusEl.textContent = msg; }

// --------------------------------------------------------------------------
// Engine load (lazy, on first focus / first query). Single-flight.
// --------------------------------------------------------------------------
async function loadEngine() {
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    setStatus('Loading search… (first time downloads a ~25 MB model, cached after)');

    // 1. Fetch the precomputed index in parallel with the model import.
    const indexP = fetch(INDEX_URL, { cache: 'force-cache' }).then(r => {
      if (!r.ok) throw new Error(`index HTTP ${r.status}`);
      return r.json();
    });

    // 2. Load Transformers.js from CDN.
    const lib = await import(/* webpackIgnore: true */ TRANSFORMERS_CDN);
    const { pipeline, env } = lib;
    env.allowLocalModels = false;
    if (env.backends && env.backends.onnx && env.backends.onnx.wasm) {
      env.backends.onnx.wasm.proxy = false;
    }

    index = await indexP;
    if (index.model && index.model !== MODEL) {
      console.warn(`[khimo-search] index model "${index.model}" != runtime "${MODEL}"`);
    }

    extractor = await pipeline('feature-extraction', MODEL, {
      dtype: 'fp32',
      progress_callback: (p) => {
        if (p && p.status === 'progress' && p.file && /\.onnx$/.test(p.file)) {
          const pct = p.progress ? Math.round(p.progress) : 0;
          setStatus(`Loading model… ${pct}%`);
        }
      },
    });

    setStatus(`Ready — ${index.docs.length} passages across the documentation.`);
  })().catch((e) => {
    console.error('[khimo-search] engine load failed:', e);
    throw e;
  });
  return loadPromise;
}

// --------------------------------------------------------------------------
// Query embedding + ranking
// --------------------------------------------------------------------------
async function embedQuery(text) {
  // bge is asymmetric: prefix the QUERY with the retrieval instruction.
  const out = await extractor(QUERY_PREFIX + text, { pooling: 'mean', normalize: true });
  // out.data is a Float32Array of length dim (single input), already unit-norm.
  return out.data;
}

// Decode a base64 string into an Int8Array (signed int8 vector).
function b64ToInt8(b64) {
  const bin = atob(b64);
  const n = bin.length;
  const arr = new Int8Array(n);
  for (let i = 0; i < n; i++) arr[i] = (bin.charCodeAt(i) << 24) >> 24; // → signed
  return arr;
}

// cosine(query, doc): query is unit-norm float; doc.q is base64 int8 + scale s.
// Stored vectors were unit-norm before quantization; we re-normalize the
// dequantized doc vector to absorb quantization error. Decoded vectors are
// cached on the doc object so repeated queries don't re-decode.
function cosineScore(qVec, doc) {
  let vec = doc._v;
  if (!vec) { vec = doc._v = b64ToInt8(doc.q); }
  const s = doc.s;
  let dot = 0, dnorm = 0;
  for (let i = 0; i < vec.length; i++) {
    const d = vec[i] * s;
    dot += qVec[i] * d;
    dnorm += d * d;
  }
  return dot / (Math.sqrt(dnorm) || 1);
}

// Meaningful query terms: drop short words and stopwords (for snippet
// centering + highlighting).
// e.g. "dim the lights when the sun sets" → dim, lights, sun, sets.
function meaningfulTerms(query) {
  return query.toLowerCase().split(/\s+/).filter(t => t.length > 2 && !STOPWORDS.has(t));
}

// A tiny doc-aware synonym/stem map used ONLY for the lexical match (never for
// the embedding). The docs phrase concepts in their own vocabulary: a user
// asking to "login" never finds the literal token "login" on the pages that
// actually explain it (they say "admin", "webpanel", "log in", "access the
// setup interface"), while unrelated driver pages carry a "Login:" field
// label. Each entry maps a query term to alternative surface forms that count
// as evidence of the SAME concept. Kept deliberately small and obvious.
const LEX_SYNONYMS = {
  login:    ['log in', 'logged in', 'log-in', 'sign in', 'access the', 'webpanel', 'admin'],
  password: ['credential'],
  camera:   ['onvif', 'doorbird'],
  cameras:  ['onvif', 'doorbird'],
  dim:      ['dimmer', 'dimming'],
  lights:   ['light', 'lighting'],
  light:    ['lighting'],
  sunset:   ['astronomical', 'sunrise', 'solar'],
  sunrise:  ['astronomical', 'sunset', 'solar'],
};

// Build concept groups for the query: each group is one meaningful term plus
// its doc-synonyms. A chunk matching ANY surface form in a group satisfies that
// concept once.
function conceptGroups(query) {
  return meaningfulTerms(query).map(t => [t, ...(LEX_SYNONYMS[t] || [])]);
}

// Lexical (BM25-lite) score: how well the query's concepts are covered by the
// chunk's title / heading / body. Title & heading hits are weighted higher
// than body hits — a literal term in the page title/heading is a strong
// relevance signal that pure cosine ignores (this is what pulls the admin /
// web-panel / web-interface pages above "Logout"). Synonyms only ever ADD
// evidence: per concept we take the single best field-weight reached by the
// term OR any synonym (max, not sum), so expanding the vocabulary can never
// dilute a strong literal hit. Returns ~[0,1].
const W_TITLE = 3.0, W_HEADING = 2.0, W_BODY = 1.0;
function lexicalScore(groups, doc) {
  if (!groups.length) return 0;
  let cache = doc._lx;
  if (!cache) {
    cache = doc._lx = {
      title: (doc.title || '').toLowerCase(),
      heading: (doc.heading || '').toLowerCase(),
      text: (doc.text || '').toLowerCase(),
    };
  }
  const maxPerConcept = W_TITLE + W_HEADING + W_BODY;
  let acc = 0;
  for (const group of groups) {
    let best = 0;
    for (const form of group) {
      let w = 0;
      if (cache.title.includes(form))   w += W_TITLE;
      if (cache.heading.includes(form)) w += W_HEADING;
      if (cache.text.includes(form))    w += W_BODY;
      if (w > best) best = w;
    }
    acc += best;
  }
  // Normalize by the best case (every concept in title+heading+body) → [0,1].
  return acc / (groups.length * maxPerConcept);
}

function snippet(text, query, max = 240) {
  // Center on the first query-term hit when present; otherwise take the head.
  const terms = meaningfulTerms(query);
  let start = 0;
  const lower = text.toLowerCase();
  for (const t of terms) {
    const i = lower.indexOf(t);
    if (i !== -1) { start = Math.max(0, i - 60); break; }
  }
  let snip = text.slice(start, start + max);
  if (start > 0) snip = '…' + snip;
  if (start + max < text.length) snip = snip + '…';
  // highlight query terms (semantic match means these may be absent — fine)
  let html = escapeHTML(snip);
  for (const t of terms) {
    const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    html = html.replace(re, '<mark>$1</mark>');
  }
  return html;
}

function renderResult(doc, query) {
  const li = document.createElement('li');
  li.className = 'ks-result';
  const title = doc.title || doc.url;
  const headingHTML = doc.heading && doc.heading !== title
    ? `<p class="ks-heading">${escapeHTML(doc.heading)}</p>` : '';
  li.innerHTML = `
    <a class="ks-result-link" href="${escapeHTML(doc.url)}">
      <h2 class="ks-result-title">${escapeHTML(title)}</h2>
      <p class="ks-url">${escapeHTML(doc.url)}</p>
    </a>
    ${headingHTML}
    <p class="ks-excerpt">${snippet(doc.text, query)}</p>
  `;
  return li;
}

async function runSearch(query) {
  const mySeq = ++seq;
  clearEl.hidden = !query;

  if (!query) {
    resultsEl.innerHTML = '';
    setStatus(index ? `Ready — ${index.docs.length} passages.` : '');
    return;
  }

  try {
    await loadEngine();
  } catch (e) {
    if (mySeq !== seq) return;
    resultsEl.innerHTML = '';
    setStatus('Search is unavailable right now (could not load the model or index). Please try again later, or use the Google search.');
    return;
  }
  if (mySeq !== seq) return;

  setStatus('Searching…');
  let qVec;
  try {
    qVec = await embedQuery(query);
  } catch (e) {
    if (mySeq !== seq) return;
    setStatus('Could not process that query. Please try again.');
    return;
  }
  if (mySeq !== seq) return;

  // Score every chunk with the HYBRID blend, keep the best chunk per URL.
  const groups = conceptGroups(query);
  const bestByUrl = new Map();
  for (const doc of index.docs) {
    const cos = cosineScore(qVec, doc);
    const lex = lexicalScore(groups, doc);
    const sc = SEM_W * cos + LEX_W * lex;
    const prev = bestByUrl.get(doc.url);
    if (!prev || sc > prev.score) bestByUrl.set(doc.url, { doc, score: sc });
  }
  const sorted = [...bestByUrl.values()].sort((a, b) => b.score - a.score);
  // Keep genuinely-relevant pages (above the cosine floor), capped. If none
  // clear the floor, fall back to the few best guesses rather than show nothing.
  let ranked = sorted.filter(r => r.score >= MIN_SCORE).slice(0, MAX_RESULTS);
  let loose = false;
  if (!ranked.length) { ranked = sorted.slice(0, MIN_FALLBACK); loose = true; }

  if (mySeq !== seq) return;

  if (!ranked.length) {
    setStatus(`No results for “${query}”.`);
    resultsEl.innerHTML = '';
    return;
  }

  const n = ranked.length;
  setStatus(loose
    ? `No strong match for “${query}” — showing the ${n} closest.`
    : `${n} result${n === 1 ? '' : 's'} for “${query}” (semantic).`);
  resultsEl.innerHTML = '';
  for (const { doc } of ranked) resultsEl.appendChild(renderResult(doc, query));
}

// --------------------------------------------------------------------------
// Wiring
// --------------------------------------------------------------------------
function onInput() {
  const q = inputEl.value.trim();
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runSearch(q), 200);
}

inputEl.addEventListener('input', onInput);
// Warm the engine as soon as the user shows intent.
inputEl.addEventListener('focus', () => { loadEngine().catch(() => {}); }, { once: true });

clearEl.addEventListener('click', () => {
  inputEl.value = '';
  inputEl.focus();
  runSearch('');
});

// Deep link: /search2.html?q=term
const initialQuery = new URLSearchParams(location.search).get('q');
if (initialQuery) {
  inputEl.value = initialQuery;
  runSearch(initialQuery);
} else {
  inputEl.focus();
}
