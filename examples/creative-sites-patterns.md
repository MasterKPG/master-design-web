# Creative sites: patterns across the v3 set

What 18 sites (mostly from navbar.gallery) do differently from the generic landing page. Each pattern names the sites that show it; open that site's `note.md` and screenshots for details. Captured 2026-11-05, desktop 1440×900 and iPhone 13.

These are ideas to borrow one at a time, never a look to copy (see `README.md`).

**The defaults drawn from these patterns now live in the guidelines.** This file stays as the evidence and the index to the screenshots:

| Section here | Guideline |
|---|---|
| 1. The one idea, 11. Media | `../guidelines/design-directions.md` (sections 3 and 5) |
| 2. Navbars, 3. Phone navigation, 9. Footers | `../guidelines/navigation-and-footers.md` |
| 4. Loading, 6. Scroll | `../guidelines/hero-and-scroll-motion.md` |
| 5. Hover | `../guidelines/micro-interactions-and-motion.md` (hover styles) |
| 7. Proof, 8. CTAs | `../guidelines/social-proof-and-logos.md`, `../guidelines/components.md` (CTAs on brand-led sites) |
| 10. Mascots | `../guidelines/identity-and-site-building.md` (context elements), `design-directions.md` |
| 12. Type and copy | `../guidelines/typography.md` (type and copy moves) |

## 1. The idea comes first: one metaphor, used everywhere

The strongest sites pick one idea from the brand's world and apply it to every label, shape and interaction.

- **The customer's world as vocabulary.** FC88 talks football everywhere (Intro / Game plan / Kick-off whistle / "Ready to kickoff?!"). Seen Advertising runs the agency as a grocery shop (services are packaged products with ingredients and barcodes, "Check out", a receipt footer). → `fc88/`, `seen-advertising/`
- **The brand name explains the brand.** L'Étude puts the dictionary entry for "étude" in the hero and builds an archive feel (index codes "LET.27"). Brethren ("brothers") photographs the two brothers in matching pink and writes "Give your brand some brotherly love". Raw Materials keeps reshaping its own "RM" letters. Isomorphic Labs explains "isomorphism" next to its 3D model. → `letude/`, `brethren-design-co/`, `the-raw-materials/`, `isomorphic-labs/`
- **One shape or mark as the identity.** Zentry's tilted quadrilateral (nav hover, image masks, CTA shards). Isomorphic's outlined cells (logo, nav, buttons, footer). CoLabs' inverted-corner notch (logo, headline, every arrow button). Trifecta's "/" (headings, links, indexes, chamfered corners). Lightship's ✦✦ mark (nav, footer opener). → `zentry/`, `isomorphic-labs/`, `colabs/`, `trifecta/`, `lightship-rv/`
- **The product's own objects as decoration.** Scrintal decorates with its sticky notes, cursor and blocks. Hex uses its prompt chips and selection handles on buttons. Brand Appart turns every client into a 3D keychain. → `scrintal/`, `hex/`, `brandappart/`

How to apply: before choosing sections, write down the one metaphor or shape, then check every nav label, button, section title, loader and footer against it.

## 2. Navbars and sidebars

Navigation forms seen in this set, beyond the standard top bar:

| Form | What it looks like | Sites |
|---|---|---|
| Floating pill of separate chips | Each link its own pill with an icon | `scrintal/` |
| Split nav, logo centred | Links left and right of a central wordmark, framed by crop marks | `hex/` |
| Joined cells | Logo and links as outlined boxes joined like a table; hover rounds a box into a pill | `isomorphic-labs/` |
| Transparent → floating pill + symbol | Over the hero it's text on video; after it, a frosted pill with the wordmark swapped for a symbol | `lightship-rv/`, `zentry/` (black rounded bar on scroll-up) |
| Logo in a notch | The hero card has a cut-out corner and the logo sits in it; links in a frosted pill | `colabs/` |
| Edge tabs | No bar; tiny marks on the screen edges ("W", "INFO", "C") that expand on hover into "Work", "Contact" | `letude/` |
| Icon sidebar | Six icon buttons down the left, labels slide out on hover, colors invert per section; becomes a labelled bottom dock on phone | `brandappart/` |
| Contact-card sidebar | A fixed column with a book-a-call face, open slots, links, phone, email | `trifecta/` |
| Colored progress tabs | One tab per section in its color; the current tab grows tall; on phone a bottom tab strip | `the-raw-materials/` |
| Branded sidebar with CTAs | Big condensed links with dashed dividers, two stamped CTAs at the bottom | `fc88/` |
| Tiny bar + bento overlay | "MENU ::" and two buttons; the menu is a grid of panels that also promotes products | `nocodesupply/` |
| Menu as an object | Full-screen hanging mobile: Work / Process / Info swing on wires | `selfaware-studio/` |
| Menu grows from its button | A card grows out of the "MENU +" pill | `brethren-design-co/` |
| Decision mega menu | Mega menu grouped by the buyer's criteria (type, use, motor, wheel size) | `stenger-bike/` |
| One screen = the nav | Four app icons are the whole site; hover blurs the rest and blooms a preview | `pixelwrld/` |

