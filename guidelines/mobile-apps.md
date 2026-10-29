# Mobile Apps

Mobile is so different from desktop that copying desktop layouts produces questionable designs. Design for the thumb, the small screen and gestures.

**Sources:** the user's reference videos and `.fig` files (Mobile App UI, Swipe Anims, Beginner UI, UI Elements), non-conflicting rules from the installed design skills (Apple HIG and Material Design based), and award-winning apps: Flighty (Apple Design Award 2023, Interaction), CapWords (Apple Design Award 2025, Delight and Fun), plus Craft, Notion, Headspace, Slack, Apple's own apps and Gmail as cited in the videos. Where sources disagree with the user's rules, the user's rules win.

## Navigation

Where desktop has an expansive sidebar, mobile has two options:

1. **Bottom tab bar (default).** Consolidate the sidebar down to a few key icons.
   - Today it's typically **floating**, with the main action broken out.
   - **3-4 items is ideal; 5 is the hard limit.**
   - Every target stays **at least 44px** (Apple 44pt, Android 48dp), with at least 8px between targets.
   - Tab actions can change with context.
2. **Sidebar as the home page.** When there are too many important destinations, turn the sidebar into a full home page (Notion): recent items at the top, actions and counts on the right so it doesn't feel lopsided, and a big search bar or action button at the bottom.

**Tab bar details:**
- **Don't make the "+" button stick up** in a big circle. Users use every other tab more. Drop it in line, with no circle.
- Align all icons. **Inactive icons must still be clearly visible**; the active state already shows which is selected.
- Give the "+" an active state too, and consider a profile picture for the profile tab.
- Spread the icons a little to increase the hit area.
- **Labels depend on how obscure the icons are** (Instagram has none, Apple Music has them). If you use labels, make them dark enough to read.
- On dark designs, the bar can use transparency with blur.

**Top of the screen:** a bell and a more-menu are a good default, but these actions are contextual to the page.

## Sizes: things get bigger, not smaller

- Despite the smaller screen, the **type scale and spacing stay similar to desktop or even grow.** iOS body text is 17px (macOS: 13px). Keep body text at least 16px on mobile web to avoid the iOS zoom on focus.
- Squeezing everything onto the screen feels natural but looks wrong next to real apps. Zoom out and compare with real apps.
- **Desktop could show five things; mobile shows one.** Pick it.
- Use a 3-column (or 2-column) layout grid; margins about 16-20px; more vertical space between stacked content than you'd expect.
- Respect safe areas: keep primary targets away from the notch/Dynamic Island, the home indicator and screen edges.

## One direction per section

Desktop and dashboards lay content out in two directions at once (e.g. 2 columns × 3 rows). On mobile, **each section moves in one direction**: stack vertically *or* scroll horizontally off the page, never both. Use this rule when converting a dashboard to mobile.

## Four building blocks

Ignoring floating menus and actions, an app is built from:

1. **Cards** (the most important): they group content flexibly where there's no room for white space.
2. **Text and links.**
3. **Images.**
4. **Inputs.**

**Avoid double-nesting cards** (padding on padding cramps everything). Group with white space instead of another container.

## One screen does one thing

- Except for the home screen: settings is just settings, the note editor is just the editor. No recent notes or suggested templates on top.
- When you need something new, **reach for a new page, not a new layout.**

## Keep the user in context: bottom sheets

- When a task needs more room but shouldn't leave the screen (choosing a template while editing), use a **bottom sheet**: title, search, a check and an X, then the content. Any height.
- Sheets are easy to dismiss with gestures. As one rises, scale the background down slightly; reverse on dismiss.
- The "+" button can open a small menu or go straight to an input so the user can start typing.

## Contextual actions

Space is limited, so actions come and go:
- Opening a note hides the tab bar and reveals editing actions (formatting, sharing at the top).
- Choosing a template hides everything except a confirm and an X.
- How actions animate in and out is half the fun.

## Gestures

Swipes are everywhere. Once users learn them, you can rely on them heavily. **Always keep a visible alternative** (button, long-press menu) for people who don't know the gesture, and for accessibility.

### Navigation gestures

