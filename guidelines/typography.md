# Typography, Font Sizing and Copy

Design is mostly text, made beautiful. Get the type right and most of the design follows.

## Start with one font, then iterate

- **Base rule:** one simple sans-serif font for the whole website/app is more than enough for a clean look. Good options:
  - DM Sans
  - Axiforma
  - SF Pro
  - Geist
  - Plus Jakarta Sans
  - Montserrat
  - Unbounded
- Don't spend most of your time choosing font packs or pairings. Start with one font, then change it as you iterate.

**This rule can be broken, like every rule here.**

- Apple's website uses many fonts and it isn't a bad site. Every font follows Apple's identity: clarity and intuitiveness. Use more than one font when it helps convey a message, and only if every font serves the identity.
- **Restaurant build:** a serif feels more elegant, like a printed menu.
- **Hero heading:** split it across 2 fonts to emphasize what you want the user to notice.
- **Brand cohesion:** if the logo and packaging use a font (e.g. Apple's New York on a beauty brand), reuse it in the headline.
- **Money and data:** a typewriter/monospace face can make prices read as money (see the McDonald's card in `visual-hierarchy.md`).

## The "tight text" hack for large type

To make a header or title pop and look more professional instantly:

- **Tighten the letter spacing** by about **-2% to -3%**, so there isn't much white space between letters. Not to the point where they touch.
- **Drop the line height** to about **110%-120%**.
- Apply this to large text only. Body text keeps its default letter spacing.

The Wise-style CTA ("heavy, bold, tight text") is this trick taken further.

## Size scale depends on the product

Typographic hierarchy is nuanced, and sizes vary wildly between products.

| Product type | Guidance |
|---|---|
| Landing pages and websites | Generally no more than **6 font sizes**, but they can cover a very large range |
| Dashboards | Range shrinks dramatically: many small sizes close together. Normally **nothing larger than 24px**, because information density is higher and text must be targeted, precise and effective |
| Mobile apps | Type does **not** shrink with the screen. iOS's base body size is 17px, while macOS's is 13px. Mobile type is often *larger* than desktop |

## Hierarchy inside components

- Make the important text bold and bigger, and the supporting text smaller and subtler (see the McDonald's card in `visual-hierarchy.md`).
- Grey out labels so the values pop (see the profile card in `visual-hierarchy.md`).
- Color creates hierarchy as well as size: two lines at the same 15px read differently if the second is at ~55% opacity. Check that the dimmer one still passes contrast (see `accessibility.md`).
- Size icons to the text's line height (see `icons-buttons-states.md`).
- **Numbers in tables, KPIs, prices and timers:** use tabular figures so the digits line up and don't shift as values change.

## Copy is part of typography

- **Headings carry the message.** Most visitors read only the heading, so make it precise and actionable. It should promise exactly what the product does.
- **Keep it short.** A strong hero: about 7 words in the heading, about 14 in the subtext.
- **Progress from "what it does" to "how it helps"**: "collect and analyze data quickly" → "turn your data into decisions".
- **Write friendly, plain language**, not corporate jargon: "we sweat the details" beats "we take pride in our attention to detail". Basecamp's whole site is a good reference.
- Don't repeat the company name in the copy when it's already in the logo.
- **Pair every button with a label that says where it goes.** Two CTAs with the same destination get the same label.
- Avoid AI copy patterns. See `vibe-coding-tells.md`.
