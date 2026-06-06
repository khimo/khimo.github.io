---
title: Full light-theme audit across all page types
status: pending
created: 2026-05-27
tags: [design-system, css, qa, accessibility]
---
## Summary
Do a full light-mode pass across every page archetype in a real browser and fix
any contrast, token, or layout issues.

## Context / why
Headless Chrome could not reliably force light theme during automated QA, so
light mode has not been properly verified. It needs a manual pass in a real
browser to catch contrast and theming regressions.

## Acceptance criteria
- [ ] Light theme verified in a real browser (not headless).
- [ ] Covered: landing, default/page content, pagetoc, drivertoc,
      pageindextoc, collection indexes, search.
- [ ] No unreadable text / low-contrast elements; tokens resolve correctly in
      light mode.
- [ ] Code blocks, tables, callouts, breadcrumbs, and the TOC rail all legible.

## Notes / progress
- Watch the `--ink` vs `--text` token gotcha noted in `full-site-renewal`.
- Toggle light mode manually (system preference or theme switch) and walk each
  archetype.
