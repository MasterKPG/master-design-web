# Isomorphic Labs

- **Source:** https://www.isomorphiclabs.com (found via navbar.gallery), captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** landing page (AI drug discovery company)
- **Take from it:** one structural motif (thin outlined cells that join like a table) used for the logo, the nav, the buttons, the hero layout and the footer; hover that rounds a rectangle into a pill; soft 3D science renders instead of stock photos
- **Related guideline:** `guidelines/navigation-and-footers.md`, `guidelines/icons-buttons-states.md`, `guidelines/identity-and-site-building.md`
- **Don't take:** the interactive 3D model that eats the mouse wheel (scrolling over it zooms the molecule and the page stops moving)

Webflow + GSAP (ScrollTrigger, SplitText). Söhne in Extraleicht 200 for the big lines, Leicht/Buch for text, Söhne Mono uppercase for every label and button. Palette: white and a mint-to-sky pastel gradient, black 1px lines, charcoal footer. Colour comes only from the 3D renders.

## Screenshots

| File | What it shows |
|---|---|
| `desktop-01-hero.jpg` | Hero as a grid of outlined cells: "Solve all disease" in one, the intro in another, a 3D protein render breaking out of the grid |
| `desktop-02-intro-and-news.jpg` | Mission text left, "Latest from Iso" as small outlined news rows right |
| `desktop-03-goal-card.jpg` | "Our goal" card with a voxel render and a "WORK WITH US [→]" button |
| `desktop-04-three-doors.jpg` | Three joined cards (Leadership, Culture, Heritage), each a door to a page |
| `desktop-05-3d-model-zoomed.jpg` | The interactive molecule after the wheel zoomed it: the scroll trap |
| `desktop-06-news-footer.jpg` | News cards, "MORE NEWS [→]", then the footer as a grid of outlined cells on charcoal |
| `desktop-nav-hover.jpg` | Nav cells before / during / after hover, and the Careers dropdown |
| `mobile-01..03.jpg` | Phone: boxed headline, black render panel, stacked doors, quote, footer grid |

## Navbar

- **The logo is three outlined boxes**: the symbol, "Isomorphic", "Labs". The nav on the right is five more boxes joined edge to edge (OUR TEAM, OUR TECH, PARTNERSHIPS, CAREERS ▾, NEWS) in 11px mono uppercase. It reads as a row of table cells.
- **Hover rounds the cell into a pill** (radius animates from ~6px to fully round in 0.15s). Quiet but tactile, and it's the same everywhere: nav, buttons, footer links.
- **Careers dropdown**: more cells stack under the Careers cell (LIFE AT ISO, WORK WITH US, JOB OPENINGS), each its own outlined box.
- **Fixed, with a soft blur strip** behind the bar: content going under it blurs instead of being cut by a hard background.
- **Phone:** the three logo boxes and a square "+" button instead of a hamburger. The plus fits the box system.

## Hero

- No full-bleed image. The hero is a 2×2 grid of thin rounded cells; the headline "Solve all disease" in very light weight sits in the top-left cell, the intro paragraph in the bottom-left, and a glossy 3D protein render with a DNA strand overlaps the right cells and spills out of the grid.
- Mint-to-sky gradient behind it. Calm, clinical, optimistic.

## Scroll and motion

- Sections slide up with GSAP. Headlines use SplitText (lines reveal).
- **Buttons are two cells:** a mono label box plus a separate square arrow box ("OUR TEAM [→]"). On hover both round off.
- **Three doors:** Leadership, Culture, Heritage as three joined cards with a tiny "■ OUR LEADERSHIP" label, a one-sentence promise and a two-cell button. Shows what's behind each page without stats.
- **"Isomorphism":** the name is explained ("an underlying symmetry … between biology and information science") next to an interactive 3D model on a faint grid. Nice idea, but the model captures the wheel, so scrolling over it zooms instead of moving the page.
- A big centered quote from the CEO with name and title in two small mono cells.

## Media

- All imagery is 3D: proteins, DNA, voxel cubes, glassy scales, in the same pastel palette and soft lighting. One person photo (the CEO) for the quote and a news item. The renders show the science without diagrams or numbers.

## Footer

- Charcoal panel. Left cell: copyright. Middle: two columns of link cells (Home, Life at Iso, Our team… LinkedIn, X) joined like a table. Right: "Contact us" cell with three emails and an "Info" cell with legal links. Same cell language as the nav, inverted.

## Phone

- The cell motif survives: headline in an outlined box, link cells in the footer two per row, two-cell buttons. The 3D render sits on a black panel under the headline.

## What to learn

- A single structural motif (outlined cells) can carry the whole identity: logo, nav, buttons, layout, footer.
- Mono uppercase labels plus a very light large weight gives "science" without being cold.
- A subtle shape change (rectangle → pill) is enough hover feedback when it's consistent everywhere.
- Never let an embedded 3D viewer capture the scroll wheel. Require a click or a modifier key to interact.
