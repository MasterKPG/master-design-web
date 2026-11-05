# Hero and Scroll Motion

The hero blur/pull-away (`micro-interactions-and-motion.md`, bookends) is a good technique and stays a strong choice. Pick the hero motion the way you pick the palette: from what the product is and what the hero has to show. Sometimes that's the pull-away; often it's something else in the catalog below.

## How to choose

1. **What must the hero reveal?** A product, a place, a feeling, a statement, a body of work. The motion should carry that thing into view.
2. **Pick one hero technique** from the catalog below, plus **one or two motion themes** that repeat down the page (motion identity, see `micro-interactions-and-motion.md`).
3. **Check the cost.** Pinned sections, video and 3D need real assets and performance work. A simple effect done well beats a heavy one done badly.
4. **Write the reduced-motion version first** (last column). If the page doesn't work without the motion, the motion is hiding a weak page.
5. **Vary across builds.** Reusing a technique is fine. Reusing the same hero, logo band and footer set on every project makes the work monotone. If the last few builds all used the pull-away with a marquee, check whether this identity really calls for it before reaching for it again. The goal is range, not novelty for its own sake.

## Catalog

| Technique | What happens on scroll | Fits | Reduced-motion version |
|---|---|---|---|
| **Pull-away / blur back** | Hero copy drifts down, blurs and fades while the next section slides over it. Reverse it on the CTA | Calm statements; any page whose next section is stronger than the hero | Static hero, plain scroll |
| **Expand to full bleed** | A framed image or video under the heading grows (scale or `clip-path: inset()`) until it fills the viewport, while pinned | Product-led heroes, hospitality, travel, real places and objects | Show the full-bleed image directly under the heading |
| **Zoom through the mask** | The heading or logo is a mask over a video or photo; scroll scales it until you pass through the letters into the next section | Bold brands, launches, one-word identities | Heading over the image, no zoom |
| **Sticky scrub (scrollytelling)** | A tall section (about 300svh) pins a stage; the product changes step by step as you scroll, and reverses when you scroll back | Products with 3-4 steps or states to explain | The steps stacked as normal sections |
| **Image sequence** | A frame sequence on a canvas is scrubbed by scroll, so an object turns or assembles | Physical products with real 3D renders or video | One hero still |
| **Kinetic type** | Letters stretch, split, snap and recombine; a variable font's weight or width follows scroll | Type-led and one-font identities, agencies, portfolios | Static heading |
| **Words become things** | Images or video fly out of a word in the sentence, or a word turns into what it means (a deadline fills like a progress bar) | Storytelling copy, products with a clear before/after | Inline images beside the words |
| **Split or curtain reveal** | The hero splits into 2-3 panels that slide apart, or a shape wipes across it (`clip-path`), uncovering the next section | Strong section-to-section transitions, editorial pages | Hard cut between sections |
| **Stacked cards** | Each section is a sticky card with a rounded top; the next one slides over and the previous one scales down slightly | Feature tours, case studies, process steps | Plain stacked sections |
| **Horizontal pan** | Vertical scroll drives a horizontal track of images or work | Portfolios, collections, menus, timelines | A normal horizontal scroller or a grid |
| **Parallax depth** | Scattered hero assets move at different speeds (bigger and closer = faster), so the hero reads in 3D | Scattered-object heroes (the restaurant counter), large margins | Static composition |
| **Camera move (3D)** | A Three.js scene the camera travels through; sections feel like rooms or spotlit pieces | Studios, 3D-native products, launches with budget | A rendered still of the scene |
| **Showreel grow** | A loader resolves into a small showreel that scales to full screen as you scroll | Agencies and studios with real footage | Poster frame with a play button |
| **Background shift** | The page color interpolates between sections as you scroll, often with the gradient themes between them | Brands with several moods or product lines | Each section keeps its own color |
| **Cinemagraph** (no scroll needed) | A still photo where one region loops: steam from a pot, a candle, fabric. Combine with any scroll technique above | Food, hospitality, wellness, any moody identity | The still frame |
| **Pinned headline, images rising** | A big headline stays pinned while photos or product shots rise through and past it | Consumer products and launches with several strong photos (`lightship-rv/`) | Headline, then the images in a grid |
| **Shape straightens and grows** | The identity's shape (a tilted panel, a notch) starts small and skewed and straightens into a full-bleed section | When one shape is the identity (`zentry/`) | The section full-bleed, unskewed |
| **Scatter that gathers** | Scattered photos or objects drift together into a group, a grid or a word as you scroll | Lifestyle and portfolio pages; a collection of objects (`lightship-rv/`, `brandappart/`) | The gathered layout |
| **Cards that fold back** | A stacked-cards variant: the current card tips back in 3D and slides under as the next comes over it | Services, plans or steps read as a sequence (`brandappart/`) | Plain stacked cards |
| **Pinned steps that expand** | A pinned list of 3-4 steps; the active one grows and shows its image or detail | Process sections, onboarding stories (`zentry/`, `mugen-studio/`) | All steps open |
| **Text fills as you read** | A paragraph starts grey and fills to full color word by word with scroll | One short manifesto paragraph, once per page (`mugen-studio/`). Check the grey still passes contrast | Full-color text |
| **Section entry bar** | A bar or counter announces the chapter: "You are now entering ( Work ) section ● 03/01" | Long one-pagers with named chapters (`the-raw-materials/`) | The section label as a heading |
| **Rapid cuts in a fixed frame** | The wordmark or a frame stays still while the video inside it cuts fast between projects | Studios with a reel (`letude/`) | Poster frame |
| **Marquee** | A line of promises, services or client names slides sideways; can be tilted like tape | Short repeated lines; voice-led brands (`seen-advertising/`, `brethren-design-co/`, `fc88/`). Needs a pause control | A static line |

