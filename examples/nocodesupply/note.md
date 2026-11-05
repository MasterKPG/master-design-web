# No-Code Supply Co.

- **Source:** https://www.nocodesupply.co (found via navbar.gallery), captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** directory / resource library
- **Take from it:** a tiny top bar ("MENU ::" plus two buttons) with the real navigation in a full bento-style overlay; search as a floating dock at the bottom of the screen; a footer that is the site's taxonomy with counts
- **Related guideline:** `guidelines/navigation-and-footers.md`, `guidelines/components.md`
- **Don't take:** the cards' tag rows in 10px mono with "…" truncation; hard to scan

Webflow. General Sans (500) for titles, JetBrains Mono uppercase for tags, labels and buttons. Warm near-black `#1d1c1a`, cream text `#eeebdd`, one orange-red `#d6452a` for the brand name and Subscribe.

## Screenshots

| File | What it shows |
|---|---|
| `desktop-01-hero.jpg` | Orange brand name, a four-line promise, an item counter ("ITEMS 2805"), a grid/list toggle, the card grid and the floating search dock |
| `desktop-04-menu-open.jpg` | "MENU ::" opened: a bento of dark panels (big nav words, Subscribe, a product promo, Info links) over the dimmed grid |
| `desktop-02-bento-grid.jpg` | The card grid: mixed card sizes, screenshot, two mono tags, an arrow button, title, tag line |
| `desktop-03-subscribe-footer.jpg` | "Subscribe for updates", then the footer: a category pill bar and the full taxonomy with item counts |
| `desktop-nav-hover.jpg` | Logo, Menu, Submit, Subscribe, layout toggle and dock buttons before / during / after hover |
| `mobile-01.jpg` | Phone: the same small bar, cards one per row, the dock at the bottom |

## Navbar

- **Almost nothing at the top:** a small two-shape logo, a "MENU ::" button (mono, the "::" reads like a grip icon), and on the right "SUBMIT" (dark) and "SUBSCRIBE" (orange). The grid starts right away.
- **Hover:** the logo goes from orange to cream; buttons lift one shade lighter. Small, fast changes.
- **Menu overlay is a bento.** Clicking MENU turns "::" into "×" and drops a grid of dark panels over the page: a big panel with Inspo / Code / Learn / Tools / Creators / Jobs in large type and a "Follow us" row, a "Get updates — Subscribe" panel, a "Products" panel promoting their MAST framework in huge letters, and an "Info" panel (About, Feedback, Directory). The page behind dims. The menu doubles as an ad slot for their own products.
- Opens in about 0.3s with a fade and slight drop.

## Search dock

- Search lives in a **floating cream bar fixed at the bottom-centre**: a search field, an "All ▴" filter, and two square buttons (+ submit, ↓ scroll). It stays put while the grid scrolls under it. For a library, search is the main navigation, so it gets the most reachable spot.

## Layout

- Card grid with **mixed sizes** (some cards span two columns and two rows) so the grid has rhythm instead of identical tiles.
- Each card: screenshot on a slightly lighter panel, two tag chips ("TOOLS", "APP"), a cream square arrow button, the name, and a mono line of tags.
- An item counter and a grid/list toggle sit above the grid like app controls.
- "LOAD MORE" as a full-width bar instead of infinite scroll.

## Footer

- Logo left, a pill bar of sections right (Inspo, Code, Learn, Tools, Creators, Jobs, Subscribe in orange).
- Then the **whole taxonomy**: "Type" (APP 402, ARTICLE 85, WEBSITE 1752…) and "Tag" lists in mono with counts. A sitemap that also shows how big the library is.

## Phone

- The top bar stays the same three items. Cards go one per row, full width. The search dock stays at the bottom where the thumb is.

## What to learn

- For content-heavy sites, keep the top bar tiny and put the full navigation in an overlay that can also promote things.
- Put search where the thumb and eye are (a bottom dock) when search is the main task.
- A footer can be an index with counts, which is useful and shows scale without a "2,800+ resources" stat line.
