# Design Directions: Offer Several, Make Each One Hold Together

**The owner's rule:** never propose a single design and layout. Propose **2-3 directions** the user can choose from or mix. Each direction is a complete combination (palette, type, imagery, layout, nav, hero, proof, CTA, footer, motion), chosen from four inputs: the **role of the site in the business**, the **mood**, the **style** and the **color**. And every direction has to work together: each piece agrees with the others, so the site reads as one brand from the loader to the 404.

The catalogs hold the pieces: `hero-and-scroll-motion.md`, `social-proof-and-logos.md`, `navigation-and-footers.md`, `micro-interactions-and-motion.md` (hovers), `color.md` (palettes by mood), `typography.md`. This file is how to choose and combine them. Folders like `zentry/` are in `../examples/`.

## The four inputs, in order

1. **Role** decides what must be there: how findable the nav is, the section flow, the CTA, the proof, the footer size.
2. **Mood** (the three feeling words from Step 0) decides tempo, corners, type and the palette family.
3. **Style** decides the main material: photography, product UI, 3D, illustration, type.
4. **Color** comes from the product's world (`color.md`, "Let the color find the website"), tuned to the mood.

Role sets the requirements; mood, style and color decide how they look. A direction can change anything except what the role needs.

## 1. Role of the site in the business

| Role | The site must | Default skeleton | Nav and footer | Proof and CTA | Seen in |
|---|---|---|---|---|---|
| **Sell people's time** (studio, agency, consultant) | Make you trust the people and see the work | Statement or reel → work → services → people → proof → book a call | Expressive is fine: icon sidebar, edge tabs, contact-card sidebar, overlay menu; wordmark or founders footer | Work as objects, faces on the CTA, fixed CTA pill, availability line | `brandappart/`, `brethren-design-co/`, `letude/`, `trifecta/`, `seen-advertising/` |
| **Get sign-ups for software** | Show the product working and say exactly what it does | Promise + product → proof → how it works → features (tabs or bento) → testimonials → pricing → CTA | Classic bar, split nav, floating pill, mega menu with images; columns by intent or brand-color card footer | Logo band or logos inside the product, a quote beside each feature, one specific CTA label | `hex/`, `scrintal/`, the restaurant build (`identity-and-site-building.md`) |
| **Sell one physical product** (launch, DTC) | Sell the feeling, then the specs | Hero film or photo → product story (pinned, rising images) → lifestyle → specs → reserve → newsletter | Transparent → pill + symbol; mark before the footer, image footer | Press row, stat line, a newsletter that asks what it needs (zip code) | `lightship-rv/` |
| **Sell a catalog** (shop) | Help people find and choose | Trust strip → categories → featured → grid | Decision mega menu + search; columns by intent with shipping and returns | Ratings beside products, trust strip above the nav | `stenger-bike/` |
| **Directory or library** | Browse and search | Search → categories with counts → featured | Tiny bar + bento overlay, search dock; taxonomy footer | Counts, featured picks | `nocodesupply/` |
| **B2B with a new idea** | Win the argument, then get a meeting | The argument step by step → the plan → steps → meet | Branded sidebar in the customer's vocabulary; mascot sign-off | Specific true numbers, a sentence form, voice-led CTA labels | `fc88/` |
| **Credibility for science and deep tech** (investors, hires, partners) | Explain the idea and look serious | The idea explained → the science → the space or team → careers or contact | Joined cells, logo in a notch; cell-grid footer | Quote over the customer's photo, press, partners | `isomorphic-labs/`, `colabs/` |
| **Brand, community, launch** (web3, games, culture) | Build desire and get people to join | Shape-led hero → world → mechanics → backers → join | Transparent → bar on scroll-up; CTA card + gradient band | Backers list as an interaction | `zentry/`, `the-raw-materials/` |
| **A place or experience** (restaurant, hotel, venue) | Make you feel the place and book | Moody image → the offer (menu, rooms) → the place → book | Fullscreen overlay; image or video footer | Press and reviews near the booking CTA | Catalog "fits" in `hero-and-scroll-motion.md`, `navigation-and-footers.md` |
| **Personal hub, one-screen portfolio** | Point to the work and the links | One screen | One screen = the nav; no footer or "•••" | The work itself | `pixelwrld/`, `selfaware-studio/` |

**Findability vs. expression.** The more the visitor needs to find something (products, pricing, docs), the more standard the nav and footer stay, and the identity goes into the hero, imagery, copy and motion. The more the site sells a feeling or people, the more the nav and structure can carry the identity themselves. Never hide the nav from buyers who need pricing (`navigation-and-footers.md`).

