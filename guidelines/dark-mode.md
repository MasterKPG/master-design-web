# Dark Mode

Dark mode is not the inverse of light mode. Inverting gives a passable result, never a good one. Build the dark palette with dark mode's goals in mind.

## Borders

- A light border on a dark card creates too much contrast. **Lower the border's contrast, or remove it completely.**
- In practice: borders help in dark mode (outlines on dark, filled backgrounds on light), but they must be subtle (e.g. #2E2E2E on #111111).

## Depth without shadows

- In dark mode, shadows can't separate a card from the background.
- **Make the card lighter than the background** to create depth. This rule is strict: **surfaces always get lighter as they rise.** A raised card is lighter, or has only a subtle border.
- **Double the distance.** Dark colors look more alike than light ones, so they need more separation. If your light-mode neutrals step by ~2% lightness, step the dark ones by ~4-6%.

## Popovers in dark mode

- Treat popovers like cards (lighter than what's beneath), with even fewer effects. The goal is to draw attention subtly, with little animation.
- **Separate them with a deep, quick blur of the surroundings.** That's enough; no heavy shadow or glow needed.

## Chips and bright elements

- **Dim chips inside cards** if they're too bright: lower saturation and brightness. Flip it for the chip's text to keep hierarchy.
- **Desaturate the logo** a touch if it glares.

## Text hierarchy

- **Make titles and important text lighter** (closer to white) than non-important text.
- **Light greys are easier on the eyes than white** for most text. Reserve pure white for the most important items (logo, key figure).
- Dim text more aggressively than in light mode. Eye strain is the main concern.

## Primary color in dark mode

- Move up the ramp: use the 300-400 step as the primary, 400-500 for hover (see `color.md`).

## Background color is flexible

You aren't limited to navy blue or grey. Deep colors work well:
- Deep cherry
- Deep violet
- Deep green
- Deep blue

## Avoid the "flat, typical" dark mode

For brand-driven sites, a moody image-led identity is how you escape both sterile light modes and flat, typical dark modes. See `identity-and-site-building.md`.

## Check contrast separately

Dark mode needs its own contrast check. APCA handles light-on-dark better than WCAG 2.x ratios. See `accessibility.md`.
