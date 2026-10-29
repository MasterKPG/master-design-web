# Dashboards and Web Apps

Most dashboards don't fail because they're ugly. They fail because they're disorganized. Designing one isn't hard; orchestrating one is. The difference shows the moment someone starts using it.

**Sources:** the user's reference videos and `.fig` files (Dashboard UI, Dashboard Flaws, Financial Dashboard, Micro Dashboard, Sidebar Tutorial, Vibe Coded SaaS), plus non-conflicting rules from the installed design skills and current practice at Linear, Vercel, Stripe, Notion, Dub and Supabase. Where those sources disagree with the user's own rules, the user's rules win.

## Core rules

- **Do one thing well.** If the dashboard looks like it needs a PhD to operate, it's too complex. A dashboard that looks like someone emptied a drawer onto the screen needs elements removed, not rearranged.
- **The main area shows what matters most to this user.** Project management → project status. Finance → investments at the top.
- **The 5-second test:** within about five seconds, users should know whether things are good or bad (status, comparisons like "up 12% from last month").
- **Smaller and denser than a landing page:** many small font sizes close together, nothing above ~24px (see `typography.md`), and a strict grid, because the layout uses most of the screen.
- **Let the data drive the form.** Build the UI around the data it has to display, not the other way around.

## Priority and layout

1. **Audit the hierarchy first.** List every element, merge duplicates (one search bar, not two), and remove what has no value (a decorative diagram, a card that does nothing, an unlabeled number).
2. **Every element must make sense in the domain.** A credit card can't "receive" money, so swap that button for "Lock card". Fill the gaps the domain needs (a finance dashboard missing a line of credit).
3. **Rank the remaining blocks** into high / mid / low priority.
4. **Place by priority on a grid:** more important blocks go **higher and further left**. High-priority blocks first, then mid, then low; choose block orientations that avoid awkward gaps.
5. **The top of the page** is reserved for important page actions or simple navigation (e.g. a dropdown and a "Create link" button).

## The sidebar: the spine of the product

It holds the persistent, global elements: navigation, profile management, search.

