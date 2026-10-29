# Icons, Buttons, Feedback and States

## Icons

Strong designs need icons. Good icons do a lot for a design, and bad ones do real damage.

- **Most icons are too large.** Match the icon size to the font's line height (e.g. 24px line height → 24px icon).
- **Then tighten up the text:** mostly the letter spacing, and also the gap between the icon and the text.
- **Use a real icon library, never emojis.** Phosphor, Lucide and Feather are good choices. If you download icons, filter by stroke width and corner style and grab SVGs.
- **One style per area.** Icons must match in fill, line width and style. Mixing styles is fine only when they're in visually separate areas with different jobs (nav icons vs. category icons).
- **Cards without icons force reading.** Add icons where they help identify content (see `visual-hierarchy.md`).
- **Labels:** well-known icons (home, bookmark, user, search) don't need labels. Obscure ones need a label or a tooltip.
- On brand-driven sites, draw feature icons in the identity's accent colors (see `identity-and-site-building.md`).
- **Remove redundant icons and arrows.** An arrow that duplicates a swipe, or a stroke that adds nothing, is clutter.

## Ghost buttons

- Sidebar links are really buttons without a background until you hover: **ghost buttons**.
- Isolate one and center it and you get a perfect standalone button.
- Ghost buttons are very common when a primary and a secondary CTA sit side by side.

## Button sizing

- **Padding guideline:** horizontal padding = **2× the vertical padding**.
- Works with or without icons.
- **Optional flourish:** reveal the icon on hover with a quick, subtle slide-in or pop-in animation.

## Button priority

- With several buttons, give the most important one a deeper/darker color than the less important ones. **The more important a button is, the darker it is**, from ghost to near-black with white text.
- One primary action per screen.
- In confirmation dialogs, the primary (highlighted) button is the **non-destructive** action. Users learn to trust that it's always safe (macOS does this).

## Chips are not buttons

- Chips almost never use the primary CTA color, and they're always thinner vertically than buttons.
- Chip padding: vertical = **1/2 or 1/4 of the horizontal** padding (e.g. 20px horizontal → 10px or 5px vertical).
- Too small looks wrong; too big turns it into a button.

## Feedback: every interaction needs a response

When a user does anything, there should be a response.

### Button states

Every button needs at least these 4 states:

| State | Treatment |
|---|---|
| Default | Lighter color |
| Hover | Deeper color |
| Active / pressed | Even deeper color, or an icon change |
| Disabled | Greyed out |

**Active vs. pressed:**
- When there is no loading, active is the same as pressed (e.g. a radio button).
- When the action takes time (e.g. a download button), the active state *is* the loading state: show the loading animation or icon.

**Loading state:** keep the pressed look and swap the icon for a loader, usually a spinning circle. This is a good place to show the brand: a custom loading animation that shows the logo or something specific to the app/website.

**Quick feedback when the next screen is slow:** if the next screen takes a split second to load, grey the button out as soon as it's clicked so the user knows it worked. Add a spinner if it takes longer.

### Input states

Inputs are even more critical. Provide:

- **Focused:** when the user clicks in.
- **Error:** when the input is wrong. Red border and a message saying what's wrong.
- **Warning:** for issues that don't block the user, with a way forward (e.g. "This email already exists, go to login").

Form layout rules (labels above inputs, real example placeholders) are in `components.md`.

### Everywhere else

- Loading spinners while data is fetching.
- Success messages when an action completes.
- Micro animations on scroll or swipe.
- **Show the result where it lands:** when the user saves a recipe, fill the save icon *and* put a red dot on the Saved tab.

Every interaction needs a response. For richer feedback, see `micro-interactions-and-motion.md`. For states that aren't about one element (empty, error, first-run), see `ux-and-product-thinking.md`.

### State-driven icons

An icon can carry state too. See the 3-state rating star in `visual-hierarchy.md`.

## Press, release and commit

- Most buttons fire on **release**, not on press. Pressing and dragging away cancels. Every button has a built-in cancel.
- Buttons that open a menu or popover fire on **press**, so the user can press, drag to an item and release in one motion.
- Build both behaviors deliberately. They look alike but follow opposite rules. See `ux-and-product-thinking.md`.
