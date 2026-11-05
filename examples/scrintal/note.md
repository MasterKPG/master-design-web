# Scrintal

- **Source:** https://scrintal.com (found via navbar.gallery), captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** landing page (SaaS, visual note-taking)
- **Take from it:** the product's own UI pieces (sticky notes, blocks, cursor) used as the decoration; a floating pill nav of separate buttons; a footer that is a rounded brand-color card
- **Related guideline:** `guidelines/landing-pages.md`, `guidelines/navigation-and-footers.md`, `guidelines/hero-and-scroll-motion.md`
- **Don't take:** the long run of near-identical feature rows in the middle; the announcement bar that stays fixed and eats 90px on phone

Built in Framer. Bricolage Grotesque (700) for headings, Inter for UI and body. Light grey page (`#f3f3f3`), deep purple text (`#2b0e44`), one purple accent (`#8e4ec6`).

## Screenshots

| File | What it shows |
|---|---|
| `desktop-01-hero.jpg` | Hero: pill nav, headline with an icon and a "sticker" word, purple glow under the CTA, product canvas peeking from the bottom |
| `desktop-02-hero-scrolled.jpg` | Mid-scroll: the canvas has grown, a giant purple cursor sits on its corner, testimonials slide in below |
| `desktop-03-floating-notes.jpg` | Section intro made of tilted note cards scattered round a heading |
| `desktop-04-section-title.jpg` | "Everything [brain icon] you need to make *research* fun", with a hand-drawn squiggle |
| `desktop-05-feature-tray.jpg` | Feature screenshots set in colored trays (green, purple, blue) |
| `desktop-06-footer.jpg` | Footer as a purple card |
| `desktop-nav-hover.jpg` | Nav pills before / during / after hover |
| `mobile-01..03.jpg` | Phone flow, top to bottom |
| `mobile-menu.jpg` | Phone menu opening and closing, frame by frame |

## Navbar

- **Floating pill group, centered.** Logo pill, then three separate pills (Watch film, Pricing, About us), each with a small icon, then a plain "Login". Pills are white on the grey page with a 1px border and 14px radius. The nav reads as a row of chips, not a bar.
- **Hover:** only "Login" changes, it gains a grey pill background. The other pills barely move.
- **It scrolls away.** The nav isn't sticky. What stays fixed is the announcement bar ("We've released Gobu…"), which has a backdrop blur, so the page and the nav go soft as they pass under it.
- **Phone:** logo left, hamburger right, under the same banner. The banner wraps to five lines on a phone, which is the main mistake on mobile.
- **Phone menu (`mobile-menu.jpg`):** opens instantly, no slide. The hamburger turns into an X with "Login" beside it, and the links become three full-width purple pill buttons with icons, stacked under the bar. The page behind is heavily blurred rather than covered, so you keep a sense of where you are. Big thumb targets, nothing else.

## Hero and loading

- No loader. The page is blank grey for about a second, then appears whole. The cookie banner dims the page at ~4s.
- **Headline as a collage:** "Think [lightbulb icon] visually, [learn] deeply". "learn" sits inside a white, slightly rotated card with a shadow, like a sticky note. The icon sits inline at cap height. This is the product (cards on a canvas) acted out by the headline itself.
- **One purple CTA** ("Get started") with a soft purple radial glow spreading behind it. The glow is the only gradient on the page.
- **Product as the hero image:** the app window is cropped by the bottom of the viewport, with a real photo, a doc and a board floating off its edges at different depths.

## Scroll and motion

- **Hero canvas grows** as you scroll: the app window scales up toward full width and an oversized purple cursor (the product's pointer) appears at its corner.
- **Testimonial row** below it scrolls sideways, with the side cards faded out and the cards at slightly different heights so the row isn't a rigid grid.
- **Section intros as scattered notes:** "Think freely on an infinite canvas!", "Choose one of the templates…" sit tilted around the "Smart way to learn & research" heading, with a cursor graphic dragging one. Captions become objects on a canvas, which is what the product is.
- **Squiggle underline** under "research" and an inline brain icon in the next heading. The same "icon inside the headline" trick is used twice, which makes it a theme.
- Feature screenshots sit inside colored trays (each section a different color) with their own looping product video.

## Layout and space

- Centered column, generous grey margins, everything on a faint dot grid (the canvas background) near the hero.
- Feature rows alternate text and screenshot. This part is generic and long; the hero and the floating notes carry the personality.
- FAQ is a plain accordion with + icons inside one big white card.

## Buttons and CTAs

- Primary: purple fill, white text, ~10px radius, medium weight. Same button repeats as "Get started now" mid-page with a "Join 10,000+ learners" line under it.
- Email capture card ("Join thousands of learners.") with the input and a small "Sign up" button side by side.

## Footer

- A **purple rounded card** inset from the page edges, not a full-bleed band.
- Top row: "Unlock brilliance" on the left, three download buttons (macOS, macOS Intel, Windows) on the right with small print under them.
- Four columns: Company, Guides, Comparisons ("Scrintal vs Miro", "vs Notion"… an SEO play), Contact with a street address.
- Bottom row: large "Scrintal" wordmark, copyright, social icons.

## Phone

- Same order as desktop. The headline keeps its icon and sticker word at 32px. Floating notes become a loose stack, still tilted.
- The fixed banner takes about 90px of a 664px screen. Collapse announcement bars on phones.

## What to learn

- Let the product's own objects decorate the page (notes, cursor, blocks, trays). It shows what the product does without a single stat.
- A word in a sticker card or an icon inside a headline is a cheap, memorable identity move. Repeat it so it reads as a system.
- A footer can be a card in the brand color, inset from the edges.
