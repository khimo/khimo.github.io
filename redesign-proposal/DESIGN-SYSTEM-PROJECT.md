# khimo web — unified design system

**Goal:** one design language across *every* page of khimo.github.io, extending the `khimo-design-system`
skill ("The Signal" — built for inner content pages) to also cover the **global menu** and the **landing
page**. The end state is a single skill + asset set (`khimo.css` / `khimo.js` + Jekyll layouts/includes)
that themes landing, navigation and content identically.

**Locked from The Signal (unchanged):** coral `#F1574B` is the only saturated hue and only marks
live/active; near-black/warm-grey everything else; Inter + JetBrains Mono; hairline borders + catch-light;
generous whitespace; dark + light themes; `prefers-reduced-motion` gating.

---

## The page archetypes (what the system must cover)

| # | Archetype | Today | Unified-system treatment |
|---|-----------|-------|--------------------------|
| 1 | **Global menu** | Bootstrap `nav#mainNav`, jQuery | `khimo-nav` — fixed hairline bar, wordmark + coral badge, coral active/hover, dropdown for PRO, search, mobile sheet. **NEW design language.** |
| 2 | **Landing** | `front.html` / Bootstrap, FA icons | `khimo-landing` — hero + Signal Path, visual edition comparison, bento, logo wall, pathway cards. **NEW design language.** |
| 3 | **Content page** | `page.html` (blue band) | `khimo-page` — slim page header, Signal content styles (h2 ghost numerals optional, coral underlines, tip/callout, tables, code). |
| 4 | **Content + TOC** (guides) | `pagetoc.html` + bootstrap-toc | `khimo-page` + **auto sidebar TOC** restyled as the Signal scrollspy (coral active + inset underline). Most common page. |
| 5 | **Driver doc** | `drivertoc.html` + logo | `khimo-page` variant: driver logo tile in the TOC rail. |
| 6 | **Collection index** | `pageindextoc.html` | `khimo-page` rendering a child-page index as Signal cards/links. |
| 7 | **Search / utility** | `page` | `khimo-page`, minimal. |
| 8 | **Slides** | reveal.js, isolated | Out of scope (separate deck theme). |

The Signal skill already nails archetypes 3–6 conceptually (content styles + TOC scrollspy). The genuinely
new work is the **global menu** and the **landing language**; the rest is *mapping* + a Jekyll auto-TOC that
emits the markup `khimo.js` expects.

---

## Asset architecture (the eventual unified skill)

```
khimo.css            ← The Signal core: tokens, themes, content styles, TOC, cards, tables, seq, reveals
khimo-web.css        ← web extensions: global menu, CTA buttons, landing sections, logo wall, page header, breadcrumbs
khimo.js             ← scroll-morph badge, scrollspy, theme toggle, ghost numerals, progress, reveals
khimo-web.js         ← menu open/close + mobile sheet, auto-TOC builder (emits nav.toc for content pages)
```

Jekyll wiring:
```
_layouts/khimo-base.html      ← <head> (fonts, css, theme-boot) + khimo-nav + {{content}} + footer + js
_layouts/khimo-landing.html   ← extends base; full-bleed, no content column constraint
_layouts/khimo-page.html      ← extends base; content column + optional sidebar TOC + breadcrumbs
_includes/khimo-nav.html      ← the global menu (mirrors current nav.html links)
_includes/khimo-head.html     ← head with khimo assets
```

**Bootstrap strategy:** stop loading Bootstrap on khimo-themed pages. Content markdown is plain HTML
(`h2/p/table/blockquote/pre`) which `khimo.css` already styles. The few pages with Bootstrap grid markup
(landing, service boxes) are rebuilt in the new layout. jQuery/scrollreveal/bootstrap-toc retired in favour
of `khimo.js` + `khimo-web.js`.

---

## Rollout phases

- **Phase 1 — Landing + global menu.** Rebuild `index` on `khimo-landing`, all original content restored,
  new visual comparison, `khimo-nav`. *(in progress — see `index.html` prototype)*
- **Phase 2 — Wire Phase 1 into Jekyll.** Add assets + layouts/includes, port `index`, ship the menu site-wide.
- **Phase 3 — Content pages.** `khimo-page` + auto-TOC; migrate the guides (`pagetoc`) and simple pages.
- **Phase 4 — Driver docs + collection indexes.** Logo rail; Signal-styled child indexes.
- **Phase 5 — Consolidate into one skill.** Merge web extensions into the `khimo-design-system` skill so a
  single reference covers landing + menu + content.

---

## New visual edition comparison (replaces the 21-row table)

Keep **all** original features; present them as **capability groups**, each a card with a line icon and
feature rows. Tier is shown per feature: a coral check = in both editions; a coral **PRO** pill = PRO-only.
This is visual and scannable yet drops nothing.

- **Control & devices:** B&O products · Philips Hue · ONVIF cameras · B&O TVs · *Web interface control (PRO)* · *Web advanced configuration (PRO)*
- **Scenes & automation:** Create scenes · *Lua macro commands (PRO)* · *B&O Light & Control as macro triggers (PRO)*
- **Voice & remote:** Alexa · Google Assistant · IFTTT · Halo Remote auto-config · *Siri Shortcuts (PRO)* · *Halo Remote customization (PRO)*
- **Integrations:** *92 home-automation brands (PRO)* · *MasterLink legacy via BLGW/MLGW (PRO)*
- **Service & customization:** Remote support specialist · *BeoLiving App customization (PRO)* · *Configuration tunnels (PRO)*

(11 shared + 10 PRO-only = the original 21 rows, regrouped.)
