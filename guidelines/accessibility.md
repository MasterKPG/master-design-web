# Accessibility

Accessibility is part of the design, not a final audit. Most of it overlaps with good hierarchy, feedback and states. This file collects the requirements and numbers.

**Sources:** WCAG 2.2 (W3C), APCA (proposed for WCAG 3), Apple HIG and Material Design via the installed ui-ux-pro-max skill, the installed taste skill, and the user's own rules. Contrast ratios below were computed with the WCAG 2.x formula.

## Contrast

### WCAG 2.x (the legal baseline, level AA)

| What | Minimum ratio |
|---|---|
| Body text | **4.5:1** |
| Large text (≥24px regular, or ≥18.66px bold) | **3:1** |
| UI parts and graphics needed to understand them (input borders, icons, chart lines, focus rings) | **3:1** |
| AAA (enhanced) body text | 7:1 |

**Formula:** ratio = (L1 + 0.05) / (L2 + 0.05), where L is relative luminance (L1 the lighter color):
- Each sRGB channel c (0-1) → c/12.92 if c ≤ 0.04045, else ((c + 0.055)/1.055)^2.4.
- L = 0.2126 R + 0.7152 G + 0.0722 B.

### APCA (better for dark mode and for type size)

WCAG 2.x is known to be unreliable for light-on-dark. APCA's guidance:
- **Lc 90** preferred for body text, **Lc 75** minimum.
- **Lc 60** minimum for other content text (large or bold headings, prominent labels).
- Light text on dark gives a negative Lc; compare the absolute value.
- Use it as a second check in dark mode. Pass WCAG AA for compliance.

### Verified pairs (WCAG 2.x ratios)

| Pair | Ratio | Verdict |
|---|---|---|
| #1C1C1C on #FFFFFF (heading ink, ~11% white) | 17.04 | AAA |
| #333333 on #FFFFFF (body, ~20% white) | 12.63 | AAA |
| #666666 on #FFFFFF (subtext, ~40% white) | 5.74 | AA |
| #666666 on #F5F5F5 | 5.27 | AA |
| #8C8C8C on #FFFFFF | 3.36 | Large text / UI only |
| #9CA3AF on #FFFFFF (common placeholder grey) | 2.54 | **Fails.** Don't use for anything that must be read |
| White on #1D4ED8 (deep blue) | 6.70 | AA |
| White on #2563EB (blue-600) | 5.17 | AA |
| White on #3B82F6 (blue-500) | 3.68 | Large text only |
| White on #DC2626 (red-600) | 4.83 | AA |
| White on #B91C1C (red-700) | 6.47 | AA |
| White on #16A34A (green-600) | 3.30 | Large text only. Use green-700 |
| White on #15803D (green-700) | 5.02 | AA |
| White on #F97316 (orange-500) | 2.80 | **Fails.** Darken to #C2410C (5.18) or use dark text (#1C1C1C: 6.08) |
| #1C1C1C on #FACC15 (yellow-400) | 11.13 | AAA. Yellow buttons take dark text |
| White on #EAB308 (yellow-500) | 1.92 | **Fails** |
| #B45309 on #FEF3C7 (amber pill) | 4.51 | AA (just) |
| #166534 on #DCFCE7 (green pill) | 6.49 | AA |
| #991B1B on #FEE2E2 (red pill) | 6.80 | AA |
| #E5E5E5 on #0F0F0F (dark mode text) | 15.22 | AAA |
| #A3A3A3 on #0F0F0F (dark secondary) | 7.60 | AAA |
| #A3A3A3 on #1A1A1A (secondary on raised card) | 6.90 | AA |
| #737373 on #0F0F0F | 4.04 | **Fails** for body text |
| #60A5FA on #0F0F0F (blue-400 on dark) | 7.54 | AAA |
| #F87171 on #0F0F0F (red-400 on dark) | 6.93 | AA |

