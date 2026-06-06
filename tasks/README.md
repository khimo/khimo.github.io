# Task / Issue Tracker

A simple, file-based task tracker for the **khimo.github.io redesign** (BeoLiving
Intelligence docs, a Jekyll site) onto the khimo **"The Signal"** design system.

No database, no external service — just folders and Markdown. Everything is in
git, diffable, and reviewable in a PR.

## Status folders

A task's **status is its location**. There are four status directories:

| Folder         | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| `pending/`     | Agreed/identified work that has not been started.            |
| `inprogress/`  | Actively being worked on right now.                          |
| `done/`        | Completed and verified.                                      |
| `rejected/`    | Considered and deliberately not done (keep for the rationale).|

## A task is a folder

Each task is a folder named with a short **kebab-case `<slug>`** (e.g.
`static-client-side-search`). Inside it:

```
<status>/<slug>/
  issue.md            # the task itself (front-matter + body)
  attachments/        # screenshots, mockups, exported files, etc.
    .gitkeep          # keeps the (possibly empty) dir in git
```

`attachments/` holds any binary/extra files for the task — screenshots, design
exports, PDFs, reference images. Reference them from `issue.md` with relative
links, e.g. `![hero](attachments/hero.png)`.

## Moving a task

To change a task's status, **move its whole folder** between status dirs:

```sh
git mv tasks/pending/<slug> tasks/inprogress/<slug>
```

Then update the `status:` field in `issue.md` to match the new folder. The
folder location is the source of truth; the front-matter `status:` mirrors it.

## `issue.md` schema

Each `issue.md` starts with YAML front-matter, followed by a fixed set of
sections:

```markdown
---
title: <human-readable title>
status: pending|inprogress|done|rejected
created: 2026-05-27
tags: [design-system, search, ...]
---
## Summary
One or two sentences: what this task is.

## Context / why
Background and motivation. Why does this matter, what problem does it solve,
how does it fit the redesign.

## Acceptance criteria
- [ ] Concrete, checkable outcomes that define "done".

## Notes / progress
Running log: decisions, gotchas, links, what's left.
```

### Field notes
- `title` — human title, free text.
- `status` — must match the containing status folder.
- `created` — ISO date the task was created (`YYYY-MM-DD`).
- `tags` — free-form labels for filtering (e.g. `design-system`, `search`,
  `jekyll`, `nav`, `infra`).