## 2. Mood

| Mood words | Motion tempo | Shapes and corners | Type | Palette family (`color.md`) | Seen in |
|---|---|---|---|---|---|
| Calm, premium, quiet | Slow and smooth, few themes | Less rounding, premium imagery, some background noise | Refined sans or a serif | Neutral premium, monochromatic, calm | `lightship-rv/`, the luxury car rental build |
| Warm, friendly | Soft, a little springy | Warm background, round corners, big bubbly buttons | Rounded or friendly sans (Nunito, Rubik); a serif for food | Earthy, analogous | The restaurant build |
| Playful, loud | Lively and springy, unexpected moments | Doodles, stickers, a mascot, hand-drawn lines | Quirky display, condensed caps, handwriting | Playful, triadic | `fc88/`, `seen-advertising/`, `selfaware-studio/` |
| Precise, technical | Snappy ease-out | Straight-line grids, outlined cells, crop marks | Sans with mono labels | Deep, calm, monochromatic | `hex/`, `isomorphic-labs/` |
| Bold, energetic | Kinetic type, shapes that transform | One strong shape used everywhere | Heavy condensed display, giant type in the corners | Vibrant, neon noir | `zentry/` |
| Editorial, archival | Rapid cuts, typed text | Indexes, frames, lots of space | Serif or grotesk with mono indexes | Neutral, one accent | `letude/` |

The UI is the flavor: the same layout can feel friendly or premium by changing only these columns (`identity-and-site-building.md`, core principles).

## 3. Style: the main material

Pick **one main material** and light or grade it as one set (`color.md`, color grading). A second material can support it in small places.

| Material | When it worked | Seen in |
|---|---|---|
| Real photos of the founders or team, in the brand's colors | People are the product | `brethren-design-co/`, `lightship-rv/` (team in the factory) |
| Lifestyle photos around the product | Consumer products sold on feeling | `lightship-rv/` |
| Macro or microscopy photos | Science made warm | `colabs/` |
| Soft 3D renders in one palette | Abstract science or tech | `isomorphic-labs/`, `zentry/` |
| 3D objects with the same lighting for every client | Mixed portfolios | `brandappart/` |
| 3D type, once | One key word | `the-raw-materials/` |
| Hand-drawn line art and annotations | Playful, opinionated voices | `fc88/`, `seen-advertising/`, `selfaware-studio/` |
| The product's UI, alive | Software | `hex/`, `scrintal/` |
| Video inside or behind the wordmark | Studios with a reel | `letude/`, `mugen-studio/` |

Context elements follow the same scale: blobs and fun colors (most playful), doodles (in between), realistic imagery (professional) (`identity-and-site-building.md`).

## 4. Color

- The product's world gives the palette (hospital vs. disco); the mood picks the family; the role adds limits. Dopamine palettes are off-brand for a bank or a hospital (`color.md`).
- **Color can be the navigation.** Give each section or service its own color and reuse it in its tab, card and page (`the-raw-materials/`, `brandappart/` service cards). Keep it a system: the same color always means the same section.
- Background shift between sections works when the brand has several moods or product lines (`hero-and-scroll-motion.md`).

## 5. The one idea that ties it together

The strongest sites in the creative set pick **one metaphor or one shape** from the brand's world and apply it everywhere (`../examples/creative-sites-patterns.md`, section 1):

- **The customer's world as vocabulary:** football words for a football apparel brand (`fc88/`), an agency run as a grocery shop (`seen-advertising/`).
- **The name explains the brand:** the dictionary entry for "étude" (`letude/`), two brothers in matching pink (`brethren-design-co/`).
- **One shape as the identity:** a tilted quadrilateral for hovers, masks and shards (`zentry/`), outlined cells (`isomorphic-labs/`), an inverted-corner notch (`colabs/`), a "/" (`trifecta/`).
- **The product's objects as decoration:** sticky notes and cursors (`scrintal/`), prompt chips and selection handles (`hex/`).
- **A character in functional places:** loader, menu, empty states, footer, 404, instead of a "meet our mascot" section (`seen-advertising/`, `fc88/`).

Write the idea down before choosing sections, then check every nav label, button, section title, hover, loader, phone menu, footer and 404 against it. Each direction gets its own idea.

## 6. Make the pieces agree

Run this on every direction, and again after the user mixes parts:

