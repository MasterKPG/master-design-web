# Examples

Reference sites, screenshots, Figma files and video transcripts that illustrate the guidelines.

## Rule: examples are inspiration, never to copy

- Take a *specific idea* from an example (a hierarchy, a spacing choice, a transition), not the whole design.
- Never reproduce a reference site's layout, copy, imagery or branding wholesale.
- This matches the frankensteining approach in `../guidelines/identity-and-site-building.md`: borrow section-level ideas from several sources, then apply your own identity on top.

## What's here

| Folder | Contents | Index |
|---|---|---|
| `actual/` | 5 screenshots of actual.inc | `actual/note.md` |
| `ai-telltales/` | Two lists of vibe-coding tells (React/TS code + UI copy/typography) | Summarized in `../guidelines/vibe-coding-tells.md` |
| `figma-examples/` | 24 `.fig` files and 23 transcripts of UI/UX design videos | `figma-examples/README.md` |
| `creative-sites-patterns.md` | Patterns across the 18 creative sites below: navbars and sidebars, phone menus, loaders, hovers, scroll, CTAs, footers, mascots, media choice | The evidence; the defaults are in the guidelines (mapped at the top of the file) |

### Creative sites (v3)

Desktop and phone screenshots, hover and menu frames, and a note per site. Captured 2026-11-05. Most were found via navbar.gallery.

| Folder | Look at it for |
|---|---|
| `brandappart/` | Icon sidebar that becomes a phone bottom dock; clients as 3D keychains; service cards that fold back |
| `brethren-design-co/` | Logo that keeps changing typeface; founders' faces on the CTA; menu growing from its pill |
| `colabs/` | Inverted-corner notches for logo, headline and buttons; frosted pill nav; macro photography |
| `fc88/` | Football vocabulary everywhere; product loader; countdown hero; handwritten annotations; sentence form |
| `hex/` | Split nav with centred logo; CTA with selection handles; product chips in the copy; sans + italic serif |
| `isomorphic-labs/` | Outlined cells as the identity (logo, nav, buttons, footer); rectangle-to-pill hover |
| `letude/` | Edge tabs instead of a navbar; hero that builds itself; wordmark framing rapid-cut video |
| `lightship-rv/` | Nav that becomes a pill with a symbol; scatter that gathers; pinned headline with images rising |
| `mugen-studio/` | (template) live clock and counts in the nav; person card with availability as the hero CTA |
| `nocodesupply/` | Tiny bar + bento menu overlay; search dock at the bottom; taxonomy footer |
| `pixelwrld/` | One-screen site where the icons are the nav; blur-the-rest hover previews |
| `scrintal/` | Product objects as decoration; sticker words in the headline; brand-color card footer |
| `seen-advertising/` | Agency as a grocery shop; walking receipt mascot in hero, menu and footer |
| `selfaware-studio/` | Full-screen menu as a hanging mobile; letters that outline under the cursor |
| `stenger-bike/` | Mega menu built from buyers' decision criteria; trust strip above the nav |
| `the-raw-materials/` | Colored section tabs that grow with progress; "entering section" bar; 3D avatars |
| `trifecta/` | (template) contact-card sidebar; rolling text hover; "/" as the brand mark |
| `zentry/` | One tilted shape for hovers, masks and shards; corner-anchored giant type; reactive backers list |

**Reading `.fig` files:** they're zip archives (`canvas.fig`, `thumbnail.png`, `meta.json`, `images/`). The thumbnail is only 400px wide. `canvas.fig` is Figma's binary "fig-kiwi" format: chunk 0 is the schema (deflate), chunk 1 is the data (zstd). Decompressing chunk 1 and extracting readable strings shows layer names, text content, font names and icon names. To see the designs properly, open them in Figma (drag the file into the Figma app) and use the Figma MCP with the file's URL.

## How to add an example

One file **or** one folder per example. Use a short kebab-case name.

```
examples/
├── README.md
├── actual/                        # folder: note + screenshots
│   ├── note.md
│   └── actual-hero.png
├── wise-cta.md                    # single file: link + note
└── amigo-ai-scroll-motion/
    ├── note.md
    └── section-transition.gif
```

Each example's note (`<name>.md` or `<name>/note.md`) should contain:

```markdown
# <Site or screen name>

- **Source:** <URL or "screenshot, captured YYYY-MM-DD">
- **Type:** landing page | dashboard | mobile app | web app | component
- **Take from it:** <one or two lines, e.g. "good hero hierarchy", "nice scroll transitions">
- **Related guideline:** <e.g. guidelines/micro-interactions-and-motion.md>
- **Don't take:** <optional: what to ignore or avoid>
```

Keep "Take from it" short and specific. It's what the skill uses to decide whether an example is relevant.

## Referenced in the guidelines, not yet saved here

- **Wise:** heavy, bold, tight CTA type over an image.
- **Amigo AI:** repeated motion identity (pull-away scroll, gradient section transitions).
- **Better Stack:** rotating logo ribbon.
- **Miro:** full-screen color tabs for features.
- **Attio:** testimonials.
