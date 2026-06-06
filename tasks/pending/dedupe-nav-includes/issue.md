---
title: Deduplicate nav.html and khimo-nav.html
status: pending
created: 2026-05-27
tags: [nav, refactor, jekyll]
---
## Summary
`_includes/nav.html` and `_includes/khimo-nav.html` are duplicates; collapse
them into a single include.

## Context / why
The landing wiring introduced `khimo-nav.html` while the site-wide menu lives in
`nav.html`. Maintaining two copies means changes (e.g. active-page highlighting)
have to be made twice and risk drifting apart.

## Acceptance criteria
- [ ] One canonical nav include remains.
- [ ] All layouts/pages reference the single include.
- [ ] The other include is removed.
- [ ] Landing and content pages still render the menu identically.

## Notes / progress
- Decide which name to keep, then update all `{% include %}` references.
- Do this before `menu-active-page-highlight` so the logic is written once.
