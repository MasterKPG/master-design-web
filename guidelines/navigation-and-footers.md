# Navigation and Footers

Both are part of the identity, not boilerplate. Pick a form for the site's size, audience and role (`design-directions.md`), then keep the core rules. The nav, the phone menu and the footer are one system: choose them together (see "Make the nav and footer a pair" at the end).

Folders like `brandappart/` are in `../examples/`. Open the note and screenshots before borrowing.

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

### Brand-led forms

From the creative sites set. Each one only works when its shape or idea comes from the identity, so pick it as part of the direction, not as decoration.

| Form | How | When | Seen in |
|---|---|---|---|
| **Icon sidebar → bottom dock** | A rail of icon buttons down the left; the label slides out on hover; the rail inverts its colors with the section behind it. On phone the same icons become a labelled bottom dock | Studios and portfolios where the top of the page belongs to the work. Few sections (≤6) | `brandappart/` |
| **Corner frame** | Logo, CTA, menu and a live detail each hold one corner of the screen; the middle stays free | With the icon sidebar or a full-screen hero | `brandappart/` |
| **Split nav, logo centred** | Links left and right of a central wordmark, sometimes framed by crop marks | Product sites with a strong wordmark and an even number of links | `hex/` |
| **Joined cells** | Logo and links as outlined boxes joined like a table row; hover rounds one cell into a pill | When an outlined cell or grid is the identity's shape; repeat it in buttons and the footer | `isomorphic-labs/` |
| **Transparent → pill + symbol** | Text over the hero video; after the hero it becomes a frosted pill and the wordmark swaps for the brand's symbol | Image or video heroes for consumer products; brands with a recognizable symbol | `lightship-rv/`, `zentry/` (black bar on scroll-up) |
| **Logo in a notch** | The hero card has a cut-out corner and the logo sits in it; links in a frosted pill | When a notch or inverted corner is the identity's shape | `colabs/` |
| **Edge tabs** | No bar: tiny marks on the screen edges ("W", "INFO", "C") expand into full words on hover. On phone they show expanded | Studios with 3-4 pages whose work fills the screen | `letude/` |
| **Contact-card sidebar** | A fixed column holding a face with "Book a call", open slots, links, phone and email | Service businesses selling a person's time; the nav doubles as the CTA | `trifecta/` |
| **Colored progress tabs** | One tab per section, each in that section's color; the current one grows tall. On phone a bottom tab strip | Long one-pagers split into color-coded chapters (a richer section index) | `the-raw-materials/` |
| **Branded sidebar with CTAs** | Big condensed links with dashed dividers and two stamped CTAs at the bottom | Voice-led brands where the menu speaks the brand's vocabulary | `fc88/` |
| **Tiny bar + bento overlay** | The bar holds "MENU" and two buttons; the menu opens as a grid of panels that also promotes products | Directories, shops and libraries with many categories and featured items | `nocodesupply/` |
| **Menu grows from its button** | The menu card grows out of the "MENU +" pill instead of sliding in from the side | Any overlay menu; ties the motion to the element the user touched | `brethren-design-co/` |
| **Menu as an object** | The full-screen menu is a thing from the brand's world (a hanging mobile whose links swing on wires) | Playful studios and portfolios with 3-4 links | `selfaware-studio/` |
| **Decision mega menu** | Mega menu grouped by the buyer's decision criteria (type, use, motor, wheel size) instead of the company's catalog | Shops where people choose by need (NN/g: group the way users think) | `stenger-bike/` |
| **One screen = the nav** | The home page is only the links (four app icons); hover blurs the rest and blooms a preview in that item's style | One-screen personal hubs and link pages | `pixelwrld/` |

### Living details

Small, true details make a nav feel inhabited. Use one or two:

- A live local clock for a studio's city (`mugen-studio/`, `brandappart/`).
- A work count beside the link: "Our Work [6]", "/009/" (`mugen-studio/`, `trifecta/`).
- An availability line: "2 slots open March'26" (`trifecta/`, `mugen-studio/`). Only if someone keeps it up to date.
- A logo that keeps changing typeface or glyphs (`brethren-design-co/`, `the-raw-materials/`).
- A news ticker, or a "Skip intro" button when there's a loader (`fc88/`).
- A trust strip above the nav for shops: delivery, returns, rating (`stenger-bike/`).