**Takeaways:**
- Bright brand colors (orange, yellow, light green, mid blue) usually fail with white text. Darken them (see `color.md`, "Adapt brand colors") or switch to dark text.
- Subtle borders (#E5E7EB on white = 1.24:1) are fine for **decoration**, but an input's border must reach **3:1**, or the input must be identifiable another way (filled background, label).
- Text at reduced opacity (e.g. 55%) must still be checked.

## Color is never the only signal

- Pair color with an icon, text or shape: an error has a red border **and** a message; a status chip has a word; a rating star has a number next to it.
- Charts: avoid red/green-only pairs; distinguish series by label, pattern or position as well as hue; keep data lines/bars at 3:1 against the background and labels at 4.5:1.

## Focus and keyboard

- **Visible focus ring** on every interactive element: about 2px, offset from the element, at 3:1 against its surroundings. Never remove focus outlines without a replacement. Focus and hover states increase contrast, never reduce it.
- **Focus must not be hidden** by sticky headers, footers or non-modal dialogs (WCAG 2.2, 2.4.11 AA).
- **Tab order follows visual order.** Everything clickable works with the keyboard; modals trap focus and close with Esc; after closing, focus returns to the trigger.
- Provide a "skip to content" link on content-heavy sites.
- Keyboard shortcuts must not override system or assistive-technology shortcuts.

## Targets and gestures

| Standard | Minimum target |
|---|---|
| WCAG 2.2 AA (2.5.8) | 24 × 24 CSS px (or enough spacing around it) |
| Apple HIG | 44 × 44 pt |
| Material | 48 × 48 dp |

- On touch screens, use the 44/48 sizes and keep at least 8px between targets. Extend the hit area beyond the visual icon if needed.
- **Dragging must have a single-tap alternative** (WCAG 2.2, 2.5.7 AA). This matches the "swipe + button" duality in `mobile-apps.md`.
- Gesture-only actions always need a visible control.

## Motion

- Respect `prefers-reduced-motion`: replace movement (parallax, slides, zooms, auto-rotating carousels) with simple fades or nothing.
- Anything that moves for more than ~5 seconds needs a pause control. The shimmer-stroke pause/play button in `micro-interactions-and-motion.md` is the pattern.
- Avoid flashing content.

## Text and content

- Body text ≥16px on the web (≥17pt on iOS); line height about 1.5 for body; line length about 60-75 characters on desktop, 35-60 on mobile.
- Support text scaling (browser zoom to 200%, Dynamic Type) without breaking or truncating layouts.
- Headings in order (h1 → h2 → h3), one h1 per page.
- Meaningful **alt text** for meaningful images; empty alt for decorative ones.
- Plain language, which matches the friendly-copy rule in `typography.md`.

## Forms

- **Visible labels above inputs**, never placeholder-only (this is also the user's form rule in `components.md`).
- Errors: red border **plus** a message that says what's wrong and how to fix it, placed by the field and announced to screen readers (`role="alert"` or `aria-live`). On submit with errors, move focus to the first invalid field.
- Mark required fields; use semantic input types and autocomplete attributes.
- Don't ask for information the user already entered in the same process (WCAG 2.2, 3.3.7).
- Login must not require memory or puzzle tests without an alternative; allow paste and password managers (WCAG 2.2, 3.3.8).

## Screen readers

- Icon-only buttons need an accessible name (`aria-label` / `accessibilityLabel`).
- Toasts must not steal focus; announce them with `aria-live="polite"`.
- Use native elements (button, a, input, select) before custom ones; when custom, add the right roles and states (`aria-expanded`, `aria-selected`, `aria-sort` on sortable tables).
- Provide a text summary or table alternative for charts.
- After a route change, move focus to the main content.

## Help and consistency

- Help mechanisms (contact, chat, FAQ) appear in the same place on every page (WCAG 2.2, 3.2.6).
- Consistent components and placement are an accessibility feature as well as a design one.

## Accessibility tells of vibe-coded UI

Flashy hover animations on meaningless divs with **zero keyboard navigation or ARIA support** is a known tell (see `vibe-coding-tells.md`). Interaction polish without accessibility is surface-level.
