# Navigation and Footers

Both are part of the identity, not boilerplate. Pick a form for the site's size and audience, then keep the core rules.

## Navigation

### Core rules (any form)

- **Small and out of the way.** The primary button is the nav's most prominent item, outlined or filled.
- **Hierarchy:** more important links get dropdowns; the bar is balanced, not weighted to one side.
- The nav CTA and the hero CTA share the same label when they go to the same place.
- Visible focus, keyboard reachable, and a real mobile version (see `accessibility.md`).

### Forms

| Form | How | When |
|---|---|---|
| **Classic bar** | Logo left, links centered, CTA right | Most marketing sites; the safe baseline |
| **Transparent → solid** | Transparent over the hero, gains a background, border or blur once the hero is gone | Image or video heroes |
| **Sticky on scroll-up** | Hides while scrolling down, comes back on any scroll up | Long pages and articles; keeps content space without losing the nav |
| **Floating pill** | A detached, rounded bar centered near the top, often frosted, that shrinks on scroll | Modern product and studio sites. Common in component libraries, so give it the identity's own shape and color |
| **Mega menu with images** | Dropdown panels showing first- and second-level categories together, with images or product previews | Many products or audiences. NN/g testing shows mega menus work |
| **Fullscreen overlay** | A menu button opens a full-screen panel with large type links; hovering a link swaps an image | Agencies, portfolios, hospitality: few pages, strong brand |
| **Section index** | A fixed side rail or top progress bar listing the page's sections, highlighting the current one | Long one-pagers, editorial stories, case studies |
| **Bottom dock (mobile)** | A floating pill of 3-4 icons at the bottom of the phone screen | Mobile web apps and app-like sites (see `mobile-apps.md`) |
| **Experimental** | Radial menus, hidden drawers, interactive maps, non-linear paths (Locomotive, The Outline, Palmer, Google Arts & Culture) | Exploration-led sites: portfolios, culture, art. Never for buyers who need to find pricing |

### Mega menu details

- Hover menus must balance opening fast with not closing on slower users. Add a short open delay, and keep the panel open while the pointer travels diagonally toward it (the safe triangle in `ux-and-product-thinking.md`).
- Group items the way users think (card sorting), and supplement with breadcrumbs or a sitemap.
- On mobile it becomes an accordion inside a full-screen menu.
- Level 4 detail: the menu stays open and slides its content when moving between items (`landing-pages.md`).

## Footers

### Core rules (any form)

- **Size the footer to the links you have.** Most sites don't have 23 links, so they don't need a 5-column footer copied from Apple or Linear.
- Essential links stay: contact, privacy, terms. E-commerce adds shipping, returns and product links.
- Group links by visitor intent, keep lists short, leave generous spacing.

### Forms

| Form | How | When |
|---|---|---|
| **Small centered** | 3-5 centered links, logo above, socials below, copyright left, credits right. Works in dark mode | Small sites (the default for few links) |
| **Columns by intent** | 2-4 columns grouped by what the visitor wants (product, company, help), socials secondary | Many pages; e-commerce; SaaS |
| **CTA footer** | Opens with a direct headline and one action or a newsletter form with an incentive; links sit beside it | Conversion pages; the footer catches people who read to the end |
| **Oversized wordmark** | The logo or brand name spans the full width, often cropped by the bottom edge. Small mark in the header, big one in the footer | Brand-led sites. Now spread from high-end studios to wellness, tech and consumer brands |
| **Reveal (curtain)** | The footer is pinned behind the page; the last section lifts away to uncover it. The page body needs an opaque background | Pairs with the wordmark footer; gives the end of the page weight |
| **Image or video** | A scenic photo, cinemagraph or looping video behind the footer, with the tagline blended into it | Places and atmospheres: hotels, campuses, restaurants |
| **Interactive** | A spotlight that reveals a faint logo on hover, parallax with a small 3D object, a live clock for a studio's city | Studios and portfolios; the footer as the last surprise |
| **Shaped edge or pattern** | A wave or custom top edge that says "this is the end", or a background made of a brand mark | Friendly and consumer brands |

Award-winning references: Tenzo Matcha (wave edge, three intent columns), Devensoft (parallax reveal under the final CTA), Analyst1 (looping video, elements pointing to the newsletter CTA), Ghayath Foundation (XXL footer with particle video and one CTA), AUBG (campus photo with the tagline in the sky), Design by Dylan (parallax footer with a Spline interaction). Inspiration only, never copy.

## Sources

- Figma, web design trends 2026 (experimental navigation): https://www.figma.com/fr-fr/resource-library/tendances-web-design/
- NN/g, mega menus: https://www.nngroup.com/articles/mega-menus-work-well/
- Sticky vs. sticky-on-scroll-up: https://www.ignitingbusiness.com/blog/static-vs-sticky-vs-sticky-on-scroll-up-navigation-which-one-should-your-website-use
- Floating navs: https://21st.dev/blog/react-floating-navbar-components
- Footer examples 2026: https://www.digitalsilk.com/?p=5018
- Oversized footers: https://www.wix.com/studio/blog/big-website-footers
- Reveal footer: https://motion.dev/ui/components/footer-reveal
- Spotlight logo footer: https://www.framer.com/community/marketplace/components/torch-logo-reveal/
- Awwwards footer collection: https://www.awwwards.com/15-excellent-creative-website-footers.html