Small details that make navs feel alive: a live local clock (Mugen, Brand Appart), a work counter "Our Work [6]" (Mugen, Trifecta "/009/"), open-slots meters (Trifecta, Mugen), a logo that keeps changing typeface or glyphs (Brethren, Raw Materials), a news ticker (FC88), a "Skip intro" button (FC88).

## 3. Phone navigation

- **Translate, don't shrink.** Brand Appart's sidebar becomes a labelled bottom dock; Raw Materials' tabs become a bottom tab strip; L'Étude's edge tabs show fully expanded because there's no hover.
- **Say "Menu".** CoLabs ("Menu" pill), Seen ("Menu"), FC88 ("☰ MENU"), Brethren ("MENU +"), Stenger ("☰ Navigation") label the button.
- **Menus with personality on phone:** Seen's green panel with the mascot and links on a torn receipt; FC88's green curtain "↓ WHERE TO?" with an icon that keeps morphing; Scrintal's three big pill buttons over a blurred page; Lightship's card dropping from the nav pill with big ruled links and a photo.
- **Art-direct the phone.** L'Étude has a different hero on phone ("WHO WOULD YOU BE" over a burning rose). Hex crops product mockups at the edge instead of shrinking them.
- Mistakes seen: a five-line announcement bar fixed on phone (Scrintal), floating buttons over body text (Pixelwrld), a cookie toast covering content (FC88), a modal locking the page (Lightship).

## 4. Loading and intro

