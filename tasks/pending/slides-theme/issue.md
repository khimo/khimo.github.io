---
title: Decide whether to theme the reveal.js slides area
status: pending
created: 2026-05-27
tags: [design-system, slides, scope]
---
## Summary
The `slides/` reveal.js presentation area was left out of scope and untouched by
the renewal. Decide whether to bring it into the khimo design system.

## Context / why
The redesign unified the landing, menu, and content pages, but `slides/` is a
separate reveal.js area. Leaving it unthemed is a visible inconsistency; theming
it is extra work that may not be warranted.

## Acceptance criteria
- [ ] A decision is recorded: theme `slides/` or explicitly leave it as-is.
- [ ] If theming: scope which decks/templates are affected and apply the khimo
      language (tokens, type, coral accents) to the reveal.js theme.
- [ ] If not theming: document why and note any boundary (e.g. nav linking).

## Notes / progress
- Currently fully out of scope and untouched.
- Note: `slides/` contains many decks and generated `_site` output; assess blast
  radius before committing to theming.
