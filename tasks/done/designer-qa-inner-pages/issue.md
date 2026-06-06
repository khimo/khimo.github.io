---
title: Designer QA pass on inner pages
status: done
created: 2026-05-27
tags: [design-system, content, qa]
---
## Summary
Fix design issues found during a QA pass over the collection index pages and
content headings after the full-site renewal.

## Context / why
After applying the khimo language site-wide, several index pages and heading
styles needed correction to match the design system.

## Acceptance criteria
- [x] help_drivers index: white logo tiles, responsive grid, khimo search bar,
      muted titles that turn coral on hover.
- [x] ideas collection index: removed the Bootstrap jumbotron, added khimo
      search bar.
- [x] Heading links no longer coral (only body links are coral).
- [x] Page-head h1 uses `overflow-wrap` to avoid overflow.

## Notes / progress
- Coral is reserved for body links and interactive accents; headings stay neutral.
- Completed and verified.
