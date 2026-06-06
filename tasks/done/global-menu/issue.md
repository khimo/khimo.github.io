---
title: Site-wide global khimo menu
status: done
created: 2026-05-27
tags: [design-system, nav]
---
## Summary
Add a site-wide fixed khimo navigation menu used across landing and content
pages.

## Context / why
A consistent global menu is required to unify the landing page and all content
pages under one navigation, replacing the old per-area navigation.

## Acceptance criteria
- [x] Fixed top menu present site-wide via `_includes/nav.html`.
- [x] Brand mark on the left.
- [x] PRO dropdown.
- [x] Search entry point.
- [x] Mobile burger / responsive collapse.

## Notes / progress
- Implemented in `_includes/nav.html`.
- A near-duplicate `khimo-nav.html` also exists — tracked separately for
  deduplication (see `dedupe-nav-includes`).
- Active-page highlighting is a follow-up (see `menu-active-page-highlight`).
