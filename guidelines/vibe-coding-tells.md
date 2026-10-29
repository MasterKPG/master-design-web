# Vibe-Coding Tells

## The rule

Most of these are not wrong in themselves. Many started as good ideas on good sites. **They become tells when used systematically: by default, everywhere, without a reason.** Using one on purpose, where it serves the identity or the message, is fine. Applying the whole set by reflex is what gives a site the "vibe-coded" look.

Removing every tell isn't enough either. A page with nothing wrong and no idea in it is a tidy template. Fill the space with the product: real imagery, a precise heading, its own data, its identity (see `identity-and-site-building.md`).

Detailed source lists: `../examples/ai-telltales/`.

## Visual tells

- **No images of real-life objects.** The No. 1 tell. The site doesn't relate to its users (see `identity-and-site-building.md`).
- **Emojis as icons.** Swap for a real icon library (Phosphor, Lucide).
- **AI-chosen colors.** Bright colors that don't work together; multiple competing accents. Choose colors yourself (see `color.md`).
- **The "vibe graphics" starter pack:** gradient text, glowing backdrop blurs, neon borders, floating emojis, violet/indigo gradients.
- **Component uniformity:** identical cards with the same radius (`rounded-xl`/`2xl`) and the same shadow, whatever the context.
- **Gradient profile circles with initials** instead of a real account card.
- **Shallow micro-interactions:** complex hover animations on meaningless elements, with no keyboard or screen-reader support.
- **Effects overload:** harsh default shadows, two-hue gradients, glows (see `shadows-and-overlays.md`).
- **Stock or fake product imagery:** stock photos unrelated to the product, or fake dashboards made of grey bars and donuts. Show the real product.
- **Contrast over-engineering:** pure #000 on pure #FFF everywhere, or bright multicolor gradients on non-interactive headers.

## Layout and structure tells

- **AI-chosen layouts.** AI is bad at complex layouts and cards. This is where a human touch makes the largest difference in the least time.
- **Repeated KPIs:** the same four KPI cards appearing several times in a small app.
- **Cards that do nothing:** remove them.
- **Sparse fly-outs** with lots of empty space where a modal fits better.
- **Too many plans** on a pricing page, with names bigger than prices.
- **Symmetrical padding overuse:** centered blocks of paragraphs with equal margins, creating a wall of text.
- **Superficial hierarchy:** "**Label:** value" bold prefixes down a whole layout instead of real styles.
- **Alternating text-left/image-right sections** all the way down (level 1 in `landing-pages.md`).
- **Every section in the same layout family, everything centered.**

## Copy tells

- **Em dashes everywhere,** as the default rhythm break in every paragraph, subheader and feature list.
- **Performative status microcopy:** "Analyzing data, ensuring everything is perfectly aligned." Pattern: *[Action], [verb]ing sure that [value]*. Say what's happening, crisply.
- **Rhetorical fragments that answer themselves:** "The result? Smarter pipelines."
- **Three-adjective stacks:** "robust, scalable, and seamless".
- **"Not just X, it's Y"** reveals.
- **The forbidden lexicon:**

| Category | Avoid | Prefer |
|---|---|---|
| Verbs | delve, unleash, elevate, foster, streamline, harness, empower, unlock, supercharge | start, build, speed up, use, improve |
| Adjectives | pivotal, robust, scalable, cutting-edge, innovative, transformative, seamless, effortless | key, strong, expandable, new, modern |
| Metaphors | realm, landscape, tapestry, intersection, beacon | area, industry, market, mix, guide |
| Padding | furthermore, moreover, notably, indeed, in essence | also, next, or delete |

- Generic labels: "Get started" and "Learn more" when a specific action fits better.

## Platform leftovers

- Builder badges, watermarks and favicons (Bolt, Lovable).
- Default Vite/Next.js/CRA titles and meta descriptions.
- Dozens of unused icon imports.

## Code tells (React + TypeScript)

These don't show on screen but hurt quality and are part of the same habit:

- A 1,500-line `App.tsx`/`page.tsx` with every subcomponent, hook and mock data inside.
- `useEffect` used to copy state or chain updates (flicker, render loops).
- Large mock JSON arrays declared inside the component body.
- `key={index}` on dynamic lists, or missing keys.
- `any`, `as any` and `!` used to silence the compiler; endless `?.` chains on values that are guaranteed.
- Unused imports and leftover types from earlier prompts.

## Conflicts with other design skills (deliberate)

The installed taste skill bans several things these guidelines use on purpose: serif fonts for an identity, cream backgrounds, logo strips, bento grids, progressive blur, monospace for prices, and a split-font heading. **The user's rules win:** they're allowed *when chosen for the identity or the message*. They are tells only when applied by default.