- **The idea repeats:** the shape or metaphor shows up in the nav, the buttons, the cards and the footer.
- **One hover style per kind of element**, fast, and related to the idea (`micro-interactions-and-motion.md`).
- **One or two motion themes,** repeated, at the mood's tempo. One hero technique.
- **The nav, phone menu and footer are a pair** (`navigation-and-footers.md`).
- **One corner family.** Sharp image corners with round buttons is a level 1 sign (`landing-pages.md`).
- **One main material,** graded as one set.
- **Fonts:** each one serves the identity; ≤6 sizes.
- **Same CTA label** for the same destination, in the nav, hero, sticky pill and footer.
- **The proof form fits the proof you have and the role.**
- **Sections lead into each other** instead of being dropped on top of each other.
- **Every page uses the same parts.** About, contact, product pages and the 404 can change layout, but they keep the nav, footer, hover, motion themes and idea.

### Combinations that work (from the set)

Whole systems from single sites. Learn how the parts agree; never copy one.

| Site (role) | Idea | Nav → footer | Hero and motion | Proof and CTA | Hover |
|---|---|---|---|---|---|
| `brandappart/` (studio) | Clients as keychains | Icon sidebar + dock → faded wordmark | Showreel, cards that fold back, scatter | Work as objects, fanned testimonials, faces on a fixed pill | Icon square fills |
| `isomorphic-labs/` (science) | Outlined cells | Joined cells → cell grid | Soft 3D model, calm | Two-part buttons | Rectangle to pill |
| `lightship-rv/` (product) | The ✦✦ symbol | Transparent → pill + symbol → mark before footer | Pinned headline with rising images, scatter that gathers | Zip-code newsletter | Buttons flip from black to the brand orange |
| `letude/` (studio) | The archive | Edge tabs → animated wordmark | Hero builds itself, rapid cuts in the wordmark | The reel | Letter to word |
| `hex/` (SaaS) | The product's own UI | Split nav → living counter | Product UI alive | Quote beside each feature, CTA with selection handles | CTA handles disappear; nav items get a grey box |
| `fc88/` (B2B) | Football | Branded sidebar → mascot sign-off | Product loader, countdown | True numbers, sentence form | Not captured; the phone menu icon keeps morphing |
| `zentry/` (brand) | A tilted shape | Bar on scroll-up → CTA card + gradient band | Mark loader, shape straightens and grows | Backers list that lights up | Pill tilts into the shape |
| `seen-advertising/` (agency) | A grocery shop | Mascot menu → receipt footer | Marquees, walking mascot | Packaged services, "Discover" | Not captured |

### Combinations that clash

- An experimental or hidden nav on a shop, a directory or a SaaS pricing page.
- Two signature shapes or two metaphors competing for the same page.
- Several hover styles for the same kind of element.
- A playful dopamine palette on a bank or hospital site.
- Heavy 3D or pinned scroll on a page that must work first on slow phones (`hero-and-scroll-motion.md`, check the cost).
- A stat wall standing in for proof.

## 7. Propose 2-3 directions

- **Make them really different.** At least one direction should change the layout skeleton, the nav form or the hero technique, not only the palette. The owner's restaurant note shows both moves: the same layout with a new identity feels wildly different, and a new layout changes how the story is told.
- **A useful spread:** one close to what the category expects for this role, one that leans harder into the brand's idea. Add a third only when it's meaningfully different.
- **Describe each one the same way:**

```
Direction A: "<name>". The one idea, in a sentence.
Role fit:      what it does for the business, and the trade-off
Mood:          three words; motion tempo
Palette:       family + 3-5 colors (from the product's world)
Type:          fonts and the heading style
Material:      photo / product UI / 3D / illustration / type
Layout:        the sections in order, one line each
Nav + phone + footer:  the pair
Hero + motion themes:  one technique, 1-2 themes
Proof + CTA:   form and label
Hover, loader: one style; loader or none
```

- **Show them when the choice is visual.** Mock only the hero and nav of each direction side by side in `brand/directions.html`. Build the full `brand/` folder for the chosen one (`identity-and-site-building.md`, gate 2).
- **The user can mix.** "A's palette with B's nav" is fine: swap parts that do the same job, then run section 6 again. If a part breaks the idea, say so and offer the version that fits (B's tilted hover on A's cell identity becomes the rectangle-to-pill hover).
- **Build straight away:** pick the direction that fits the role best, build it, and describe the others in two lines each at the end so the user can switch.
- **Vary across projects.** Don't offer the same three directions on every build (`vibe-coding-tells.md`, the same trio).
