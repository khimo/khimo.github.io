---
title: Highlight the active page/section in the global menu
status: pending
created: 2026-05-27
tags: [nav, design-system, ux]
---
## Summary
Highlight the current section/page in the global khimo menu so users always know
where they are.

## Context / why
The global menu is now site-wide but does not indicate the current location.
Active-state highlighting is a basic wayfinding affordance.

## Acceptance criteria
- [ ] The menu item matching the current page/section is visually marked active.
- [ ] Active state matches the khimo design language (e.g. coral accent).
- [ ] Works across all page archetypes (landing, content, collection indexes).
- [ ] Correct on nested/section pages, not just exact URL matches.

## Notes / progress
- Likely a Liquid comparison of the current page URL/section against the nav
  items in `nav.html` (resolve `dedupe-nav-includes` first to avoid doing this
  twice).
