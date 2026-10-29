# Shadows and Overlays

## Shadows (light mode)

Shadows are a fantastic tool in light mode. For dark mode, see `dark-mode.md`: use lighter surfaces and a blur of the surroundings instead.

### Shadow strength = perceived distance

- A strong shadow makes a card look like it's floating far above the screen.
- You can use that on purpose: with multiple cards, different shadow strengths create a hierarchy.
- **Default:** most cards should sit just above the surface. **Reduce the opacity and increase the blur.**
- **Default tool shadows (e.g. Figma's) are far too harsh.** Instead of only lowering opacity, change the shadow's *color* to a light grey (not transparent black) and increase the blur a lot.
- Often the right answer is no shadow at all. Less visual noise is usually better design.

### Layering levels

- How strong a shadow needs to be depends on the foreground and the background.
- **Cards** need less.
- **Content that sits above other content** (popovers, menus, tooltips, dialogs) needs stronger shadows, to create another level above the card itself.
- Use a border *or* a shadow on a card, not both.

### Tactile effects

- Combine inner and outer shadows to create effects like raised, tactile buttons.
- A sticker-style element can use a solid, full-opacity, offset shadow in a darker shade of its own color (see `components.md`).

### The test

- **If the shadow is the first thing you notice, it's wrong.** Shadows should be subtle and draw attention to the element they're on, not to themselves.

## Effects in general

Shadows, glows and gradients are addictive and easy to overuse.

- **Gradients:** if you really need one, use variations of the same color (darker/lighter green). Often it looks cleaner with no gradient at all.
- A very subtle background gradient can stop a hero from feeling bland. Toggle it off to check whether it's earning its place.

## Overlays (text on images)

Overlays are very important: get them wrong and you ruin both the image and the text.

### Example: white text over a snowy mountain

1. **Problem:** white text over a snowy mountain isn't visible. You can't leave it as is.
2. **Acceptable but weak:** a full-screen overlay makes the text readable but doesn't do the image justice.
3. **Better:** put the text at the bottom and add a linear gradient that shows the image and then smoothly turns into a background the text can be read on.
4. **Extra fancy:** add a progressive linear blur on top of the gradient, for a more modern look that emphasizes the text even more.

**When not to:** only blur or fade the bottom of an image if nothing important is there.

### Example: image card with a gradient (Apple Music style)

- The image fills about 3/4 of the card's height.
- A gradient overlay runs smoothly from the bottom of the image upward. The smoother and longer the transition, the better.
- Text sits on top of the gradient.
- It only works with some images and colors. A plain image-above-text card always works, so keep that as the fallback.

### Choosing images for text

- The focal point of a hero image should never be covered. Put text above, below or beside it.
- A busy image background makes text hard to read. Choose a calmer image, or add a subtle overlay.

### Other image treatments (from the restaurant build)

- **Noise** on a background image helps the contrast of the text on top (e.g. a wooden countertop hero).
- **Darkening the edges** draws attention to the center.

See `identity-and-site-building.md`.
