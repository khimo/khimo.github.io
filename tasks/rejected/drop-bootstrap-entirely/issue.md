---
title: Drop Bootstrap entirely site-wide (REJECTED)
status: rejected
created: 2026-05-27
tags: [design-system, css, decision]
---
## Summary
Considered removing Bootstrap from the whole site as part of the khimo renewal.
Rejected in favour of coexistence (keep Bootstrap, layer khimo on top).

## Context / why
A clean khimo-only stylesheet would be ideal, but the site has ~100+ content
posts that depend on Bootstrap. Ripping it out would require rewriting all of
them and replacing the auto-TOC mechanism.

## Acceptance criteria
N/A — this task was rejected. Recorded here for the rationale.

## Notes / progress
**Rejected.** Reasons:
- ~100+ content posts rely on the Bootstrap grid/utilities: `.row`, `.col-*`,
  `.embed-responsive`, `.img-fluid`.
- The automatic table of contents uses **bootstrap-toc**, which depends on
  Bootstrap + jQuery.
- Removing Bootstrap would mean rewriting every post and replacing the TOC.

**Chosen alternative:** coexistence — keep Bootstrap + bootstrap-toc + jQuery
for content grid/TOC, and layer the khimo design language on top (see
`full-site-renewal`).