### Phone navigation

- **Translate the desktop nav, don't shrink it.** A sidebar becomes a bottom dock (`brandappart/`), section tabs become a bottom tab strip (`the-raw-materials/`), hover-only labels show expanded because phones have no hover (`letude/`). Thumb zone and 44px targets apply (`mobile-apps.md`).
- **Label the button "Menu".** Most of the set does ("Menu", "☰ MENU", "MENU +", "☰ Navigation"). A word is clearer than a bare hamburger.
- **Give the phone menu the identity too:** a colored panel with the mascot and the links on a torn receipt (`seen-advertising/`), big pill buttons over a blurred page (`scrintal/`), a card dropping from the nav pill with big ruled links and a photo (`lightship-rv/`).
- **Art-direct the phone.** A different hero crop or line can work better on a narrow screen (`letude/`). Crop product mockups at the edge instead of shrinking them until they're unreadable (`hex/`).
- **Mistakes seen in the set:** a five-line announcement bar fixed on phone (`scrintal/`), floating buttons over body text (`pixelwrld/`), a cookie toast covering content (`fc88/`), a modal that locks the page (`lightship-rv/`).

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
| **Brand-color card** | The footer is a card in the brand color, inset from the page edges with rounded corners | Product sites with one strong brand color (`scrintal/`) |
| **CTA card + gradient band** | A dark CTA card on top; under it a gradient band holds mono link columns | Brand-led tech; ties the footer to the hero's palette (`zentry/`) |
| **Animated wordmark** | The giant wordmark animates: letters flip, fill or outline as it comes into view | Studios whose name is the brand (`letude/`) |
| **The metaphor's ending** | The footer is the last object of the brand's metaphor: a receipt ("Thanks for shopping with us", barcode) for an agency run as a shop | Only when the whole site follows that metaphor (`seen-advertising/`) |
| **Cell grid matching the nav** | The footer reuses the nav's outlined cells | When the nav is joined cells (`isomorphic-labs/`) |
| **Taxonomy with counts** | Every category with its number of items | Directories, libraries and shops (`nocodesupply/`) |
| **Founders' photo** | The founders over an illustration pattern, with the closing line | Small studios selling people (`brethren-design-co/`) |
| **Mascot sign-off** | The mascot closes the page with one true line ("This dark page saves energy") | Brands with a character (`fc88/`) |
| **Mark before the footer** | The brand symbol alone, large, on its own band just before the links | Brands with a symbol, after a long product story (`lightship-rv/`) |
| **Acknowledgement first** | The footer opens with an Acknowledgement of Country or a values line | When it matters to the brand and its place (`colabs/`) |
| **No footer** | A "•••" button expands into the few links | One-screen sites (`pixelwrld/`) |

Award-winning references: Tenzo Matcha (wave edge, three intent columns), Devensoft (parallax reveal under the final CTA), Analyst1 (looping video, elements pointing to the newsletter CTA), Ghayath Foundation (XXL footer with particle video and one CTA), AUBG (campus photo with the tagline in the sky), Design by Dylan (parallax footer with a Spline interaction). Inspiration only, never copy.

## Make the nav and footer a pair

The nav opens the page and the footer closes it, so they should read as one brand. Defaults from the set:

- **Repeat the shape.** Joined-cell nav → cell-grid footer (`isomorphic-labs/`). Logo in a notch → notched buttons and cards down to the footer (`colabs/`).
- **Small mark at the top, big mark at the bottom.** A compact logo or symbol in the nav, the wordmark huge in the footer (`brandappart/`, `letude/`, `lightship-rv/`).
- **Carry the character and the vocabulary.** If the menu has the mascot or speaks the brand's language, the footer does too (`seen-advertising/`, `fc88/`).
- **Same CTA label in both,** when it goes to the same place.
- **Size both to the role** (`design-directions.md`). A shop or directory needs a findable nav and a full footer (decision mega menu + taxonomy footer). A studio with four pages can use an expressive nav and a short footer. Never trade findability for style when buyers need to find products or pricing.
- **Plan the phone version at the same time** (phone navigation above).

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
- Creative sites set (mostly via navbar.gallery, captured 2026-11-05): `../examples/creative-sites-patterns.md`