Award-winning references for these: TRIONN (3D hero, text explosion on scroll), Design by Dylan (loader and showreel that animates on scroll), Mat Voyce (kinetic type that stretches and recombines), Uncommon Studio (section transitions that read as camera moves, a grid that breaks at set moments), Iventions (each project spotlit like an installation, reveals paced as a guided walk), By-Kin (transitions that form one continuous surface), Apple product pages (sticky scrub, image sequences). Inspiration only, never copy.

## Loaders and intros

Most good sites have no loader (`scrintal/`, `hex/`, `colabs/`). Add one only when it says something about the brand, and keep it short.

- **The mark alone:** a black screen, then only the logo for about 3 seconds before the hero takes over (`zentry/`).
- **The product:** line drawings of the products swapping in the centre with a % counter (`fc88/`). The loader introduces the range before a word is read.
- **The hero builds itself:** color, a photo flash, the wordmark typing letter by letter, the intro line fading in word by word (`letude/`).
- **Carry it into the hero:** a counter can keep running from the loader into the hero ("365 → 276 days till the next season", `fc88/`).
- Offer "Skip intro" on anything longer than a couple of seconds, show it once per visit, and skip it under reduced motion.

## Watch out

- An embedded 3D viewer that captures the mouse wheel stops the page from scrolling (`isomorphic-labs/`). Let the wheel pass through unless the user clicks into the viewer.
- Builder containers with their own scrolling (Readymag) break normal scroll and keyboard navigation (`seen-advertising/`).
- A video embed can fail and leave the hero as a black box (`brandappart/`). Always set a poster image.

## Cinemagraph recipe

- Shoot 5-10 seconds from a tripod. Pick a single, repeatable motion (steam, water, fabric, a flame). Avoid crowds and handheld footage.
- Find a loop point where the first and last frames match; scrub at half speed to check.
- Export a still frame (PNG), lay the video under it, mask only the moving area, feather the mask edge.
- Export 2-5 seconds as MP4 or WebM, never GIF (bigger and worse). Check the loop on a phone at full brightness for seams and banding.

## Building it

- **Native first:** CSS scroll-driven animations (`animation-timeline: scroll()` or `view()`, with `animation-range`) need no JavaScript and reverse for free. Supported in Chromium (115+) and Safari (26+); Firefox still has it behind a flag as of May 2026, so treat it as progressive enhancement.
- **Guard it:** put the visible, finished state in the base CSS. Add the animation only inside `@supports (animation-timeline: scroll())` and `@media (prefers-reduced-motion: no-preference)`. Never put `opacity: 0` in the base rule, or unsupported browsers show nothing.
- **Sticky scrub pattern:** tall wrapper (`height: 300svh`), `position: sticky; top: 0; height: 100svh` stage, animation on `view()` with `animation-range: contain 0% contain 100%`.
- **Parallax pattern:** a named timeline (`scroll-timeline-name: --hero`) that each layer references with a different distance. Keep the distances small.
- **Reach for GSAP ScrollTrigger** for pinning with complex sequences, image sequences, 3D, or when Firefox must match.
- **Animate cheap properties:** `transform`, `opacity` and `clip-path`. Blur is expensive; keep blurred areas small.
- Easing still matters on scroll-linked timelines that aren't scrubbed: never linear (`micro-interactions-and-motion.md`). Scrubbed progress itself stays linear so it tracks the finger.

## Sources

- Figma, "How to make a cinemagraph": https://www.figma.com/resource-library/how-to-make-a-cinemagraph/
- Figma, web design trends 2026 (3D and immersive, bold kinetic type, motion): https://www.figma.com/fr-fr/resource-library/tendances-web-design/
- CSS scroll-driven animation patterns (2026): https://dev.to/raxxostudios/css-scroll-driven-animations-6-patterns-i-ship-in-2026-4bm6
- Hero fade with `animation-range`: https://www.builder.io/blog/scroll-driven-animations
- Award winners: https://www.awwwards.com/sites/trionn-2, https://www.awwwards.com/sites/c-design-by-dylan, https://www.hontran.dev/blog/best-award-winning-websites-2026
- Zoom hero and pinned video patterns: https://framespark.io/blog/best-10-scroll-animations-in-framer, https://21st.dev/@ajith66310/components/hero-scroll-video-pin-reveal
- Creative sites set (captured 2026-11-05): `../examples/creative-sites-patterns.md`, sections 4 and 6