- **The loader shows the product or the mark, then gets out of the way.** Zentry: black, then only the Z logo (~3s). FC88: line icons of a shirt, bucket hat and cap swapping, with a % counter. L'Étude: the hero builds itself (red screen, a photo flash, the wordmark typing letter by letter, the intro line fading in word by word).
- A countdown or counter can carry on from the loader into the hero (FC88's "365 → 276 days till the next season").
- Most sites have no loader at all (Scrintal, Hex, CoLabs). Only add one when it says something.

## 5. Hover and click feedback

| Effect | Sites |
|---|---|
| Rectangle rounds into a pill | `isomorphic-labs/` |
| Pill tilts in 3D into a trapezoid; text links gain a white pill | `zentry/` |
| Text rolls up and is replaced by a red copy (and "Book a call" → "Ready for a chat?") | `trifecta/` |
| Tab expands from a letter to the full word; badge spins | `letude/` |
| Icon square fills, icon goes solid, label slides out | `brandappart/` |
| Everything else blurs, the item blooms into a preview in its own style | `pixelwrld/` |
| Letters turn to outline where the cursor passes | `selfaware-studio/` |
| Computer screen flips to "CLICK ME!" | `selfaware-studio/` |
| Corner handles on the CTA (like a selected frame) disappear on hover | `hex/` |
| Services list: hovered item turns white and shows its image and chips | `mugen-studio/` |
| Backers list: one row turns yellow and its logo appears | `zentry/` |
| Logo color flip (orange → cream), link color to brand color | `nocodesupply/`, `brethren-design-co/`, `colabs/` |

Rule of thumb from the set: one hover style per kind of element, used everywhere; fast (0.15–0.4s); the change says something about the brand (tilt for Zentry's shape, roll for Trifecta's slash rhythm).

## 6. Scroll

- **Pinned headline, images moving through it** (Lightship "This is the AE.1").
- **Shape that straightens and grows** (Zentry's tilted panel becoming full-bleed).
- **Scatter that gathers** (Lightship's lifestyle photos; Brand Appart's floating keychains).
- **Cards that fold back as the next arrives** (Brand Appart services).
- **Pinned steps** where the active item expands (Zentry 01–03, Mugen's process columns).
- **Text that fills from grey to white** as you read (Mugen).
- **Section entry bars and counters** "You are now entering ( Work ) section ● 03/01" (Raw Materials).
- **Rapid cuts inside a fixed frame** (L'Étude's hero video behind the wordmark).
- **Marquees** for promises, services and clients (Seen, Brethren, Nocode's footer, FC88's tilted "Share this page" tape).
- Watch out: an embedded 3D viewer that captures the wheel stops the page (Isomorphic); Readymag-style containers break normal scrolling (Seen).

## 7. Showing what you do without stat walls

- **Show the work as objects:** keychains (Brand Appart), packaged products (Seen), the CRT showing client packaging (Brethren), product UI with live prompt chips (Hex), the product's canvas as the hero image (Scrintal).
- **Attach proof to the claim:** a customer quote beside each feature (Hex), a testimonial card inside the work grid (Brand Appart), a quote card over the customer's photo (CoLabs).
- **Turn proof into an interaction:** Zentry's backers list that lights up; Brand Appart's fanned testimonial cards; Mugen's testimonial tabs with a progress line.
- **Use true, specific numbers tied to the customer:** "276 days till the next season" (FC88), "2 slots open March'26" (Mugen), "3 open slots for August 2026" (Trifecta), a taxonomy with counts as the footer (Nocode Supply).
- Where sites do use stat walls (Zentry's collage, Mugen, Trifecta), they're the weakest part of the page.

## 8. Buttons and CTAs

- **Faces on the CTA** when you're selling people: Brethren's "LET'S DO WORK" pill with both founders, Brand Appart's "BOOK A CALL" with avatars, Trifecta's "Book a 30-Min Call / with Jessica", Mugen's project-manager card with "Book a 15-Min Call".
- **Fixed small CTA pill** at the bottom (Brand Appart, Brethren) instead of big banners.
- **Two-part buttons:** label cell + arrow cell (Isomorphic); a black circle arrow in a notch (CoLabs).
- **Buttons in the brand's voice:** "☑ I WANT TO MEET", "GET INTRODUCED" (FC88), "Discover" on a product (Seen).
- **Forms as sentences:** "Hello, my name is ___ I'm ___ at ___" (FC88). **Ask for what you need first:** Lightship's newsletter asks for the zip code (roadshows near you).

## 9. Footers

| Form | Sites |
|---|---|
| Brand-color card inset from the edges | `scrintal/` |
| Gradient band with mono columns under a black CTA card | `zentry/` |
| Giant wordmark that animates (letters flip and fill) | `letude/` |
| Faded giant wordmark across the bottom | `brandappart/`, `mugen-studio/` (cropped) |
| Receipt ("Thanks for shopping with us", barcode) | `seen-advertising/` |
| Leads with an Acknowledgement of Country | `colabs/` |
| Cell grid matching the nav | `isomorphic-labs/` |
| Full taxonomy with counts | `nocodesupply/` |
| Founders photo over an illustration pattern, "LET'S *Do* WORK!" | `brethren-design-co/` |
| Mascot + "Did you know? This dark page saves energy" | `fc88/` |
| Brand mark alone before the footer | `lightship-rv/` |
| Living detail: a mechanical counter | `hex/` |
| No footer: a "•••" button expands into links | `pixelwrld/` |

## 10. Mascots and characters

- **Seen's walking receipt** appears in the hero, the menu (holding a phone) and the footer. It's never introduced; it simply lives in the UI.
- **FC88's smiling shirt** (with hearts) closes the page and its line icons run the loader.
- **Raw Materials' 3D avatars** of the team replace headshots on contact cards.
- **Selfaware's hand-drawn computer** is the only image on the home screen.

How to apply: put the character in functional places (loader, menu, empty states, footer, 404) instead of a "meet our mascot" section.

## 11. Choosing media: photo, video, 3D, illustration

| Choice | When it worked | Sites |
|---|---|---|
| Real photos of the founders/team in the brand's colors | When people are the product | `brethren-design-co/`, `lightship-rv/` (team in the factory) |
| Lifestyle photos around the product | Consumer products sold on feeling | `lightship-rv/` |
| Macro / microscopy photos | Science made warm | `colabs/` |
| Soft 3D renders in one palette | Abstract science or tech | `isomorphic-labs/`, `zentry/` |
| 3D objects with the same lighting for every client | Mixed portfolios | `brandappart/` |
| 3D type, used once | One key word | `the-raw-materials/` ("different") |
| Hand-drawn line art and annotations | Playful, opinionated voices | `fc88/`, `seen-advertising/`, `selfaware-studio/` |
| Product UI, alive | Software | `hex/`, `scrintal/` |
| Video behind or inside the wordmark | Studios with a reel | `letude/`, `mugen-studio/` |

## 12. Type and copy moves

- Two voices in one headline: bold sans + thin italic serif (Hex).
- Icons or "sticker" words inside headlines (Scrintal).
- Product names as chips inside a sentence (Hex).
- Headlines split across the frame or into corners (Lightship, Zentry).
- Handwritten notes that argue with the headline (FC88).
- Bracketed labels and indexes: "[01] Projects", "( Hello )", "LET.27", "/001/" (Mugen, Raw Materials, L'Étude, Trifecta).
- The page admits it's long: "Kudos for reading this long story. Need a quick recap?" (FC88).

## Templates in the set

`mugen-studio/` and `trifecta/` are Framer templates with fictional studios. Take their mechanics (person-card CTA, rolling hovers, sidebar contact card), not their look, which is the common dark/neutral agency template.
