# Color

Color is usually where the most time goes, and taste varies. A simple starting system keeps it manageable.

## 1. Let the color find the website

Model the palette on **what the product is and the environment it lives in**, not on your favorite colors. The palette tells the user, before they read anything, what they're going to see or use.

**Example: a hospital website.** Make it "sterile", modeled on a hospital's own palette:
- Mostly white or a shade of white (bone white).
- Faint, light accents: light blue, light green.
- Deeper accents: deep blue, deep green.
- Room for one unexpected accent (e.g. pink) to make the site feel unique.

**Example: a disco website.** The opposite: deep and vibrant.
- Base: dark black, deep purple/violet, navy blue, or even beige/white.
- Then the vibrant colors: bright pink, bright cyan/blue, bright orange, yellow, green. Neon accents are welcome here.

**Example: a skincare brand.** Great product photos, bright white background, lots of white space.

## 2. One primary color and its ramp

- **Default:** one primary color, usually the brand color.
- **Lighten it** for backgrounds and **darken it** for text. Both bring in subtle color and make an otherwise drab design more interesting.
- Think of the primary as a **scale**, not one color (e.g. 50 → 950, generated with a tool like uicolors.app). Large companies build chips, states and charts from this ramp.

| Use | Light mode | Dark mode |
|---|---|---|
| Main color | 500-600 | 300-400 |
| Hover | 700 (deeper) | 400-500 |
| Links | 400-500 | lighter steps |

- **Less is almost always more.** Not everything should be a different color. Five competing accent colors on one screen = no hierarchy.
- **Adapt brand colors to good design.** If the brand color is too bright for a big but unimportant element, lighten it and switch the text to dark. If it fails contrast with white text (e.g. a bright orange), darken it or pick a complementary color. Brands do this: Mailchimp's yellow + turquoise, Airbnb's bright pink + deeper pink.
- **Extend a thin brand palette** by rotating the hue slightly (analogous colors) or picking the complementary color across the wheel.
- **If the brand's primary is red or green,** use a deeper version of it, so it isn't mistaken for a danger or success signal.

## 3. Neutrals do most of the work

- **Backgrounds stay in the background.** Almost never use a bright color for a background. Default: a neutral grey background with a very light or white foreground.
- **Add a hint of the brand to neutrals** for warmth without noise (Headspace tints its cards with a pale version of its orange).
- **Light mode is flexible:** dark background + lighter cards (Vercel), light background + darker cards (Notion), or monochrome layers (Supabase). You can also invert background and foreground for small UI like a search bar.
- **Sometimes the best "color" is none.** A border can replace a filled background.

### Neutral recipe for product UI (light mode)

| Layer | Guide value |
|---|---|
| Page background | 98-100% white (pure white is fine) |
| App frame / sidebar | very slightly darker anchor (Mercury adds ~2% blue to its sidebar) |
| Cards | pure white on a slightly darker background, or the sidebar color on a white background |
| Card border | ~85% white. Never a thin black border |
| Buttons | the more important, the darker: ghost → ~90-95% white (multi-purpose) → near-black with white text (primary) |
| Headings | darkest, still about 11% white (~#1C1C1C), not pure black |
| Body text | about 15-20% white |
| Subtext | about 30-40% white |

- A landing page needs about 3-5 neutrals. A product needs about 4 background layers, 1-2 strokes and about 3 text colors, before states.
- Pure black and white aren't wrong, but greys usually work better. Getting comfortable with greys is what separates mediocre designers from professionals.

## 4. Color must have a purpose (semantic color)

Place color where it means something, not where it decorates.

Examples: an announcement bar that grabs attention, a focus state on an input, a green "New" chip on a link.

| Color | Meaning |
|---|---|
| Blue | Trust |
| Red | Danger, urgency, destructive actions |
| Yellow | Warnings |
| Green | Success |

- **Destructive actions are red, even if the brand is purple.** A purple delete button is more on-brand but hides the danger. This is why red and green belong in almost every palette.
- **Notifications** are more flexible: a red badge can become the brand color.
- **Icons need no color by default.** Their job is to be recognizable. Use color on an icon only to communicate status (e.g. the active tab).
- **Blue is allowed even when it clashes with a red or green brand**, in places that sit above the page:
  - **Pop-ups:** the background is faded and/or blurred, so blue can come on top without clashing.
  - **Notifications** in the top-right or bottom-right corner.
  - In these places, use an almost-always **deep blue** to signal the site's trust and determination.

## 5. States from color alone

| State | Treatment |
|---|---|
| Default | Base color |
| Hover | Deeper (default). Some references use a slightly lighter/brighter hover instead; pick one direction per product and keep it |
| Pressed / active | Deeper still |
| Disabled | Desaturated / light grey with white text. Works in dark mode too |

Mobile has no hover, so rely on the pressed state: a slightly darker shade on press makes it feel like you're pressing into something. Full state rules are in `icons-buttons-states.md`.

## 6. Charts and data colors

- A neutral-only chart is dull. A ramp of one brand color looks too similar between series.
- Use **OKLCH** to get a full spectrum with the *same perceived brightness*: fix lightness and chroma (oklch.com), then step the hue by about 25-30 for each series.
- On dashboards, color comes from the data: red because the event is urgent, not because it looks nice. See `dashboards.md`.

## 7. Theming with OKLCH

To make a color-themed version of any neutral palette: for each neutral, convert to OKLCH, **drop lightness by ~0.03, raise chroma by ~0.02**, then set the hue you want. It works for light and dark mode.

## The 60-30-10 rule: a starting point, not a law

- 60% dominant neutral, 30% secondary, 10% accent (Lemon Squeezy is a colorful example).
- It helps on landing pages. In product design it often breaks down: Vercel is roughly 90% black, 8% white and 2% red. Products use the four layers above: neutral foundation → functional accent → semantic colors → theming.

## Palettes from identity (marketing sites)

For brand-driven sites, the palette can come from imagery instead of a single brand color:
- Pull tones from the moody images you've chosen (e.g. earthy tones for a restaurant).
- Add a few accent colors that work with that palette.

Full process: `identity-and-site-building.md`. Contrast requirements: `accessibility.md`. Dark mode: `dark-mode.md`.
