---
title: Static client-side full-text search (replace Google CSE)
status: pending
created: 2026-05-27
tags: [search, infra, design-system]
---
## Summary
Replace the Google Custom Search Engine on `search.html` with a fully static,
client-side full-text search. Build a compressed, chunked, hashed static index
from the built site that the browser downloads on demand and searches entirely
client-side — no Google, no server.

## Context / why
The current `search.html` depends on Google CSE: external, ad-laden, not
themeable, and a privacy/branding concern. A static index keeps search fully
under our control, themeable to khimo, and works offline from static files —
which fits a GitHub Pages deployment.

## Acceptance criteria
- [ ] Typing a query returns ranked results with snippets.
- [ ] Search runs entirely client-side from static files (no Google, no server),
      offline-capable.
- [ ] The index is compressed, chunked, and content-hashed; chunks are fetched
      on demand rather than all up front.
- [ ] Each indexed page carries an AI-generated summary + main keywords to
      enrich ranking and snippets.
- [ ] Search UI is themed to the khimo design system.
- [ ] Deployable on GitHub Pages. Since GH Pages only runs Jekyll (not arbitrary
      build steps), the index must be produced by a GitHub Action or committed
      into the repo.

## Notes / progress
- **Recommended implementation: Pagefind**, which matches this architecture
  exactly (compressed, chunked, hashed static index; on-demand fetch;
  client-side search).
- Run Pagefind against `_site` *after* the Jekyll build (e.g. in the same
  Docker/build step), then commit the generated index or publish it via a
  GitHub Action.
- The AI-generated per-page summary + keywords should be injected into the page
  (e.g. front-matter / meta) before indexing so Pagefind picks them up.
- THE BIG ONE. A separate ai-engineer agent is implementing this now — keep this
  spec aligned with that work.

## Progress — 2026-05-28 (working PoC under `search2`)
Implemented & validated end-to-end as `search2.html` (kept separate from the live
Google-CSE `search.html`; swap when approved):
- `search2.html` (khimo UI), `css/khimo-search.css`, `js/khimo-search.js` (Pagefind JS API + graceful fallback + `?q=` deep link).
- `pagefind-meta.html` include already in `<head>`; `data-pagefind-body` on `<main>` in every layout.
- Build pipeline: `docker compose run --rm build` (Jekyll) -> `docker compose run --rm pagefind`
  (node:20 image, `npx pagefind@1 --site _site`). `keep_files: [pagefind]` in `_config.yml` so
  `jekyll serve` does not wipe the index. Index: 200 pages / 6283 words, 1.9 MB total, built in 0.48s.
- CI: `.github/workflows/pages.yml` (Jekyll -> Pagefind -> deploy-pages). REQUIRES one-time repo
  Settings -> Pages -> Source = "GitHub Actions".
- Verified in Chrome: `?q=knx` -> 12 ranked results, coral-highlighted excerpts, on-brand cards.
- AI summaries NOT required for quality (Pagefind ranks body text well). `keywords` exist on 91
  driver docs already; `summary` on 0 — treat as optional enrichment, not a blocker.
- TO PROMOTE: replace `search.html` (Google CSE) body with `search2.html` body, delete `search2.html`.
