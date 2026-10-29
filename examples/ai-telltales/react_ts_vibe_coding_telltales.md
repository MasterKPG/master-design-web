# Vibe Coding Telltales: Frontend Web App (React + TypeScript)

This document outlines the distinct physical, structural, and visual signs of "vibe coding"—software written entirely or primarily by prompting AI with minimal human review—specifically within modern React, TypeScript, and Tailwind CSS ecosystems.

---

## 🎨 Visual & UI Design "Slob"
AI-generated frontends suffer from a hyper-specific aesthetic vocabulary born from over-utilized layout templates and styling defaults.

* **Em dashes everywhere** — used excessively in UI copywriting, subheaders, feature lists, and placeholders to mimic an "intellectual" or polished tech brand tone.
* **The "vibe graphics" starter pack** — landing pages completely dominated by gradient text (`bg-clip-text text-transparent bg-gradient-to-r`), glowing backdrop blurs, neon borders, and floating emojis.
* **Component uniformity** — predictable, generic cards with identical border radiuses (`rounded-xl` or `rounded-2xl`) and shadow intensities across entirely different context blocks.
* **Shallow micro-interactions** — overkill interactive elements (like complex Framer Motion hover animations on meaningless divs) paired with zero keyboard navigation or accessibility (ARIA) support.

---

## 🛠️ Infrastructure & Platform Leftovers
Rapid AI builders leave obvious scaffolding footprint marks that a human engineer would instantly prune or customize before deployment.

* **Builder badges & assets** — unremoved footer badges, watermarks, or favicons linking back to AI generation platforms like Bolt.new or Lovable.dev.
* **Template metadata** — default Vite, Next.js, or Create React App HTML titles and meta descriptions left untouched in `index.html` or layout files.
* **Over-bundled icons** — importing dozens of different icons from `lucide-react` or `react-icons` into a single file because the model forgot what it used three prompts ago.

---

## ⚛️ React Component Anti-Patterns
When AI writes React, it optimizes for single-file context windows, creating architectural anomalies that hurt performance and maintainability.

* **The monolithic single-file app** — cramming 1,500 lines of UI code, sub-components, state hooks, and dummy data into a single `App.tsx` or `page.tsx` file because it is easier to prompt against.
* **State synchronization nightmares** — overusing `useEffect` to copy state values or trigger cascade updates that cause infinite re-render loops or flickering elements.
* **Inline local mock data** — huge arrays of hardcoded mock JSON objects declared directly inside the component body, recreating themselves on every single render pass.
* **Missing or broken key props** — using array indices (`key={index}`) for dynamic lists, or missing keys completely on nested mapping loops.

---

## 📘 TypeScript & Type-System Evasion
Models frequently struggle to reconcile strict typing with fluid functionality, leading to a sudden shift toward loose typing or extreme, defensive over-typing.

* **The `any` safety valve** — heavy reliance on `any` or `unknown` when dealing with API responses, event objects, or complex component prop contracts.
* **Type-casting bypasses** — regular usage of the non-null assertion operator (`object!.property`) and aggressive type casting (`as any`) to shut up compiler errors rather than fixing underlying type mismatches.
* **Redundant defensive typing** — models writing massive, multi-nested optional chaining chains (`data?.user?.profile?.settings?.theme`) on values that the codebase already guarantees to be defined.
* **Unused imports & ghost types** — type declarations or interfaces generated during early prompts left rotting at the top of files long after the logic requiring them was removed.
