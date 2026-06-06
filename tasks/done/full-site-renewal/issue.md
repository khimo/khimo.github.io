---
title: Full site renewal — includes, layouts, content design language
status: done
created: 2026-05-27
tags: [design-system, jekyll, content, css]
---
## Summary
Rewrite all shared includes and layouts so every content post inherits the
khimo language, and introduce a content design language stylesheet — while
keeping Bootstrap for existing content grids/TOC.

## Context / why
The redesign must reach beyond the landing page. Every page archetype needs the
khimo language, but ~100+ posts depend on Bootstrap grid/utilities and
bootstrap-toc, so the strategy is coexistence rather than replacement.

## Acceptance criteria
- [x] Rewrote all shared includes: head, nav, foot, scripts.
- [x] Rewrote all layouts: default, page, page_withoutbread, pagetoc,
      drivertoc, pageindextoc.
- [x] New `css/khimo-content.css` documentation design language:
      reading hierarchy, code/tables/callouts, slim page header, breadcrumbs,
      restyled bootstrap-toc sidebar rail, driver logo tile.
- [x] Coexistence preserved: Bootstrap + bootstrap-toc + jQuery kept for
      content grid/TOC, khimo layered on top.

## Notes / progress
- **Token gotcha:** the text colour token is `--ink`, not `--text`.
- Rationale for keeping Bootstrap documented in the rejected task
  `drop-bootstrap-entirely`.
