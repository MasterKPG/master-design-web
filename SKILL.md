---
name: master-design-web
description: Personal design guidelines for building, redesigning or reviewing any user interface - landing pages, marketing sites, dashboards, admin panels, web apps, mobile app screens, and individual components (cards, buttons, inputs, forms, tables, charts, navigation, modals). Use whenever the task is to design, build, restyle, polish or critique a UI, or when the user says a page looks generic, boring or "vibe-coded". Covers visual hierarchy, layout and spacing, typography and copy, color, dark mode, shadows and overlays, icons and states, micro-interactions and motion, hero scroll animations, social proof and logos, navigation and footer forms, accessibility, dashboards, mobile apps, UX flows, landing page patterns, proposing 2-3 design directions combined by the site's role, mood, style and color, and a step-by-step identity-to-website workflow.
---

# Master Design (Web and Apps)

These are **guidelines, not laws**. Each rule is a default; the guideline files say when to break it. Design has no fixed rules: break any of them on purpose when it serves the identity, the message, or what the user needs to see.

## Working process

1. **Identify what you're designing and the user's one main goal.** Landing page, dashboard, mobile app or component. This sets density, type scale, grid strictness and how much motion is appropriate.
   - **New project:** ask the setup questions in one round, research the product's world and its palette, then propose **2-3 directions** (never a single design) and **wait for the user to pick or mix**. Each direction is a complete combination chosen by the site's role in the business, mood, style and color (`design-directions.md`). Skip the questions the first prompt already answers; skip the gates when the user says to build straight away (`identity-and-site-building.md`).
   - **Existing project:** review it bluntly first: what to keep, what to improve, what to remove, ranked. No hedging. Wait for the yes.
2. **Every project is brand-driven.** No website or app is without a brand, whether it's pronounced or not. Follow `guidelines/identity-and-site-building.md`:
   ask and propose directions → identity (one idea → moody image → palette → type → icons) in a `brand/` folder the user validates → message and site flow → frankenstein wireframe → build section by section → motion.
   Hero motion, social proof, nav, phone menu, footer and hover are chosen per direction from their catalogs, and must agree with each other (`design-directions.md`, section 6).
3. **Product screens:** on top of the identity, plan the flow and every state first (`guidelines/ux-and-product-thinking.md`), then follow `guidelines/dashboards.md` or `guidelines/mobile-apps.md`.
4. **Hierarchy per component:** decide what's most important *in this context* and make it dominant with size, color and position. Lock elements to edges.
5. **Layout and spacing:** grid for structured content, free layout for impact. 4pt grid for the first sketch. Group by proximity. Replace noise with white space.
6. **Typography and copy:** one font to start, a size scale for the product type, tight large headings, short precise headings.
7. **Color:** palette from the product's world, one primary + ramp, neutrals doing most of the work, semantic colors with purpose.
8. **Depth:** subtle shadows in light mode, lighter surfaces and blur in dark mode, gradients/blur for text on images.
9. **Icons, buttons and states:** icons at line height, clear button priority, every state designed.
10. **Micro-interactions and motion last:** feedback on every action; motion that directs the eye and repeats as part of the identity.
11. **Accessibility pass, then the pre-delivery checklist.**

## Core principles

1. **Information must never look like a spreadsheet.** Size, color and position create hierarchy. Emphasis is the *difference* from neighbors.
2. **Context decides prominence.** Location is minor on a McDonald's order card and central on an Uber ride card.
3. **Show, don't tell.** Logos over names, pins for locations, avatars for people, chips and icons over labels. Nobody reads a screen; they scan for an answer.
4. **Real imagery and a precise heading** relate to users and build trust. Their absence is the No. 1 vibe-coding tell.
5. **White space beats more content.** More information means people read *less*.
6. **Offer directions, and make each one hold together.** 2-3 complete options, chosen by role, mood, style and color. One idea (a metaphor or a shape) runs through the nav, buttons, hovers and footer; the nav and footer are a pair; one hover style per kind of element.
7. **Group by proximity; lock elements to edges.** Use 4pt multiples first. Grids for structured pages; break them deliberately on custom landing pages.
8. **One font is enough to start.** Add fonts only when each one serves the identity. Tighten large text (-2% to -3% tracking, 110-120% line height).
9. **Type scale fits the product:** ≤6 sizes on websites; nothing above ~24px on dashboards; mobile type stays as large as desktop.
10. **Let the color find the website.** Model the palette on the product's environment (hospital vs. disco). Use color for purpose, never decoration. Red is for destruction, even on a purple brand.
11. **Dark mode is its own design.** Softer borders, lighter raised surfaces, double the lightness steps, light greys for text, blur behind popovers.
12. **Effects should go unnoticed.** If you see the shadow first, it's wrong. Protect text on images with a gradient (+ progressive blur), not a flat overlay.
13. **Every interaction needs a response.** Buttons: default/hover/pressed/disabled (+ loading). Inputs: focus/error/warning. Plus empty, loading, success and error states.
14. **Let the data drive the form** on dashboards. Do one thing well, put the most important block top-left, and show what's needed now (progressive disclosure).
15. **On mobile, one screen does one thing.** Bottom bar with 3-4 tabs, 44px targets, one direction per section, bottom sheets, and gestures with visible alternatives.
16. **Motion supports clarity.** Never linear easing; repeat a few motion themes as identity; respect reduced motion. Accessibility (4.5:1 text, focus rings, labels, never color alone) is part of the design.

