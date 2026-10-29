# Identity and Site Building ("Frankensteining")

This is the workflow for brand-driven sites: landing pages, marketing sites, product sites. The running example throughout is a **landing page for restaurant software**.

## Why: the vibe-coded look and how to fix it

- **The No. 1 sign that a site was vibe-coded is the lack of images of real-life objects.** Without them the site looks robotic.
  - Example: a restaurant-software site that says it's for restaurant owners, then designs like it has never heard of a restaurant. No images anywhere.
  - Compare **Actual**, which immediately relates to freelancers and agencies with laptops, MacBooks, keyboards and random background objects like clips and paperclips. This assures users they're in the right place.
- **The heading is the most important thing on a website**, because most of the time it's the only part the user reads. Make it a single, actionable promise of exactly what the product does.
- The goal: close the gap between the site and the user by relating to them and building trust. An imageless site without precise headings can't do that.
- Full list of tells: `vibe-coding-tells.md`.

## Core principles

- The feeling of a site comes mostly from its **visual identity**. None of the identity comes from a formula or rules. It comes from what conveys the feeling, message and end goal of the site, and what makes sense for the brand.
- **Layout and identity are separate layers.** The wireframe and the brand usually aren't related. Because you define each one carefully, you can swap a different identity into the same layout and get a wildly different feeling. That's the goal.
- **UI is the flavor; UX is the thinking.** The same layout can feel friendly (warm background, colorful visuals, round corners, big bubbly buttons) or modern and premium (less rounding, less colorful premium imagery, some background noise). Turning a few words into a feeling is the skill.

---

## Step-by-step workflow

The order matters less than doing the work. The default is **identity first**, so the flow and the wireframe are built on the identity rather than the identity bent to fit the wireframe.

### Step 1: Visual identity

Escape bright, sterile light modes and flat, typical dark modes.

1. **Start with a single moody image** that sets the "feeling of the website". Restaurant: crop it, darken it, round the edges, layer it, add some noise, put the brand name on top. That alone brings the whole thing to life.
2. **Gather a few more images** with the same moody vibe.
3. **Pull a simple palette from the images** (e.g. earthy tones), plus a few accent colors that go with it. Check the palette matches the product's world (see `color.md`, "Let the color find the website").
4. **Add texture images:** a counter with pots, pans and measuring spoons; or, for a more modern software angle, a tablet on a counter showing the order software.
5. **Choose type that fits the feeling.** Default to one sans; for restaurants, mixing in a serif adds personality, like a printed menu. A monospace that doesn't fit the identity should go.
6. **Draw a few icons in the accent colors** to represent the product's main features.
7. **Add images of people.** This works for any site, since the end goal is usually to reach people. Finish with the logo mark.

### Step 2: Message and site flow

- Work out what the site must say and in what order the sections should say it.
- The heading carries the message, since it's often the only thing read.
- Think about how each section leads into the next. Level 1 sites feel like sections dropped on top of each other; good sites have a top-to-bottom progression (see `landing-pages.md`).

### Step 3: Wireframe by frankensteining

Build the skeleton by borrowing section ideas from different reference sites and stitching them together. Keep only the wireframe, then toss the rest. Zoom out and you'll see the "frankenstein".

**Restaurant example:**

1. **Hero** (based on Actual): instead of laptops and keyboards, scatter restaurant items (pots, pans, measuring spoons, spatulas) to show who the product is for.
2. **Logo strip:** a quick, subtle, small ribbon of logos (restaurant logos, technology logos, whatever fits), rotating like Better Stack's.
3. **How it works:** similar to Actual's "Superpowered" section, but less step-like and with much bigger images. Use the background images to reinforce who would use the product.
4. **Features:** as simple and visual as possible. No paragraphs, more images of the features working. Built as a section where the user chooses which feature to see (Miro's full-screen color tabs, with a bigger image and ~90% less text).
5. **Extra social proof:** testimonials (Attio-style), made less blocky.
6. **CTA:** like Wise: heavy, bold, tight type, an image as the background, left-aligned.
7. **Footer.**

### Step 4: Build section by section

Apply the identity to the wireframe. Once the wireframe and identity exist, this becomes almost formulaic.

**Hero**
1. Background: one of your main colors, or a picture. Restaurant: a wooden countertop, with some noise to help text contrast.
2. Heading: keep a single sans, or split it into 2 fonts to emphasize something you want the user to know.
3. Add a bit of subtext and buttons with rounder edges.
4. Spacing: the gap between subtext and buttons should be **at least twice** the gap between heading and subtext. The large heading already has a lot of space between its baseline and its bottom.
5. Layer in the image assets. It should *feel* scattered and random, but it isn't:
   - Larger elements at the bottom, smaller elements on top.
   - Elements draw attention toward the center and trail off the further they are from it. Don't tilt them randomly; it just looks off.
   - Always keep a margin of safety around the text so the elements are context, not clutter.
   - Stop before it gets cluttered. One more illustration in an empty corner can push it over the line.
6. Darken the edges to draw attention to the center.

**Next section (how it works)**
- Same process: images as the background, stronger noise, mid-size text.

**Features section**
- Cream background to contrast a bit.
- No noise, to lean into a clean software feel.
- A graph-paper-like texture.
- Large images that dominate the page.
- The feature icons from the brand deck.

**Remaining sections:** continue through the wireframe with the same identity until a cohesive and unique page comes together.

### Step 5: Motion

Add motion last, as part of the identity: repeated themes and eye direction. See `micro-interactions-and-motion.md`.

---

## Context elements: make it feel like the product

Removing things doesn't always make a page clearer. Sometimes it just makes it empty.

- Elements around the core message (money and invoices on an invoicing site; coins and a character on a crypto site) tell the user what the product is **before they read anything**.
- For a playful site: doodled illustrations, small "twinkles", a couple of tasteful scribbles.
- Match the vibe: blobs and fun colors (most playful), doodles (in between), realistic imagery (professional). Gumroad's neo-brutalism is another point on that scale.
- Finishing touches count: a quirky 404 page is the ultimate place for personality, because the user isn't supposed to be there.
