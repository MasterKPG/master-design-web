# De-slopify: web design agency landing page

An example landing page built with the `master-design-web` skill from the prompt "Build a de-slopify web design agency landing page". Open `index.html` in a browser. There's no build step. Fonts (Bricolage Grotesque, Caveat) load from Google Fonts and the icons are inline Lucide paths.

Before building, the skill asked one round of setup questions. The answers: De-slopify is the studio's name and its service is fixing AI-made sites; the feeling is blunt, crafted and funny; light mode with expressive motion; build straight away without the two approval gates.

De-slopify, its clients, results, prices, team and quotes are placeholders. The email addresses use the reserved `.example` domain. The form has no backend: it shows its error, loading and success states, then stops.

## How the skill was applied

- **Identity first.** The world of the site is an editor's desk: a printed page, a red pen, a highlighter. The palette came from it: warm proof paper, near-black ink, red pen for marking what's wrong and highlighter yellow for what's right. Red is only used for marking problems (and the error state), never for actions. The primary button is ink.
- **Type.** Bricolage Grotesque for everything, using its width axis: condensed and tight for headings, normal for body. Caveat is the red-pen handwriting and only appears in annotations and notes. Six sizes in total. Large headings tightened to about -3%.
- **Show the product.** For this studio the product is the fix, so the hero is a real before and after: a bike shop's vibe-coded homepage that gets marked up, cut and rebuilt.
- **The slop is a parody, on purpose.** The violet gradients, gradient text, emoji icons, three identical cards and "Unleash your potential" copy only appear inside the "before" mocks and specimens. Every "before" in the work section is the same template with the business name swapped, which is the point of the section.
- **Frankenstein wireframe.**
  1. Hero (sticky scrub): heading and URL form on the left, a browser on the right. Scroll runs three passes: flag the tells in red pen, strike them out, then wipe in the rebuilt site with its result.
  2. The tells: a specimen board of six tells, each one flipping to its fix. A "Fix all six" button flips them all.
  3. Work on a dark light-table: three before/after sliders, each with one outcome number.
  4. Process: a sticky studio photo beside four timed steps on a line that draws as you scroll.
  5. Named testimonials with faces and an outcome, no boxes.
  6. The studio: three people with a handwritten fact each.
  7. Two pricing cards (price big, name small, outline button under the price, one item not included) and four FAQs.
  8. CTA: heavy tight type, the URL and email form, a face stack with a number beside it. The hero form carries the URL down to this one.
  9. Footer: oversized wordmark with "slop" struck through, cropped by the bottom edge.
- **Catalog choices, varied from the earlier examples.** Hero: sticky scrub instead of the pull-away. Proof: no logo band (the clients aren't known), so named testimonials, outcome numbers in the work and a stat line beside the CTA. Nav: sticky on scroll-up. Footer: oversized wordmark instead of the small centered one.
- **Motion themes, repeated.** Red-pen strokes draw in (hero markup, the circled heading word, the CTA underline, the logo and wordmark strike). Paper swap: a new sheet wipes over the old one (hero rebuild, specimens, and each slider sweeps once from all-before to its resting point). Highlighter swipes behind key words.
- **Works with motion off.** Under `prefers-reduced-motion`, on small screens or short windows, the hero doesn't pin: the three pass buttons switch the states directly. Everything else falls back to static, and the page reads fine without JavaScript.

## Photo credits

All photos are from [Unsplash](https://unsplash.com) under the Unsplash License.

| File | Source |
|---|---|
| `fernhill-workshop.jpg` | [-cxC8iFx6V4](https://unsplash.com/photos/-cxC8iFx6V4) |
| `crumb-counter.jpg` | [b5kN9ClBRNU](https://unsplash.com/photos/b5kN9ClBRNU) |
| `crumb-jars.jpg` | [kdbaK6Q9G2U](https://unsplash.com/photos/kdbaK6Q9G2U) |
| `sharp-end-cut.jpg` | [ydd_DCROCTA](https://unsplash.com/photos/ydd_DCROCTA) |
| `red-marker.jpg` | [iOnN7Et1FhA](https://unsplash.com/photos/iOnN7Et1FhA) |
| `stock-high-five.jpg` | [photo-1600880292203](https://images.unsplash.com/photo-1600880292203-757bb62b4baf) |
| `studio-wall.jpg` | [photo-1552664730](https://images.unsplash.com/photo-1552664730-d307ca884978) |
| `face-tom.jpg` | [photo-1539571696357](https://images.unsplash.com/photo-1539571696357-5a69c17a67c6) |
| `face-hana.jpg` | [photo-1580489944761](https://images.unsplash.com/photo-1580489944761-15a19d654956) |
| `face-kwame.jpg` | [photo-1506277886164](https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f) |
| `person-ana.jpg` | [photo-1531123897727](https://images.unsplash.com/photo-1531123897727-8f129e1688ce) |
| `person-joe.jpg` | [photo-1472099645785](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e) |
| `person-priya.jpg` | [photo-1488426862026](https://images.unsplash.com/photo-1488426862026-3ee34a7d66df) |
