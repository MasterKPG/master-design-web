# Layout, Grids and Spacing

## Grids: use them for structure, break them for impact

There's a misconception that all content must align to a 12-column grid and be exactly 8px apart. These are guidelines.

- **Default (use a grid):** highly structured pages and repeating content: galleries, blogs, lists, dashboards, anything with repeated items. The grid gives you rules for responsive behavior:
  - Desktop: 12 columns.
  - Tablet: 8 columns.
  - Mobile: 4 columns (for app screens, a 3-column or 2-column grid often works better; see `mobile-apps.md`).
- **Dashboards follow grids much more strictly** than landing pages, because they use most or all of the screen.
- **Break it on purpose:** a custom landing page can ignore the grid to make items bigger or smaller, or to spotlight a button, a picture or a key number.
- If an element breaks the grid slightly and the layout still feels balanced, leave it.

## White space matters more than grids

Much more important than using lots of grids and layouts is white space.

- More information does not mean people read more. It means they read **less**.
- Anything that isn't guiding the user or giving them information should be replaced by white space. This gives the important items room to breathe.
- **Placed space reads as calm; leftover space reads as unfinished.** Space that comes from a grid and repeated gaps looks deliberate. Space left by a grid that doesn't fit the content looks like a mistake.
- **Most beginner UIs are packed too tight.** On mobile especially, you need more vertical space than you think.

## Group by proximity

Use distance to show what belongs together. This is a form of visual hierarchy.

**Example: a simple section with a title, a description and a button.**

1. You can start with all three equally spaced (e.g. 32px between every item).
2. Better: group the elements that belong together by moving them closer. Either group the title with the text, or the text with the button.

**Reference values from a real hero:**

| Gap | Value |
|---|---|
| Heading → subtext | 8px (the tightest pair) |
| Eyebrow → heading | 12px |
| Subtext → buttons | 32px |

## The 4-point grid system

- **Default for the first sketch:** make every spacing and sizing value a multiple of 4. Start every design this way.
- Why: not because it inherently looks better, but because you can always split values in half, which creates consistency throughout a design.
- It's optional. Once the first version exists, break it on purpose where the design needs it.

## Consistency

Inconsistent components make a design look amateur, and it's an easy fix.

- Components that do the same job look the same: two search bars are identical except for their placeholder; a back button and a skip button match in size, radius and style.
- Pick a corner radius per component size and keep it. For example, set all small components to 10px.
- Use **styles** for colors, **variables** for measurements and **components** for UI elements.
- Use auto layout (or flex/grid in code) for every stack, so spacing is set once and stays consistent.
- Don't nest cards inside cards. It creates padding on padding and cramps the content. Group with white space instead of another container.

## The fold

- A typical non-curved monitor gives 1920px across but only about 1,000px of visible height once the browser bar is counted.
- Dribbble shots are often much taller and cheat this. Design the first screen to that real height.

## Spacing in a hero (from the restaurant landing page build)

- Between subtext and buttons, leave **at least twice** the distance you left between heading and subtext.
- Why: a large heading already carries a lot of built-in space between its baseline and the bottom of its box, so the heading-to-subtext gap looks bigger than it is.
- When layering image assets around text, always keep a margin of safety around the text so it doesn't feel cluttered and tight.

See `identity-and-site-building.md` for the full build and `landing-pages.md` for section layouts.
