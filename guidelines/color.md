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

### Research the palette before proposing it

Before any palette goes to the user:

1. **Look at the product's real world:** photos of the place, the objects, the materials and the people who use it (the restaurant's wood, steel, steam and tickets). Pull tones from those.
2. **Look at the category:** what competitors use and which colors the category already owns. Decide whether to fit in (trust) or stand apart (memorability).
3. **Check meanings:** cultural and industry associations, and the semantic colors the product will need (red, green, yellow, blue).
4. **Propose 2-3 palettes**, each with a name, the mood it gives, a role for every color (background, surface, text, primary, accent) and a sample on a real section. Let the user pick before building.

Tools: colordrop.io (curated palettes with hex codes, generator, image scanner), uicolors.app (ramps), oklch.com.

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

The palette can come from imagery instead of a single brand color:
- Pull tones from the moody images you've chosen (e.g. earthy tones for a restaurant).
- Add a few accent colors that work with that palette.
- Lighter shades for backgrounds, darker shades for text and primary buttons. Save the most saturated color for accents and the CTA.
- Test the palette on real screens and in dark mode before committing.

### Harmony schemes (where the accents come from)

| Scheme | Built from | Feel |
|---|---|---|
| Monochromatic | Lighter and darker versions of one hue | Cohesive, calm, premium |
| Analogous | Neighbors on the wheel | Natural, warm or cool as a whole |
| Complementary | Opposites on the wheel | Strong contrast; good for a CTA pop |
| Split-complementary | A base plus the two neighbors of its complement | Contrast with less tension |
| Triadic | Three evenly spaced hues, one dominant | Playful, energetic |
| Tetradic | Four hues in a square | High contrast, hardest to balance |

### Palette starting points by mood

From Figma's 100 combinations. Use them as a starting direction, then tune to the product's real world.

| Mood | Combinations (colors) | Suits |
|---|---|---|
| Earthy | Chocolate truffle (dark brown, caramel, cream), Burnt sienna (terracotta, beige, sand), Spiced chai (cream, cinnamon, nutmeg), Desert mirage (sand, terracotta, sage) | Food, cafés, wellness, travel, interiors |
| Neutral premium | Ink wash (charcoal, cool grey, ivory), Stone path (warm greys, brown), Quiet luxury (champagne, soft pink, muted brown), Urban loft (concrete grey, brick red, black) | Portfolios, architecture, luxury, real estate |
| Calm | Frozen lake (slate, icy blue, snow white), Eucalyptus grove (dusty sage, grey, off-white), Mountain mist (slate, misty blue, pine) | Health, meditation, professional services |
| Romantic | Evening rose (dusty rose, mauve, plum), Tuscan sunset (terracotta, peach, dusty lavender), Golden hour (amber, pale gold, mauve pink) | Fashion, weddings, photography, lifestyle |
| Playful | Retro sunset (burnt orange, mustard, teal), Bubblegum pop (pink, teal, white), Watermelon burst (watermelon red, lemon green, charcoal) | Kids, food, vintage brands, consumer apps |
| Vibrant | Neon noir (black, neon green, electric violet), Pop art (electric blue, hot pink, neon yellow), Jewelry box (sapphire, emerald, amethyst) | Gaming, music, agencies, galleries |
| Deep | Blue eclipse (midnight blue), Cobalt sky (cobalt to navy), Lush forest (forest green) | Tech, dark mode, outdoor, environment |

- **Vibrant "dopamine" palettes** (saturated, neon gradients, Y2K) are a 2026 trend for lifestyle, beauty and youth brands (Lush, Headspace, Starface). Off-brand for a bank or a hospital.

## Color grading the imagery

The images carry most of a marketing site's color, so grade them as one set.

- **Correct first, then grade:** fix exposure and white balance, then apply the look in a separate pass.
- **Start from a reference** (the moody hero image) and carry its grade across every photo, so they look like one shoot.
- **Mood:** cool blues and teals read as distance or tension; warm ambers and oranges as nostalgic or adventurous; desaturated greens as clinical or dystopian; high-contrast reds as urgent.
- **Shift hue rather than pushing saturation.** Over-saturated grades are the fastest way to look fake.
- **Keep grades subdued behind text** so contrast holds.

Sources: https://www.figma.com/fr-fr/resource-library/combinaisons-de-couleurs/, https://www.figma.com/resource-library/color-grading/, https://www.figma.com/fr-fr/resource-library/tendances-web-design/, https://colordrop.io/

Full process: `identity-and-site-building.md`. Contrast requirements: `accessibility.md`. Dark mode: `dark-mode.md`.
