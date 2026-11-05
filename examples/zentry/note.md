# Zentry

- **Source:** https://zentry.com (found via navbar.gallery), captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** landing page (web3 / AI platform, brand-led)
- **Take from it:** one shape motif (the tilted quadrilateral) used for nav hovers, image panels and the CTA shards; corner-anchored giant type around a 3D object; a pinned three-step section; a backers list that lights up one row at a time
- **Related guideline:** `guidelines/hero-and-scroll-motion.md`, `guidelines/micro-interactions-and-motion.md`, `guidelines/social-proof-and-logos.md`
- **Don't take:** 9px monospace body text (too small to read); empty grey product cards before their videos load; the stats wall is still "random big numbers", only better dressed

Custom heavy condensed display face (ZentryScreamer, 900, uppercase, tight -1% tracking, line-height ~0.82) against Roboto Mono for everything small. Palette: black, lavender-white `#dfdff2`, electric violet `#5542ff`, a yellow-green highlight used once. Lenis smooth scroll and GSAP ScrollTrigger.

## Screenshots

| File | What it shows |
|---|---|
| `desktop-loader.jpg` | Load sequence: black screen, then the violet Z mark alone in the centre |
| `desktop-01-hero.jpg` | "REDEFINE" top-left, "REALITY" bottom-right, a glowing wireframe 3D form between them |
| `desktop-02-tilted-panel.jpg` | Next section: a tilted dark panel with a 3D hand and orb rises under the statement |
| `desktop-03-panel-straightens.jpg` | Same panel after more scroll: it squares up and grows to almost full width |
| `desktop-04-pinned-steps.jpg` | Pinned "Symbiotic world" block: steps 01–03 advance as you scroll, the active one gets a bar and a paragraph |
| `desktop-05-manifesto.jpg` | Centered manifesto in giant type with small square media chips set inside the lines |
| `desktop-06-stat-collage.jpg` | Stats as a scattered collage of cards in different sizes and colors |
| `desktop-07-backers-list.jpg` | Backers as a tall list in display type; the active row turns yellow and its logo appears on the right |
| `desktop-08-cta-footer.jpg` | Black CTA card with tilted media shards, then a violet-to-lilac gradient footer |
| `desktop-09-nav-on-scroll-up.jpg` | The nav coming back on scroll-up as a black rounded bar |
| `desktop-nav-hover.jpg` | Nav items before / during / after hover |
| `mobile-01..04.jpg` | Phone: hero, pinned steps, manifesto, stats |

## Loading

- Black screen for about 3 seconds, then the violet Z logo appears alone in the centre before the hero takes over. The logo is the loader. Nothing else competes with it.

## Navbar

- **Transparent at the top**, white text over the black hero. Left: wordmark, then two pills ("PRODUCTS ▾", "WHITEPAPER") in lavender. Right: three plain uppercase links with a small ↗ arrow (ZTERMINAL, ABOUT, CONTACT). Everything is 9–11px bold mono uppercase.
- **Hover is the signature move.** The pill buttons *tilt*: they skew into a trapezoid with sharper corners, as if the pill rotated in 3D. Plain links get a white pill background and the text turns black. Two different hover styles for two kinds of item, both fast (~0.3s).
- **Hides on scroll down, returns on scroll up** as a black bar with rounded corners floating a few pixels from the edges (`desktop-09`).
- **Phone:** wordmark, the "PRODUCTS" pill and a two-line hamburger. The floating black bar comes back on scroll-up there too.

## Hero

- Two words in the corners ("REDEFINE" top-left, "REALITY" bottom-right) at 180px, with a WebGL wireframe form in iridescent violet between them. A three-line mono intro tucks under the first word. No button, no product shot. The headline frames the object.
- On phone the words stay in the corners at 104px and the 3D form fills the screen behind the text.

## Scroll and motion

- **The tilted quadrilateral** is the motif. The hand-and-orb panel enters as a skewed four-sided shape (clip-path), then straightens and grows to near full-bleed as you scroll. The CTA card has tilted video shards. The nav pills tilt on hover. One shape, used everywhere, so the site feels authored.
- **Pinned steps:** the "Symbiotic world powered by ZENT" block pins; scroll moves the active item from 01 to 03. The inactive items collapse to grey 9px labels. A clean way to show three ideas without three cards.
- **Manifesto in giant centered type**, with tiny square media chips set between words ("A NEW ▪ REALITY").
- **Stats as a collage:** cards of different sizes and colors (black outline, white, violet, gradient) staggered across the grid, numbers in the display face with the unit smaller ("970GB+"). On phone they zigzag left and right instead of stacking flush.
- **Backers list:** names in display type down the centre, each with a tiny "BACKERS" label. One row at a time turns yellow and that company's logo appears far right. Social proof as an interaction instead of a logo grid.

## Layout and space

- Long scroll (~14,000px) alternating black and lavender sections. Huge empty areas around single statements. Each section does one thing.
- Body copy is set in 9–10px mono. It looks technical but it's hard to read; set real copy at 14px or more.

## Buttons and CTAs

- Small black pills with mono uppercase text ("ENTER VAULT", "CONTACT US"). The CTAs are deliberately small; the giant type does the shouting.

## Footer

- Full-bleed gradient from violet to lilac. Wordmark left, four mono columns (Explore, Products, Follow us, Resources) with ↗ on external links, a tiny copyright row.
- Sits under a black rounded CTA card ("Build the foundation for tomorrow's civilization.").

## What to learn

- Pick one shape and let it recur in the hover, the image masks and the decoration. It reads as identity without adding anything.
- Two hover styles are fine when there are two kinds of nav item, as long as each is consistent.
- Social proof can be a list that reacts, not a grid of grey logos.
- A loader can be just the logo. Keep it under ~3s.
