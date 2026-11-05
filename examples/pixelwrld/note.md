# Pixelwrld (Roman Tesliuk)

- **Source:** https://pixelwrld.co, captured 2026-11-05 at 1440×900 and iPhone 13 (390×664)
- **Type:** personal hub / portfolio (one screen, no scroll)
- **Take from it:** the whole site is one screen of app icons that act as the navigation; hovering one blurs everything else and blooms a preview of that product in its own style
- **Related guideline:** `guidelines/micro-interactions-and-motion.md`, `guidelines/navigation-and-footers.md`
- **Don't take:** the floating "•••" pill sitting on top of the bio text on phone

Built in Framer. Inter for UI, a handwritten face for the greeting and personal notes. Off-white page (`#f7f7f7`) with a faint dot grid and concentric rings radiating from the centre.

## Screenshots

| File | What it shows |
|---|---|
| `desktop-01-home.jpg` | Resting state: handwritten greeting, four icons with pill labels, a short bio, a "•••" pill |
| `desktop-02-hover-portal-entering.jpg` | ~0.2s into hovering Portal: the other icons and the text blur, the preview grows out of the icon |
| `desktop-03-hover-portal.jpg` | Portal settled: app screens fanned above the icon, the name in Portal's own serif, a description, "View Portal" |
| `desktop-04-hover-app-stacks.jpg` | App Stacks: a tilted laptop and phone with tool icons floating round them |
| `desktop-05-hover-collab.jpg` | "Collab with Roman": a cut-out photo of him with sticker labels and a handwritten line |
| `desktop-06-dots-menu.jpg` | The "•••" pill expanded into a small card: Reach out, Twitter (X), Threads, "All Right Reserved" |
| `mobile-01.jpg` | Phone: 2×2 icon grid, and the "•••" opening as a bottom sheet with a close button |

## Layout

- **One screen, nothing to scroll.** Greeting at the top, four icons in a row in the middle, three lines of bio, a dots pill at the bottom. The page is the menu.
- The icons are real app icons (glossy, 3D-ish), plus a round photo for "Collab with Roman". Each has a grey pill label under it.
- Background: faint dot grid and concentric rings behind the icons, so the centre feels like a stage.

## Hover (the whole idea)

- Hovering an icon **blurs everything else** (the other icons, the greeting, the bio) and keeps only the hovered item sharp.
- The item **blooms upward**: screenshots or a device mockup fan out of the icon with a quick scale-and-rise (about 0.3s), the name appears big and a small "View …" pill appears under it.
- **Each preview speaks in its product's voice.** Portal uses its serif wordmark and warm cards; App Stacks a tech mockup with floating tool icons; "Collab with Roman" swaps to a cut-out photo with sticker tags ("Should designers code?") and handwriting ("Design is my bread and butter…"). Same mechanism, four personalities.
- Moving away reverses it. Hovering empty space returns to the resting state.

## Footer as a button

- There's no footer. A small "•••" pill at the bottom expands in place into a rounded card with three icon links and the copyright. On phone it becomes a bottom sheet with an X.

## Phone

- Icons drop to a 2×2 grid. There's no hover, and tapping an icon goes straight to the product; the bloom preview is lost. Phones need a tap-to-preview or a short line under each icon instead.
- The dots pill floats over the bio text. Give floating controls their own space.

## What to learn

- A personal or small-studio site can be a single screen where the navigation *is* the content.
- Blur-the-rest is a strong focus device: it costs one filter and makes the hovered item feel lifted.
- Let each item's preview carry its own brand (type, color, imagery) inside a shared frame.
- A footer can collapse into a "more" button when there are only a few links.
