# BeoLiving Intelligence — homepage redesign proposal

**Design language:** khimo "The Signal" · **Scope of this proposal:** the home page (`index.md`)
**Live prototype:** open `redesign-proposal/index.html` in a browser (dark + light themes, fully interactive).

---

## Why redesign

The current home page is a 2021 Bootstrap-4 theme (Open Sans / Merriweather, FontAwesome,
ScrollReveal). It works, but it reads as a generic template rather than a premium B&O × khimo
product:

- A **prose-first** opening — four dense paragraphs before the reader sees anything.
- A **21-row checkmark table** comparing Essential vs PRO — exhaustive but hard to scan.
- **FontAwesome glyphs** in `service-box` cards (rocket, book, cloud…) — off-brand emoji-like icons.
- A solid **coral banner** filling the page header — coral used as a large fill, the opposite of
  the "one hue, one job" rule.
- No dark mode, no signature graphic, no sense of the core idea: *one controller, many devices, one app.*

## What the redesign does

It rebuilds the same content on "The Signal" system, where the invisible flow
**intention → bridge → outcome** is made visible and coral marks only what's live.

| Current | Redesigned |
|---|---|
| Prose intro paragraphs | **Full-viewport hero**: editorial headline + animated **Signal Path** (your devices → BLI → one app) + the stark stat **92 integrations** |
| Coral banner header | Coral reduced to a *thread*: CTA, active nav, the one live node, the icon's operational element |
| 21-row feature table | **Two tier cards** (Essential / PRO) + an **8-row grouped comparison** — same facts, scannable |
| FontAwesome service boxes | **Custom 1.6-stroke line icons**; coral only on the operational element (bulb rays, lock keyhole, camera lens, thermostat needle) |
| Flat capability list | **Bento grid** of what it connects: B&O audio · lighting · blinds · climate · cameras · security · voice |
| Linear scroll, no nav aid | **Sticky TOC scrollspy** + coral **scroll-progress thread** + oversized **ghost section numerals** |
| "How it works" implied | **Swim-lane sequence diagram**: App → BLI → home, with live-state feedback returning |
| Single light theme | **Dark + light themes**, OS-preference default, footer toggle persisted to localStorage |
| Static load | `prefers-reduced-motion`-gated fade-up reveals; the scroll-morph coral badge tracks top-left |

## Section map (prototype)

`Hero` → `01 How it works` (swim-lane) → `02 What it connects` (bento) →
`03 Editions` (tier cards + comparison table + the 4-minute install video) →
`04 Get started` (Quick setup · User guide · Link 3rd parties steps) →
`05 Go further with PRO` (PRO guide · Lua macros · Ideas · Supported systems · Training · Developers) →
`06 Support` (Remote support · Troubleshooting · FAQ · Specs · Contact).

All existing links/destinations are preserved. The stark **92** is the real count of brand logos in `/logos`.

## How to adopt it (next step, not done here)

This prototype is a **standalone static page** so it can be reviewed without touching the live
Jekyll site. To ship it, the work would be:

1. Add `khimo.css` + `khimo.js` to the site assets; add the `<head>` theme-boot snippet to `_includes/head.html`.
2. Port the prototype markup into the `index.md` layout (a new `_layouts/khimo.html`), keeping Jekyll front-matter and link paths.
3. Optionally re-skin the inner doc pages (guides, driver list) with the same tokens in a later pass.
4. Verify both themes + mobile width; confirm reduced-motion disables the animations.

## Notes / open questions

- Hero headline is a proposed line ("Your whole home, winding into one signal." — echoes the khimo
  tagline). Swap for the preferred marketing line.
- The comparison table groups the 21 original rows into 8 themed rows for scannability; the full
  granular list can live on a dedicated "Compare editions" page if wanted.
- Per request, the BeoWorld forum link was removed from Contact.
