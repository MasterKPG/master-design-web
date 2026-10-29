# UX and Product Thinking

UI design is decorating one room. Product design is designing the whole house: the flow, the function, the wiring and how it all connects. Linear is loved for its clarity (states, flows, system), not only for its looks.

## 1. Design every state, not just the happy path

Most designers design the perfect screen. Real apps need every state users actually see:

- **Empty:** a message, an animation or image, and a clear next step (Dub's dashboard).
- **Loading:** an informative loading state.
- **Success / error:** say what happened (Vercel tells you the build status immediately). After connecting an integration, show success or error.
- **Hidden states:** hovers, menus, tooltips and micro-interactions are the most commonly missed elements.

## 2. Build for flow

Think in screens and sequences, not sections. For every screen, ask: **how did the user get here, and what do they need next?**

- **Notion:** after creating a team space, it immediately offers "add team members" with the option to skip. A team space without members is useless.
- **Reaching out to an applicant:** click → choose an email template → offered to add other applicants → send. That's three small decisions chained together.
- **Plan the flow before drawing it**, even as boxes on paper. You'll catch the gaps users would feel instantly: a preset list with no search for other options, no skip button for people it doesn't apply to, no way to go back.
- **Small touches matter:** a filter icon on the search bar, a save button at the top.

### Example: onboarding with a split flow

1. Name and email, with an **escape hatch to log in** (many people land on sign-up by accident).
2. Email verification: block until verified, *or* remind gently and let them continue. Both are valid decisions.
3. Create a workspace and ask the team size. This answer shapes the next steps.
4. **Split:** a team gets "invite your team"; an individual skips straight to their setup.

## 3. Consistency builds trust (design systems)

- A design system isn't decoration. It's how users build trust and speed. macOS dialogs always make the safe, non-destructive action the primary button, so users trust it.
- Linear keeps buttons, spacing and text styles identical across wildly different contexts.
- It's not about having hundreds of components. **It's about making decisions you stick to.** Once spacing, type scale and colors are fixed, every new modal is easy and feels familiar.

## 4. Progressive disclosure

- Show what's needed now; reveal the rest when the user looks for it. Collapse advanced options by default.
- **Spectrum of explicitness:** always-visible labeled button → always-visible icon → icon on hover. Place each action according to its importance and frequency.
- **Onboarding is sequencing, not hiding:** one tooltip on the most important action, then the next, or a small checklist. Never a six-bullet modal on first login.
- Details and examples: `dashboards.md`.

## 5. Why the best software "lies": intent and assumptions

Interfaces constantly guess what the user means. Each technique costs time, certainty or trust; choose deliberately.

### Waiting to tell actions apart

- AirPods wait ~700ms after a tap to see whether a double or triple tap follows. A phone with three separate buttons responds in under 300ms.
- **Single click opens, double click edits** on the same item: you must wait to see if a second click comes. The convenience of the secondary action (rename inline) is worth the delay on the primary.
- **No delay is needed when the first action is correct either way:** clicking a table cell highlights it immediately, and a double click just goes further.

### Inferring intent (desire paths)

- Pave where people actually walk. Design for real behavior.
- **Submenu safe triangle:** when the cursor moves diagonally toward an open submenu, keep it open as long as the cursor stays inside the triangle toward the submenu and moves fast enough (Linear, Notion, Asana). Too slow means the user wants the item above.
- **Tooltip warm-up:** the first tooltip waits; adjacent ones then open instantly.
- **Hover-to-expand sidebars** open only when the cursor rests at the edge long enough (Notion).
- **Drag to reorder near an edge:** show where the item will land, and make the edge a speed gradient (the closer to the edge, the faster it scrolls) instead of a binary switch.

### Acting first, with a way back

- **Undo over confirm.** A confirmation modal makes 99% of users confirm what they meant, to protect the 1%. Delete immediately, then show a toast with **Undo**, or move the item to "Recently deleted" for 30 days.
- **Delayed commit:** Gmail says "sent" but waits ~5 seconds before sending, so Undo works.
- **Auto-save** replaced Save/Cancel in settings and editors; version history is the way back.
- **Optimistic UI:** remove or update instantly, assuming the server will succeed.
- **Keep the warning modal for truly irreversible, high-stakes actions:** sending money, emailing 10,000 people. On mobile, a swipe-to-confirm works too.

### Letting the user say how sure they are

- **Buttons commit on release:** press, then drag away to cancel. Every button has a built-in cancel.
- **Menu buttons open on press**, so the user can press, drag and release on an item in one motion. They're toggles, not buttons.
- **Pull to refresh, swipe to delete, Cmd-Tab:** the screen shows how close you are to committing, and you can reverse until you let go.

## 6. AI product patterns

For prompt-based and AI products, these components separate good from generic:

| Component | What makes it good |
|---|---|
| **Prompt box first** | Lead with a large input; users try the tool immediately (ChatGPT and Gemini skip the landing page). Preview attached PDFs/images, collapse pasted code into a block, offer context chips (modes like brainstorm/data/email, add code context), integrations (Drive, GitHub, Figma), and progressive disclosure (advanced mode, token-cost estimate) |
| **Fast, fluid loaders** | Short, looping indicators (Notion AI's bouncing dots, Claude's rotating star) |
| **Generation history** | Retrievability: a snippet preview of each run, delete, and **search**. A workspace, not a wastebasket |
| **Memory** | If the AI remembers, show it and let users control it: storage used, bulk delete, add key facts |
| **Inline editing** | Highlight part of a response and say what to change; a few quick actions and shortcuts (Claude, Lex, Notion AI) |
| **Show the work** | A research trail of steps, sources and quotes, revealed one by one (Perplexity). The AI feels like a collaborator, not a black box |
| **Streaming and skeletons** | Stream output word by word; show shimmer placeholders where content will land, then slot it in exactly |
| **Confidence indicators** | A pill under the answer ("High confidence" / "Unverified"), with the number on click |
| **Dark soft glass** | Transparent rectangle, subtle gradient, background blur, 1px border, soft inner shadow, gentle shimmer on the border. It's everywhere, so use it with intent (see `vibe-coding-tells.md`) |