- **Swipe right to go back:** move the background left by about 35% and animate it back right for a smooth transition.
- **Swipe up to search** (Slack, and partly Apple).
- **Long press** is the mobile right-click: blur the rest of the screen, zoom the element slightly and show its actions. Better: a dynamic preview like iOS. In the reference file, a note's long-press menu is Pin, Lock, Share, History, then Delete last.
- **Swipe down to dismiss** popovers, sheets and pages: quick and intuitive, still with a close button.

### Three types of swipe interaction

1. **Within-page navigation** (uses the screen edges):
   - **Scrolling cards** beat stacking vertically, but rigid swiping feels bad. Open up the easing curve with more bounce so cards carry momentum.
   - **Skew cards off the edge** so they feel like a 3D ring you swipe through.
   - **Add indicators**, ideally with a fluid, magnetic stretch on swipe.
   - **The screen edge as a horizon:** things shrink as they approach it; pair with a circular swipe for a "spool of data".
   - Full-screen on swipe down, with a background that can be tapped or swiped to change modes.
2. **Between-page navigation:**
   - **Follow the direction of the swipe.** Swiping up: the card underneath expands to full screen, the tab behind expands, then content fades up and in, finishing with an elastic snap.
   - **Shared-element continuity:** an image zooms in to become the next page's hero, instead of a new page sliding in.
   - **Onboarding:** a button you can tap *or* swipe; the motion follows the swipe and wraps into the next slide (a circle expands, content swaps, a new circle shrinks).
3. **Swipe gestures that replace buttons:**
   - **Reveal secondary actions** by swiping a row left/right (Apple Reminders); the primary action (checking it off) stays a tap.
   - **Add items** (e.g. friends to a group) with a swipe instead of a "+" button. Keep a long-press menu as a fallback.
   - **Swipe to confirm** high-impact or irreversible actions (sending an email in Resend, buying crypto). It's much harder to trigger by accident than a button.
- **Gmail duality:** delete by swiping *or* by tapping and choosing Delete. Multiple ways to do the same thing.

### Easing

Almost never linear. The curve sets the tone: snappy, springy, or slow and smooth. See `micro-interactions-and-motion.md`.

## No hover on mobile

- There's no hover, so rely on **press states**: a slightly darker shade on press makes it feel like you're pressing into something.
- Give feedback within ~100ms of a tap; use haptics for confirmations and important actions, sparingly.

## Remove redundant elements

- Arrows next to swipeable carousels, decorative strokes, extra chevrons: if a gesture or position already says it, remove the element or dim it.

## Empty states

- **First launch:** don't show an empty content screen. Draw attention to the main action ("+"), use a full-screen empty state, and add a small popover explaining how things work.
- **No search results:** a nice image, acknowledge that nothing matches the keywords, suggest alternatives (typos), and give an action to exit.

## Onboarding is the moment to captivate

- Clean, focused screens; motion that situates the user (sheets slide up from the bottom = temporary; screens slide from the side = progress) and a small surprise (Craft's editing tools sliding up).
- Plan the flow before designing it: skip buttons, escape hatches, search when a preset list might not cover the user (an allergy picker needs search and "none"). See `ux-and-product-thinking.md`.

## Platform details worth respecting

- Use semantic input types (email, tel, number) so the right keyboard appears; support autofill.
- Don't block system gestures (back swipe, Control Center, Android predictive back).
- Support system text scaling (Dynamic Type) without truncating layouts.
- Keep the layout usable in landscape.

## Tokens seen in the reference file

The Mobile App UI file uses DM Sans for UI text, SF Pro for system elements, Phosphor icons, and color tokens named by role for each theme: `Light Primary`, `Light Ink`, `Dark Primary`, `Dark Ink`, `Dark Action`, `Outline Fill`, `Outline Border`. Name tokens by role, not by hex.

## Award-winning references

- **Flighty** (Apple Design Award 2023, Interaction): glanceable, live information; deep use of platform features (Live Activities, widgets).
- **CapWords** (Apple Design Award 2025, Delight and Fun): turns photos of everyday objects into interactive stickers. Real-world objects and playful interaction.
- **Craft:** onboarding with purposeful motion and surprise.
- **Notion:** sidebar-as-home navigation, bottom sheets.
- **Apple Reminders / Mail / Music, Gmail, Slack:** gesture conventions users already know.
