---
title: Wire the landing page into Jekyll
status: done
created: 2026-05-27
tags: [jekyll, landing, infra]
---
## Summary
Integrate the redesigned landing page into the Jekyll build with proper layout,
includes, and assets, and retire the old homepage.

## Context / why
The redesigned landing needs to be a first-class Jekyll page rather than a
standalone prototype, so it builds and deploys with the rest of the site.

## Acceptance criteria
- [x] New layout `_layouts/khimo-landing.html`.
- [x] Includes `_includes/khimo-head.html` and `_includes/khimo-nav.html`.
- [x] Assets placed in `/css` and `/js`.
- [x] New `index.html` using the khimo-landing layout.
- [x] Old `index.md` retired.

## Notes / progress
- The landing now renders through the standard Jekyll pipeline.
- `khimo-nav.html` duplicates `nav.html`; collapse tracked in
  `dedupe-nav-includes`.