- **Top:** profile management (picture + arrows to show it's clickable) is often more useful than the logo.
- **Links:** a recognizable icon + a short title. This makes a collapsible sidebar easy and leaves room for a notification count or a "New" chip.
- **Group links by relevance** to reduce cognitive load. Rarely used items (Settings, Help) go to the bottom. Nest links into dropdowns as the list grows.
- **Active state** with an indicator (e.g. a rectangle behind the item).
- **Optional:** highlighted features, search, integrations, or notifications in the empty space (Dub, Linear).
- **Only include what this section needs.** In Custom Domains or Teams, click counts don't matter; that info lives in Dashboard/Analytics.
- **Replace the AI gradient-initials circle** with a proper account card; tuck secondary links into a popover on click; merge Settings, Billing and Usage.
- **Visual style (from the sidebar file):** mostly white or near-white, a very subtle outline around elements, and a subtle drop shadow on pop-ups in a light grey (not transparent black).

## The four components

Master these and you can build almost any dashboard page.

### 1. Lists and tables (the most common)

- **Lists:** separate items with **space**, **lines/dividers**, or **color**. Choose one.
- **Tables are tools:** give users search, filter and sort.
- **Let the data shape the columns:**
  - A finite set of values (department, status) → **chips**.
  - Numbers → **right-aligned**, in tabular figures or monospace, so digits align by place value. Fixed decimals; units in grey.
  - Long text → **truncate** to give other columns room (full text in a tooltip).
  - Inactive/deactivated rows → **shaded out**.
- **Not everything belongs in a table.** Time-ordered data reads better as a **timeline**, tucked into a side panel or placed as a second column.
- **Status pills:** pale tint with dark text of the same hue. Avoid saturated chips with white text.
- **Headers:** small, grey, sentence case.
- **Simple rows on the home page:** favicon, short link, real link, date, and the key number (clicks), plus a short description if space allows. Stacking items into a list (instead of a bordered card per item) means less clutter and an easy empty state.

### 2. Cards

- Charts, toasts and most dashboard blocks are cards. Keep margins well spaced.
- Separate cards with a **border or a background color**. Default: outlines on dark mode, background colors on light mode.

### 3. User input

- Modals, settings pages, forms inside cards (Vercel). See `components.md` for form rules.

### 4. Tabs

- Tabs add "pages" without cluttering the sidebar (Notion's views of related tables). They scale: adding Documents or Integrations later is just another tab.

## Popover, modal, toast or new page?

| Pattern | Use when | Notes |
|---|---|---|
| **Popover** | Context is simple (display settings, share) | Non-blocking: clicking away has no consequence |
| **Modal** | Context is more complex but tied to the current page (create a link) | Blocking: create or cancel. Prefer a modal over a sparse fly-out; collapse advanced options by default |
| **Toast** | Confirming a change, warning, error, or prompting action without taking over the screen | Toasts are the dashboard's notification system. Since a modal hides the page, confirm its changes with a toast |
| **New page** | Context is permanent or very large (an existing link's details) | Must have a back button or breadcrumb |

## Progressive disclosure and invisible UI

- **Hierarchy is also what you show and what you hide.** Rarely used features (share) live in a popover, not permanently on the page.
- **The spectrum of explicitness:** a global, always-visible button is very explicit; an icon that appears on hover is barely explicit. Place each action by how important and frequent it is. Example: in a share popover, search is visible at the top; "remove user" appears on hover, with a tooltip.
- **UI is as much what you can't see as what you can.** Dense tables need hidden UI: a copy chip on hover over a cell, a small triangle for comments, hover states on rows. Design all of it.
- **Tooltips are missing from almost every beginner dashboard.** Assume users won't know every icon or ambiguous label.
- **Onboarding is progressive disclosure:** start with one tooltip on the most important action, then the next, or a checklist in the corner. Never a modal with six bullets that's forgotten when dismissed.

## Charts

- **Keep them simple, informative and readable.** "Weird" charts nobody understands help no one.
- **Line chart:** grid lines and axis numbers (everyone forgets them), a short summary, and a date/range selector.
- **Never curve the data lines**, which hides where the values really are, and **never fade out the latest data**, which looks like you're hiding it.
- **Bar charts:** an axis; avoid rounded tops (hard to see where the bar ends); one bar per period (7 days = 7 bars). Put favicons/logos beside bars to identify items.
- Add vertical lines for time scale; a dropdown or segmented control for the time frame; optionally the previous period as a grey line, with a legend.
- **Choose the chart from the data:** income vs. expenses → a two-sided bar chart (up = income, down = expenses); proportions → a pie chart; geography → a shaded map with the data listed beside it.
- **Don't repeat data:** if growth percentages are shown as chips, a chart of the same thing is redundant.
- **Chart color comes from the data** (see `color.md`, OKLCH section).
- **Hover detail is where dashboards get creative:** the exact value plus a percent bubble, or all other bars dimming.
- An icon to open a chart full-screen, and a "Compare" option when several series could be compared.

## Color on dashboards

- Landing pages can get away with a lot. **Dashboard color must come from the data itself.**
- Red appears because something is urgent (red icon + chip in an activity log). One red signal per object; red everywhere is noise.
- Avatars because the eye associates people faster than it reads names.
- Use the neutral layers in `color.md`. Color in charts and status, not on every button and tab.
- **Never let AI choose the colors.** It picks bright colors that don't work together. A simple change (dark blue → dark green background) plus charts instead of colored buttons and icons transforms a vibe-coded dashboard.

## KPIs

- **Never repeat the same KPIs.** Four KPI cards shown three times in one small app is a vibe-coding tell.
- Expand KPIs with **micro charts** when the trend matters, or use a two-column layout with small donut charts.
- Values in ink, not brand color; deltas in words with their time window.

## States you must design

- **Empty state:** an animation or image, a message and a clear next step (Dub). Draw attention to the main action (e.g. the "+" button).
- **Zero:** print a real zero ("$0", "0%"). Missing data is a grey dash, never a large "--" that reads as loading.
- **Loading:** the final layout with grey placeholders at their real size, so nothing shifts when data lands.
- **Error:** inside the block that failed, with what failed, when data was last good, and a Retry.
- **Success:** a toast or status notification (Vercel shows build status immediately).
- **Bulk actions:** selecting several rows reveals a contextual "Bulk actions" button.

## Speed: optimistic UI

Everyone wants a snappy dashboard. **Act first, assume success:** Gmail removes a deleted email instantly and handles the server in the background. No awkward pause before the item disappears. See `ux-and-product-thinking.md`.

## Animation on dashboards

Tame and user-focused compared with landing pages: hover states, smooth menus and popovers (slide up a few pixels while fading in), a spinner with a spring, a success check sliding in, a focused item highlighted with a stroke while the rest blurs. See `micro-interactions-and-motion.md`.

## Responsive behavior

- Desktop and dashboards can lay out content in **two directions** at once (columns and rows). Mobile can only go one direction per section.
- **Tablet (≈641-1100px):** the sidebar folds into a top bar; tables keep 4-5 columns and move secondary fields into sublines.
- **Phone:** see `mobile-apps.md` (tables become two-line rows, KPIs become a 2-column grid or label/value list, one row of controls above a chart).

## Pricing and billing pages (SaaS)

- Fewer plans: five is too many; drop at least one.
- Make the plan name smaller and the **monthly price bigger**; people care about price, not names.
- Show the actual discount and what the next plan adds that this one lacks (Resend, Supabase).
- Add the billing email and payment method. Use tabs (Billing, Usage) so the page can grow.
- Pricing card details: `components.md`.

## Reference products

Linear (clarity, consistent system, subtle meaningful status animation, keyboard-first), Vercel (near-monochrome, color only for meaning, build-status notifications), Stripe (table-centric, aligned numbers), Notion (tabs for views, settings as lists inside a modal), Dub (empty states, notifications in the sidebar, hover for upgrade details), Mercury (tinted sidebar anchor), Supabase (monochrome layers, pricing pattern).
