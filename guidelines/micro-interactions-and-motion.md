# Micro-interactions and Motion

## Micro-interactions

Micro-interactions are a form of feedback taken up a notch.

### Example: copy button

- It should have a hover state and feedback.
- On click, do one of these:
  - Swap the copy icon for a check.
  - Slide in a "Copied" chip with a check, replacing the text that was there.
  - Use a pop-in animation instead of a slide-in.
- **Keep it quick and effective** so the user is never unsure whether the click worked.

### A library of proven micro-interactions

Micro-interactions range from highly practical to fun and playful. Pick the ones that serve the product.

| Interaction | How |
|---|---|
| Button hover text | Mask the label and slide a second copy up on hover; shrink the button slightly while pressed. No need for extra colors |
| Keyboard shortcut hints | Animate the keys and show a small success message when the combo is pressed (Rainbow Wallet), so shortcuts stick in memory |
| Toasts | Slide up, then add interactive bits: a loading animation, a celebratory success with particles |
| Name tag on hover | Small headshots show a tilted pill with the person's name on hover (spring: ~500ms, stiffness ~636, damping ~24) |
| Shimmer stroke | A rotating angular gradient masked to the border. Add a pause/play control so users can stop it |
| Delayed tooltips | Show after ~1s of hover. Once one tooltip has opened, adjacent ones open instantly |
| Text hover pop-out | Hovering a word pops out an image of it (Figma community page). Shows without more words |
| Progress bar | Draw the stroke along the steps of a form to keep users engaged (Linear) |
| Card stack swipe | Notification cards stacked; swiping one rotates it away and the rest move forward to fill the gap (dub.co) |
| Search expansion | Collapse search into the magnifying glass; on click, the glass morphs into the open field (Apple) |
| Hover for upgrade details | Hovering a limit slides in what the next plan offers (Dub) |
| Loading → success | Spinner rotates with a spring, then the check slides in through a mask (sidebar tutorial) |
| Rating star shine | See `visual-hierarchy.md` |
| Icon reveal on buttons | See `icons-buttons-states.md` |

## Easing: never linear

- Things in real life speed up and slow down. **Almost never use a linear ease.**
- The curve sets the tone: snappy and performant, fun and springy, or slow and smooth.
- Opening up the curve with more bounce lets swiped content carry momentum and feel natural.
- Spring settings used in the reference files:

| Use | Setting |
|---|---|
| Hover name tag | 500ms, stiffness 636, damping 24 |
| Loading spinner steps | 300ms delay, stiffness 550, damping 40 |
| Simple transitions | ease-out |

## Motion supports clarity

- **Motion should support clarity, never distract from it.** Complex animations that exist only to look cool make navigation harder and add little.
- Good motion has a job: it draws attention to the product. Example: a boring side image morphs on scroll into the product dashboard, giving a great first look at it.
- Things don't have to move, but that doesn't mean they shouldn't. Static content can get its point across; well-built motion makes it feel alive.
- **Make it simple and make it well.** A blurry, imported third-party animation looks worse than a simple one done properly.
- **Unexpected moments are engaging if they're built well:** a playful mouse effect, a whole page unfolding on click. Break the pattern once in a while, not everywhere.

## Site motion

Animation is almost always an afterthought. Treat it instead as part of the brand: fluid, engaging interactions that feel like they belong to the identity.

### Build a motion identity: pick themes and repeat them

- **Example: Amigo AI.** Two main motion themes form its animation identity:
  1. A "pull-away" effect as you scroll past each section.
  2. Gradient animations between sections.
- They work as an identity because they don't happen once. They repeat throughout the whole site.

### Direct the eye

When you apply motion, think about directing the eye and the focal point.

**Example: bookends (hero and CTA)**

1. On landing, the focal point is the hero's header text.
2. When the user scrolls, there's a hard break between the hero and the next section.
3. **Fix:** slide the hero elements off the screen and blur the hero text while the new section slides over the top. The hero now feels like part of the background.
4. Apply the same idea **in reverse** for the CTA section at the bottom.

**Example: the middle sections (features)**

- Don't leave the middle dry once the bookends are animated.
- When every image in the middle matters and the user should see them all:
  - Rotate them automatically on a timer.
  - On hover, slightly zoom into the images.
  - Keep the feature titles (with their icons) visible as the click targets.

### Bringing illustrations and text to life

- **Give decorative elements real entrances**, not a robotic fade: a small star rotates and pops in; a hot-air balloon flies in from off-screen and slowly bobs up and down; a calendar moves and rotates in.
- **Parallax on scroll** for elements in large, spacious margins makes a page feel 3D without heavy backgrounds.
- **Animate the text itself** to tell the story (Reboot, Apple's Mac mini page): "deadlines" becomes a progress bar that fills and rises away; "paid" turns into bouncing dollar signs. The goal isn't complexity; it's drawing attention to the text because it moves.
- Small hover interactions on almost everything keep a simple site from feeling bland.

### Motion direction has meaning

- Sliding up from the bottom = a temporary action (a sheet, a tool panel).
- Sliding in from the side = progress through a flow (onboarding steps).
- Follow the direction of the user's gesture (see `mobile-apps.md`).

## App motion is tamer

On dashboards and app screens, motion is user-focused feedback: hovers, presses, menus and sheets opening, chart hover details. Save the expressive motion for landing pages and onboarding. See `dashboards.md`.

## Respect reduced motion

Every animation needs a calm fallback for users who ask for reduced motion. See `accessibility.md`.
