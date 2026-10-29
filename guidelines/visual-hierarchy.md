# Visual Hierarchy

The goal: any card, box or information display should be intuitive and fast to scan. It should never look like a spreadsheet of raw data.

## The three levers: size, color, position

- Use **size**, **color** and **position** to tell the user where to look.
- The *contrast* between small and big, bold and regular, colorful and not is what creates hierarchy. If everything has the same weight, nothing stands out.
- Default order: the most important things go near the top, bigger and more colorful. Images are used whenever possible.

## Images and logos

- **Use an image when applicable.** It gives the card "pop", makes scanning easy and gives form to the information.
- **For something well known (an app, a website, a brand, an item), prefer the icon/logo over the name.** Make the logo the main element and place the name under it, very subtle.
- **If the name is the most important piece** (e.g. a specific item), put it beside the image, bold and bigger than the rest of the card's information.

## Context decides what is prominent

The same piece of data can be primary in one product and secondary in another. Ask "what does the user need to see first *in this scenario*?"

### Example: McDonald's order card (food delivery app)

- McDonald's logo on the left.
- To the right of it: **Big Mac x1** (the main line).
- **Price** at the top right, directly across from "Big Mac x1", flush right.
- **Time of the order** under the price, in a less bright/deep color than the rest of the text.
- **Make the price read as money.** It should be different from every other number on the screen. Two ways:
  - Color: make it the *only* blue number.
  - Or type alone: a different font (e.g. a typewriter/monospace face) or different typesetting (thinner, more letter-spaced). Often that's enough.
- The delivery location goes smaller and below. The user already knows it, it's long, and it's not interesting in this scenario.

### Example: Uber ride card (ride app)

- Here the location *is* the point. Place the from/to locations right next to the image/logo of the car type or kind of ride.
- Don't write "from" and "to". Use icons and alignment to show that the ride goes from A to B (see below).

## Icons as identifiers

Use icons wherever they help identify what something is, so the user doesn't have to read a label.

- **A location should nearly always have a pin icon** next to it so the user instantly knows it's a location.
- **Multiple locations:** stack them vertically and draw a dotted line through the pins to show they're related.
- **Only connect what is related.** If the locations aren't related, or only two of them are, the dotted line connects only the related ones. The connection is communicated instantly, without writing it anywhere.

## Show, don't tell

- When something isn't clear, the instinct is to explain it harder: add a label, a comparison, a tooltip. That makes the screen harder to *read* in order to make it easier to *understand*. Avoid that trade-off.
- Instead, turn plain text into visuals that register instantly: icons, avatars, small diagrams, chips. A red octagon reads as "stop" without any text.
- **Nobody reads a screen.** Users arrive with a question and hunt for the answer (one file, one setting). Design for scanning, not reading.

## Edges and alignment ("weirdly perfect" UI)

Compact UI looks right when every element is locked to an edge.

- **A receipt is the model:** text hard left, prices hard right, and the only centered parts are the ones you're not meant to read. There are no dividers and almost no white space. Two edges hold everything together.
- **Every card gives you four edges.** Elements also create new edges: the bottom of an avatar and name is an edge you can stack the next row against.
- **Don't fill empty space by adding content.** First check whether content follows the edges.
  - If buttons float, align them to an edge. If there are too many, reduce them.
  - If a region is unresolved, *manufacture* a new edge (e.g. line up the buttons and the avatar into one solid line for the content below).
  - Hiding elements in a menu is not the default fix.
- **Each element should touch at least two edges.** That's true of chat inputs, kanban cards, sidebars and checklists.
- **Don't let lines run full-width without a reason.** The edges stay the same but the composition stops feeling tight.

## Differentiate dense content instead of thinning it

- The problem with a dense list is rarely too much content. It's **too much undifferentiated content.**
- Adding white space helps a little but makes everything longer.
- Instead:
  - Drop in avatars wherever people are referenced.
  - Group by something meaningful (e.g. due date).
  - Use chips to categorize; highlight links (e.g. blue + underline).
- After that, density works *for* you: any item can be found in about a second.

## Emphasis is relative

- **Emphasis isn't something an element has. It's the difference between the element and its neighbors.**
- To make one item stand out, you often don't add color or bold to it. You change its surroundings: put default values in grey so the non-default ones find the eye.
- A checkbox is the reference: off is a thin border and nothing else; on earns fill and a check. Nobody makes a checkbox blue when it's off, because the color *is* the signal.

## Cards are optional

- Most people see an open canvas and start adding containers until there are borders on borders and three radii stacked together.
- One line can often dissolve all the cards into the interface: a column edge does the card edge's job, rows stack on each other, and section headings do the grouping.

## These are guidelines, not laws

Use your imagination to reach different designs. The layouts above are defaults, not rules to follow imperatively. It isn't an exact science; a different arrangement can be just as right if the same ideas apply.

### Example: food order card with a banner

- Add a banner across the top of the card showing the food picture, slicing the restaurant's logo/icon in half.

### Example: profile card

Same banner layout, applied to a profile:

1. Profile picture sits on the left; the banner slices it in half and occupies the top.
2. A description right under where the profile picture ends.
3. Below that, split the card horizontally into stats (e.g. rides, references, rating):
   - Titles/labels greyed out.
   - The values pop more than the labels.
4. Buttons at the bottom: the most important one gets a deeper color than the less important one(s).

### Example: rating star with three states

Give the rating a star icon whose look reflects the value:

| Average rating | Star treatment |
|---|---|
| Above 4 | Golden star; play a shining animation once when the profile loads |
| Between 2.5 and 4 | No shine; a less bright yellow |
| Under 2.5 | Empty star with a red outline |

This is hierarchy and feedback in a single icon: the user reads the quality before reading the number. The star alone isn't enough for accessibility, though: always show the number next to it (see `accessibility.md`).
