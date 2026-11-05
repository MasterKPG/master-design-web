# L'Étude

- **Source:** https://letude.group (found via navbar.gallery), captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** landing page (creative studio / agency)
- **Take from it:** a navbar made of vertical tabs on the screen edges that expand on hover; the brand name's meaning ("étude" = study) driving the copy; a wordmark that frames rapid-cut project videos; a footer wordmark that rebuilds itself
- **Related guideline:** `guidelines/navigation-and-footers.md`, `guidelines/identity-and-site-building.md`, `guidelines/micro-interactions-and-motion.md`
- **Don't take:** the fixed INFO badge sitting on top of body text as you scroll; long paragraphs set at headline size

Built in Svelte with Lenis smooth scroll. One typeface, Indivisible, from 550 to 999 weight. Three colors: tomato red `#ee382b`, cobalt blue `#012094`, a cool grey-lilac page, plus black for the wordmark.

## Screenshots

| File | What it shows |
|---|---|
| `desktop-00-intro-sequence.jpg` | Load: grey, then full red, then a photo flashes in as the wordmark builds letter by letter and the intro line fades in word by word |
| `desktop-01-hero.jpg` | Hero: black "L'ÉTUDE" with a project video showing through a box behind it, a dictionary entry top-right, "MODULAR / CREATIVE / STUDIO" spread under it |
| `desktop-02-work-scatter.jpg` | Work: project thumbnails scattered left and right, each with a vertical "LET.27" index code, and a column of black custom glyphs down the middle |
| `desktop-03-vision-statement.jpg` | "Our vision" as a huge blue paragraph with an indented first line |
| `desktop-04-definition.jpg` | The dictionary definition set as a justified red statement with wide word gaps |
| `desktop-05-logo-drawing.jpg` | The logo's "E" mark drawn as a giant blue outline across the page |
| `desktop-06-footer-wordmark-animating.jpg` | Footer wordmark mid-animation: letters flipping and filling at different times |
| `desktop-07-footer.jpg` | Footer at rest: outlined wordmark across the full width, small links under it |
| `desktop-nav-hover.jpg` | The edge tabs before / during / after hover |
| `mobile-01..02.jpg` | Phone: a different hero ("WHO WOULD YOU BE" over a burning rose) and the stacked flow |

## Loading and intro

- Grey flash, then the screen fills red. A photo appears and "L'ÉTUDE" types itself in big black letters (L', É, T, U…). Then the hero settles and the intro line ("We are an international boutique studio…") fades in word by word, words arriving out of order.
- Total about 3 seconds, and the loader *is* the hero building itself. No separate loading screen.

## Navbar (edges, not a bar)

- **No top bar.** The navigation lives on the edges of the screen as small blue marks:
  - top-left: the logo (a stylised "E" made of two strokes),
  - next to it, a globe icon over a vertical tab showing only "W",
  - right side, a circular "INFO" badge,
  - bottom-right, an "@" over a filled pill showing only "C".
- **Hover expands the tab:** "W" grows into "Work", "C" into "Contact", the box lengthening as the letters slide in. "INFO" spins inside its circle. The logo's strokes redraw. The menu teaches itself on hover and stays minimal at rest.
- **Phone:** the tabs are shown fully expanded ("Work", "Contact") on the right edge because there's no hover. Smart fallback: the compact form only exists where hover can open it.

## Hero

- The wordmark is huge and black. A rectangle of video sits behind its top half and cuts between projects every second or so (a fashion shoot, a car campaign, a poster). The name stays still; the work flickers through it.
- Top-right, a dictionary entry: "Étude · noun · \e.tyd\ From French 'study'. A methodical application of the mind in pursuit of learning and understanding." The brand name explains the brand.
- Under it, "MODULAR · CREATIVE · STUDIO" spread across the width and the intro line in blue.

## Scroll and motion

- **Work as a scatter, not a grid.** Thumbnails sit at uneven heights left and right, each with a tiny vertical index code ("LET.27", "LET.16") and a "↗ Project name" caption. A centre column of custom black glyphs (the studio's own icon set) scrolls between them and a "SERVICES" label stays pinned at the top.
- **Statements between the work:** "Our vision", "Our expertise", "Our culture", "Solutions", each a large blue paragraph with an indented first line, introduced by a tiny uppercase label.
- **The definition again**, now as a red justified statement filling the width with wide word gaps: "It's a methodical application of the mind seeking to discern and recognize."
- **The logo mark** is drawn as a giant blue outline (a 3D-ish "E") as you pass the culture section.
- **Footer wordmark:** "L'ÉTUDE" across the full width in outline. As you arrive, letters flip, mirror and fill solid one by one, then settle back to outline.

## Layout and space

- Generous: one statement or two thumbnails per screen. Images are small relative to the page and never full-bleed after the hero, which makes the type the main event.
- Index codes and tiny labels give a catalogue/archive feel that fits "study".

## Footer

- Giant outlined wordmark, then a thin row: "L'ÉTUDE GROUP — European creatives from LA and beyond", "CONNECT WITH US" with four social icons, "© OCMM LLC — CIRCA 2023", and Work / Info / Contact / Careers / Terms.

## Phone

- New hero for phone: a burning rose video with "WHO WOULD YOU BE" in a serif, the wordmark under it. They art-directed the phone, they didn't just shrink the desktop.
- Thumbnails stack one per screen with their index codes. The edge tabs stay fixed on the right.

## What to learn

- Navigation doesn't need a bar. Edge tabs that expand on hover keep the canvas clean and become part of the identity.
- Mine the brand name for copy and structure (definition, index codes, "study").
- Let the hero assemble itself as the loader.
- Show the work through the wordmark: rapid cuts inside a fixed frame feel like a showreel without taking over.
