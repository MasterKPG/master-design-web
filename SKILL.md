---
name: master-design-web
description: Personal design guidelines for building, redesigning or reviewing any user interface - landing pages, marketing sites, dashboards, admin panels, web apps, mobile app screens, and individual components (cards, buttons, inputs, forms, tables, charts, navigation, modals). Use whenever the task is to design, build, restyle, polish or critique a UI, or when the user says a page looks generic, boring or "vibe-coded". Covers visual hierarchy, layout and spacing, typography and copy, color, dark mode, shadows and overlays, icons and states, micro-interactions and motion, accessibility, dashboards, mobile apps, UX flows, landing page patterns, and a step-by-step identity-to-website workflow.
---

# Master Design (Web and Apps)

These are **guidelines, not laws**. Each rule is a default; the guideline files say when to break it. Design has no fixed rules: break any of them on purpose when it serves the identity, the message, or what the user needs to see.

## Working process

1. **Identify what you're designing and the user's one main goal.** Landing page, dashboard, mobile app or component. This sets density, type scale, grid strictness and how much motion is appropriate.
2. **Brand-driven pages:** follow the workflow in `guidelines/identity-and-site-building.md`:
   identity (moody image → palette → type → icons) → message and site flow → frankenstein wireframe → build section by section → motion.
3. **Product screens:** plan the flow and every state first (`guidelines/ux-and-product-thinking.md`), then follow `guidelines/dashboards.md` or `guidelines/mobile-apps.md`.
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
6. **Group by proximity; lock elements to edges.** Use 4pt multiples first. Grids for structured pages; break them deliberately on custom landing pages.
7. **One font is enough to start.** Add fonts only when each one serves the identity. Tighten large text (-2% to -3% tracking, 110-120% line height).
8. **Type scale fits the product:** ≤6 sizes on websites; nothing above ~24px on dashboards; mobile type stays as large as desktop.
9. **Let the color find the website.** Model the palette on the product's environment (hospital vs. disco). Use color for purpose, never decoration. Red is for destruction, even on a purple brand.
10. **Dark mode is its own design.** Softer borders, lighter raised surfaces, double the lightness steps, light greys for text, blur behind popovers.
11. **Effects should go unnoticed.** If you see the shadow first, it's wrong. Protect text on images with a gradient (+ progressive blur), not a flat overlay.
12. **Every interaction needs a response.** Buttons: default/hover/pressed/disabled (+ loading). Inputs: focus/error/warning. Plus empty, loading, success and error states.
13. **Let the data drive the form** on dashboards. Do one thing well, put the most important block top-left, and show what's needed now (progressive disclosure).
14. **On mobile, one screen does one thing.** Bottom bar with 3-4 tabs, 44px targets, one direction per section, bottom sheets, and gestures with visible alternatives.
15. **Motion supports clarity.** Never linear easing; repeat a few motion themes as identity; respect reduced motion. Accessibility (4.5:1 text, focus rings, labels, never color alone) is part of the design.

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

## When to read what

| Read | When |
|---|---|
| `guidelines/visual-hierarchy.md` | Any card, list item, profile, order/ride display; edges; dense content |
| `guidelines/layout-and-spacing.md` | Grids, white space, grouping, 4pt system, consistency, the fold |
| `guidelines/typography.md` | Fonts, type scale per product, tight headings, copywriting |
| `guidelines/color.md` | Palette from context, ramps, neutral recipe, semantic color, OKLCH |
| `guidelines/dark-mode.md` | Any dark theme or dark surface |
| `guidelines/shadows-and-overlays.md` | Elevation, effects, text over images |
| `guidelines/icons-buttons-states.md` | Icons, buttons, chips, button and input states, feedback |
| `guidelines/micro-interactions-and-motion.md` | Micro-interactions, easing, scroll motion, motion identity |
| `guidelines/components.md` | Cards, pricing, forms, footers, chips, carousels, stickers, search |
| `guidelines/accessibility.md` | Contrast numbers, focus, targets, motion, forms, screen readers |
| `guidelines/identity-and-site-building.md` | Any landing/marketing page; a generic or vibe-coded redesign |
| `guidelines/landing-pages.md` | Hero anatomy, section patterns, the 4 quality levels, nav, footers |
| `guidelines/dashboards.md` | Dashboards, admin panels, web apps, tables, charts, SaaS pricing |
| `guidelines/mobile-apps.md` | Any mobile app screen, navigation, gestures, bottom sheets |
| `guidelines/ux-and-product-thinking.md` | Flows, states, onboarding, undo vs. confirm, AI product UI |
| `guidelines/vibe-coding-tells.md` | Reviewing or de-generic-ing any UI or copy |
| `guidelines/presenting-designs.md` | Portfolio shots, client presentations, mockups |
| `examples/README.md` | Reference sites, `.fig` files and transcripts (inspiration only, never copy) |

Read only the files relevant to the task. Full landing page: start with `identity-and-site-building.md`. Dashboard: `dashboards.md`. Mobile: `mobile-apps.md`. Always finish with `accessibility.md`.
