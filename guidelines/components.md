# Components

Upgrades for the elements most often done wrong. Each one improves both the UI and the UX. State rules for buttons and inputs are in `icons-buttons-states.md`; dashboard-specific components are in `dashboards.md`.

## Cards

- Fix margins first, then type: smaller paragraph text, a modern font, rounded corners for a friendlier look.
- **Repeated cards don't need a CTA:** make the whole card the link, and fade in an arrow icon on hover to show it's clickable.
- **Specific action → specific CTA** ("Try it out").
- **Image card with gradient** (Apple Music): image at ~3/4 of the card height, a long smooth gradient from the bottom of the image upward, text on top. Only works with some images; the plain image-above-text card always works.
- Don't nest cards in cards.

## Pricing cards

1. Put the button near the top, under the price. Keep hierarchy by making it outline-only (no fill).
2. Replace bullets with **check marks**, and list a feature this plan *doesn't* include, so the next plan looks better.
3. Give the plan a **name and a short description**.
4. Add the honest billing note (e.g. "billed annually, $20/month").
5. Separate the price block from the features with a reduced-opacity primary background, rather than a divider line.
6. Use an actionable CTA label.
7. Price big, plan name small (see `dashboards.md`, pricing pages).

## Forms: sign-up and log-in

- **Labels above the inputs, always visible.** Labels inside the empty field disappear mid-typing.
- **Placeholders are real examples**, so users see the expected format.
- A subheading ("Create account") so it's clearly sign-up, not log-in, plus a link to log in for people in the wrong place.
- Give it room. Stick to the 4px grid religiously here.
- Field style: an off-white background with the stroke at ~40% opacity. (Check that the field is still identifiable; see `accessibility.md`.)
- The same layout repurposes into the log-in modal.
- Errors and warnings: `icons-buttons-states.md`.

## Footers

See `landing-pages.md`: 3-5 centered links, logo above, socials below, copyright left, credits right. Big multi-column footers only when there are many links.

## Chips

- Great for breadcrumbs (Linear's landing page) and interactive filters/tags.
- Never in the primary CTA color; always thinner vertically than a button.
- Vertical padding = 1/2 or 1/4 of the horizontal padding.
- Build them with auto layout (flex) so padding stays consistent.

## Carousels

- Add **navigation indicators** so users can tell how many slides there are. Put them on a dark blurred pill over the image (readable on any image) or below it.
- Move the arrows next to the indicators.
- Fancy option: the active indicator becomes a circular timer for auto-advance.
- Works the same on desktop and mobile. Auto-rotation needs a pause (see `accessibility.md`).

## Stickers

Useful for breaking out of boxy layouts and adding information.

- Shape: a star with ~12 points, the ratio pulled in, corners rounded.
- Type: quirky display fonts.
- Details: an outline, or circular text around the edge.
- Depth: a solid shadow at full opacity, in a darker shade of the sticker's color, slightly offset.
- This is the place to be creative with shapes, colors and patterns.

## Charts

See `dashboards.md`: no curved data lines, no fading of recent data, grid lines and markers, time-scale controls, previous period as a grey line, a legend.

## Mobile tab bar

See `mobile-apps.md`: no sticking-up "+" button, visible inactive icons, an active state for every tab, bigger hit areas, labels only if icons are obscure.

## Sidebar

See `dashboards.md`. Icons are the secret to a great sidebar.

## Toasts, modals and popovers

See `dashboards.md` (when to use which) and `micro-interactions-and-motion.md` (toast animations).

## Search bar

- Collapse a clunky search bar into the magnifying glass and expand it on click, with the glass morphing into the field.
- On mobile, a big search bar at the bottom or a swipe-up-to-search gesture.
- A filter icon inside the search bar.

## Avatars and accounts

- Use a real account card or profile picture, not the AI-default gradient circle with initials.
- On hover over small headshots, pop up a name tag (see `micro-interactions-and-motion.md`).
