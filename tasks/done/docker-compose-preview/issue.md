---
title: Docker Compose local preview / build
status: done
created: 2026-05-27
tags: [infra, jekyll, docker]
---
## Summary
Provide a Docker Compose setup to serve and build the Jekyll site locally,
because the host Ruby toolchain is broken.

## Context / why
The host Ruby is unusable for Jekyll, blocking local preview. A containerized
Ruby 3.3 environment gives a reliable, reproducible build/preview path.

## Acceptance criteria
- [x] `docker-compose.yml` based on `ruby:3.3`.
- [x] `docker compose up site` serves the site at localhost:4000.
- [x] `docker compose run --rm build` produces `_site`.
- [x] `PAGES_REPO_NWO=khimo/khimo.github.io` set so GitHub Pages plugins behave.

## Notes / progress
- Avoids touching the broken host Ruby entirely.
- This is the canonical way to preview/build the site during the redesign.
