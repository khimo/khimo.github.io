---
title: Consolidate the design system into one unified khimo skill
status: inprogress
created: 2026-05-27
tags: [design-system, skill, refactor]
---
## Summary
Fold the landing, global menu, and content extensions into a single unified
khimo design-system skill, replacing the current split across multiple CSS
files and the prototype directory.

## Context / why
The design system is currently spread across `khimo.css` (core),
`khimo-web.css`, `khimo-content.css`, and the `redesign-proposal/` prototype.
A single source of truth is easier to maintain and apply.

## Acceptance criteria
- [ ] One unified khimo skill covers landing + menu + content.
- [ ] Core (`khimo.css`), web (`khimo-web.css`), and content
      (`khimo-content.css`) layers reconciled into the unified skill.
- [ ] Prototype material from `redesign-proposal/` either absorbed or retired.
- [ ] Existing pages still render correctly after consolidation.

## Notes / progress
- Partially planned in `redesign-proposal/DESIGN-SYSTEM-PROJECT.md`.
- In progress.
