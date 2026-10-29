# Landing Pages

Landing pages aren't about complexity, they're about presentation. Generally, the better the presentation, the better the conversion. For building the identity and the wireframe, use `identity-and-site-building.md`; this file covers section patterns and quality levels.

## The 5-second test

If a visitor had 5 seconds to scroll through the page, could they understand the idea? Captivating pages guide the eye; chaotic ones (too many components, split text, pop-ups, ornaments, complex shapes) compete for attention and lose.

**Fix for a page that hides its product:** move the product name and message into clear text, fade out the decorative image and show the product's actual interface.

## Hero anatomy

- **Four zones** appear in almost every hero: the main text block, the nav bar, the image and (optionally) stats.
- **Text block:** shouldn't dominate the page. Group it by spacing (subtext 8px from heading, eyebrow 12px above, buttons 32px below). About 7 words of heading and 14 of subtext.
- **Nav:** small and out of the way. The sign-up/primary button is its most prominent item.
- **Image:** a high-quality asset makes or breaks the page. Never cover the focal point with text, and choose an image with a calm background.
- **Stats:** use color, not just size, for hierarchy (same size, second line at reduced opacity).
- **The real fold is about 1,000px tall** on a 1920px-wide screen.

### Layout options (choose by what the content is trying to do)

| Content goal | Layout |
|---|---|
| A profound statement | Centered text, bigger font, lots of space |
| Product-led | Text above, big product image below ("big text, big image, lots of space") |
| Classic | Text left, image right (or image full-screen under the text) |
| Many features | Bento grid, so nothing is lost below the fold |
| Several visuals | Carousel that slowly rotates |

Text can be centered (most common), left-aligned, or split with the body and CTA kicked out to the right. Images can have defined borders, bleed full width into the background, or rotate.

## Section patterns from 50 top software sites

1. **Logos.** 41 of 50 sites show well-known customer logos. Simple version: the most important logos in a row. Fancy version: a marquee sliding left-to-right with a gradient and a progressive blur fading the edges.
2. **Centered hero with a big image.** Everyone uses it, so differentiate: a distinctive font, an inline diagram, an interactive product image, a very subtle background gradient.
3. **Clickable multi-section.** Tabs that switch a large visual, horizontal or vertical, optionally on a timer (Webflow). **Design every tab**, not just the first one.
4. **Simple, tasteful animations.** Simple hover effects done well beat heavy 3D. Don't go overboard.
5. **Simple bento.** Simple grids (so developers can build them) with one twist, like a slightly tilted card (Ramp).
6. **Straight-line grid.** Content framed by visible grid lines instead of floating (Vercel, Catalog). Vertical lines running the page length also make the page easy to extend on larger screens.
7. **Images in the nav.** Dropdowns and mega menus with images give context before the click, which beats long lists of links.

## The 4 levels of landing page quality

| Level | Signs | Fix to reach the next level |
|---|---|---|
| **1: template** (2/10) | Text-left/image-right alternating all the way down; stock images unrelated to the product; sharp image corners vs. round buttons; long, vague copy; flat nav weighted to one side; one color applied haphazardly; no animation | Make design decisions at all |
| **2: knows what, not why** (6/10) | Stacked hero; real product screenshot (not perfectly framed); color comes from the product UI; tighter type; shorter copy; nav hierarchy (important button outlined, links centered); matching CTA labels for the same destination; simple load animations; some top-to-bottom flow | Curate visuals, add depth and smoother motion |
| **3: real craft** (8/10) | Zoomed-in crops of the important parts of the product; vertical frame lines; bento instead of a row of 4 cards; interactive multi-select; shorter, compact sections; brand elements (badge, logos, link to social proof); a mega menu that shows depth; smooth hover effects; good flow | Restraint with color, and attention to detail in motion |
| **4: crafted** (10/10) | Visuals crafted to show exactly what the product does; flexible layout molded around content; balanced, slightly looser typography that forms leading lines; copy says how it helps, not just what it does; color threaded through the page; detailed motion (blur on the multi-section, mega menu that stays open and slides content, CTA that appears on logo hover); the page pulls you down | n/a |

Level 4 needs no custom illustrations or 3D, just well-crafted UI with attention to detail.

## Making the product the hero

- Show the real product, not a stock image or a fake dashboard. An edited screenshot (cropped, zoomed, animated) beats generic icons.
- Even simple graphics help: product cards (e.g. link cards) with a slight skew elevate a plain page.
- Use the product's own colors for the page's color pops.

## Navigation

- Give the nav hierarchy: the main action stands out (outline or fill), more important links get dropdowns, and the menu is balanced across the bar.
- The main CTA and the nav CTA share the same label when they go to the same place.

## Footers

- Most sites don't have 23 links, so they don't need a 5-column footer copied from Apple or Linear.
- **For 3-5 links:** centered links with the logo above, socials below, copyright on the left, credits on the right. Works in dark mode too.
- Only move to a multi-column footer when you truly have more links.

## Making it delightful

See `identity-and-site-building.md` (context elements) and `micro-interactions-and-motion.md` (entrances, parallax, text animation). Friendly copy and a fun 404 page are part of the same effort.