## Pre-delivery checklist

- [ ] Each display has a clear focal point; nothing reads like a data table; elements sit on shared edges.
- [ ] The most important info is chosen *for this context* and is visibly dominant.
- [ ] Logos/images, pins, avatars and icons replace text where they're recognizable.
- [ ] Real imagery or the real product is shown; the heading is a precise promise; copy is short and free of AI tells.
- [ ] Every element guides or informs; the rest is white space. Spacing uses 4pt multiples, or breaks them deliberately.
- [ ] Font count and type scale fit the product (sites ≤6 sizes, dashboards ≤24px, mobile not shrunk). Large headings tightened.
- [ ] The palette matches the product's world; every color has a purpose; destructive = red; text is grey-tuned, not pure black.
- [ ] Dark mode: soft borders, lighter raised surfaces, wider lightness steps, dimmed chips, important text lightest.
- [ ] Shadows subtle and light grey; popovers above cards; text over images readable without killing the image.
- [ ] Icons from one library at line height; one primary action; chips thinner than buttons.
- [ ] All button and input states exist; empty, loading, success and error states are designed; undo over confirm where reversible.
- [ ] Dashboards: priority grid, right-aligned tabular numbers, readable charts (axes, no curved lines), tooltips, no repeated KPIs.
- [ ] Mobile: ≥44px targets, bottom bar ≤5 (ideally 3-4), one direction per section, gesture alternatives, safe areas.
- [ ] Accessibility: contrast 4.5:1 text / 3:1 UI, visible focus, labels above inputs, color never alone, reduced-motion fallback.
- [ ] Motion: purposeful, eased, repeated as identity, quick for feedback.
- [ ] Vibe-coding tells: none used by default (`guidelines/vibe-coding-tells.md`).
- [ ] The plan and the `brand/` folder were validated by the user before the build.
- [ ] Hero motion, proof form, nav and footer were picked for this identity. The hero works with motion off.
- [ ] 2-3 directions were offered (one changing the layout, not only the colors). The chosen one passes `design-directions.md` section 6: one idea repeated, nav/phone menu/footer as a pair, one hover style per element kind, one corner family, same CTA label everywhere.

## When to read what

| Read | When |
|---|---|
| `guidelines/visual-hierarchy.md` | Any card, list item, profile, order/ride display; edges; dense content |
| `guidelines/layout-and-spacing.md` | Grids, white space, grouping, 4pt system, consistency, the fold |
| `guidelines/typography.md` | Fonts, type scale per product, tight headings, copywriting, brand-led type moves |
| `guidelines/color.md` | Palette from context, ramps, neutral recipe, semantic color, OKLCH |
| `guidelines/dark-mode.md` | Any dark theme or dark surface |
| `guidelines/shadows-and-overlays.md` | Elevation, effects, text over images |
| `guidelines/icons-buttons-states.md` | Icons, buttons, chips, button and input states, feedback |
| `guidelines/micro-interactions-and-motion.md` | Micro-interactions, easing, scroll motion, motion identity, hover styles |
| `guidelines/design-directions.md` | Every new site: proposing 2-3 directions; combining pieces by role, mood, style and color; making them agree |
| `guidelines/hero-and-scroll-motion.md` | Choosing the hero's scroll technique (catalog), loaders and intros, cinemagraphs, CSS scroll-driven and GSAP builds |
| `guidelines/social-proof-and-logos.md` | Where and how logos, testimonials, work, faces and true numbers appear |
| `guidelines/navigation-and-footers.md` | Nav forms (classic to brand-led: sidebars, edge tabs, cells), phone menus, living details, footer forms, the nav/footer pair |
| `guidelines/pricing.md` | Pricing cards, pricing pages, in-app billing pages |
| `guidelines/components.md` | Cards, brand-led CTAs, forms, footers, chips, carousels, stickers, search |
| `guidelines/accessibility.md` | Contrast numbers, focus, targets, motion, forms, screen readers |
| `guidelines/identity-and-site-building.md` | Every project (start here); a generic or vibe-coded redesign |
| `guidelines/landing-pages.md` | Hero anatomy, section patterns, the 4 quality levels, nav and footer basics |
| `guidelines/dashboards.md` | Dashboards, admin panels, web apps, tables, charts |
| `guidelines/mobile-apps.md` | Any mobile app screen, navigation, gestures, bottom sheets |
| `guidelines/ux-and-product-thinking.md` | Flows, states, onboarding, undo vs. confirm, AI product UI |
| `guidelines/vibe-coding-tells.md` | Reviewing or de-generic-ing any UI or copy |
| `guidelines/presenting-designs.md` | Portfolio shots, client presentations, mockups |
| `examples/README.md` | Reference sites, `.fig` files and transcripts (inspiration only, never copy) |
| `examples/creative-sites-patterns.md` | The evidence behind the brand-led defaults: 18 creative sites, with links to their folders and screenshots |

Read only the files relevant to the task. Full landing page or site: start with `identity-and-site-building.md` and `design-directions.md`, then the three catalogs (hero motion, proof, nav and footers) before proposing the directions. Dashboard: `dashboards.md`. Mobile: `mobile-apps.md`. Always finish with `accessibility.md`.
