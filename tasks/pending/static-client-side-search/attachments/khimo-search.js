/* khimo-search.js — static client-side search UI on the Pagefind JS API.
 *
 * Loads the compressed, content-hashed index from /pagefind/, runs queries
 * fully in-browser (no server, no Google), and renders ranked results in the
 * khimo design language: title + excerpt + AI summary + keywords.
 *
 * Pagefind is generated at build time from _site (see bin/build.sh). During
 * local Jekyll dev without a Pagefind run, /pagefind/pagefind.js is absent and
 * we show a friendly notice instead of throwing.
 */

const inputEl   = document.getElementById('ks-input');
const clearEl   = document.getElementById('ks-clear');
const statusEl  = document.getElementById('ks-status');
const resultsEl = document.getElementById('ks-results');

let pagefind = null;
let pagefindError = null;
let seq = 0;           // guards against out-of-order async renders
let debounceTimer = null;

async function loadPagefind() {
  if (pagefind || pagefindError) return;
  try {
    // Vite/Jekyll won't bundle this — it's resolved at runtime from the site root.
    pagefind = await import(/* webpackIgnore: true */ '/pagefind/pagefind.js');
    await pagefind.options({ excerptLength: 30 });
    await pagefind.init();
  } catch (e) {
    pagefindError = e;
    console.warn('[khimo-search] Pagefind index not available:', e);
  }
}

function escapeHTML(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function keywordList(meta) {
  const raw = meta && meta.keywords;
  if (!raw) return [];
  return raw.split(',').map(k => k.trim()).filter(Boolean).slice(0, 8);
}

function renderResult(data) {
  const meta = data.meta || {};
  const title = meta.title || data.url;
  const url = data.url;
  const summary = meta.summary || '';
  const kws = keywordList(meta);

  const li = document.createElement('li');
  li.className = 'ks-result';

  const kwHTML = kws.length
    ? `<ul class="ks-keywords" aria-label="Keywords">${
        kws.map(k => `<li>${escapeHTML(k)}</li>`).join('')
      }</ul>`
    : '';

  const summaryHTML = summary
    ? `<p class="ks-summary">${escapeHTML(summary)}</p>`
    : '';

  li.innerHTML = `
    <a class="ks-result-link" href="${escapeHTML(url)}">
      <h2 class="ks-result-title">${escapeHTML(title)}</h2>
      <p class="ks-url">${escapeHTML(url)}</p>
    </a>
    ${summaryHTML}
    <p class="ks-excerpt">${data.excerpt /* Pagefind returns safe <mark> HTML */}</p>
    ${kwHTML}
  `;
  return li;
}

async function runSearch(query) {
  const mySeq = ++seq;
  clearEl.hidden = !query;

  if (!query) {
    resultsEl.innerHTML = '';
    statusEl.textContent = '';
    return;
  }

  await loadPagefind();
  if (mySeq !== seq) return;

  if (pagefindError || !pagefind) {
    statusEl.textContent =
      'Search index not built for this preview. Run the Pagefind build step (bin/build.sh) and reload.';
    resultsEl.innerHTML = '';
    return;
  }

  statusEl.textContent = 'Searching…';
  const search = await pagefind.search(query);
  if (mySeq !== seq) return;

  const total = search.results.length;
  if (!total) {
    statusEl.textContent = `No results for “${query}”.`;
    resultsEl.innerHTML = '';
    return;
  }

  // Load the top N result fragments (each is its own hashed file).
  const top = await Promise.all(search.results.slice(0, 20).map(r => r.data()));
  if (mySeq !== seq) return;

  statusEl.textContent =
    `${total} result${total === 1 ? '' : 's'} for “${query}”.`;
  resultsEl.innerHTML = '';
  top.forEach(d => resultsEl.appendChild(renderResult(d)));
}

function onInput() {
  const q = inputEl.value.trim();
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runSearch(q), 180);
}

inputEl.addEventListener('input', onInput);
clearEl.addEventListener('click', () => {
  inputEl.value = '';
  inputEl.focus();
  runSearch('');
});

// Deep link / global-menu icon support: /search.html?q=term
const initialQuery = new URLSearchParams(location.search).get('q');
if (initialQuery) {
  inputEl.value = initialQuery;
  runSearch(initialQuery);
}
inputEl.focus();
