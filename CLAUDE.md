# master-design-web

This repo is the source of a personal Claude Code skill for designing websites and apps (landing pages, dashboards, web apps, mobile apps, components). The repo root *is* the skill folder: `SKILL.md` at the root, details in `guidelines/`, references in `examples/`.

## Installing / syncing

- The live copy Claude Code loads is `~/.claude/skills/master-design-web/`.
- To install on a machine: clone this repo into `~/.claude/skills/master-design-web`.
- If you edit here, copy the changed files to the live folder (or the other way round) and restart the session so the skill reloads. Keep the two in sync before committing.

## Source material

- `design-notes.txt`: the owner's original notes (raw chat text; ignore the "AM — 1:14" timestamps). The core of the skill.
- `examples/figma-examples/*.txt`: transcripts of the design videos the skill was built from. `examples/figma-examples/README.md` maps each one to the guideline it feeds.
- `examples/figma-examples/*.fig`: the matching Figma files. They're zip archives: `canvas.fig` is Figma's binary "fig-kiwi" format (chunk 0 = schema, deflate; chunk 1 = data, zstd; Python 3.14's `compression.zstd` decodes it). Readable strings give layer names, text, fonts and icons. Open them in Figma to see the actual designs.
- `examples/ai-telltales/`: the owner's lists of vibe-coding tells.

## Rules for editing the skill

1. **The owner's rules win.** Anything in `design-notes.txt`, or the owner's later answers, overrides the videos, other installed design skills and generic best practice. Where another source disagrees, keep the owner's rule and note the conflict; don't silently replace it.
2. **Preserve the owner's reasoning and concrete examples** (the McDonald's order card, Uber pins, rating star states, snowy-mountain overlay, restaurant landing page, hospital vs. disco palettes). They're what makes the guidelines useful.
3. **Guidelines, not laws.** Write rules as "default, and when to break it".
4. **Don't invent rules.** New guidance must come from the owner, the reference material, or cited research (WCAG, APCA, Apple HIG, Material). Put open questions in your reply to the owner, not in the skill.
5. **Write as instructions to a designer-developer:** short sections, bullets, "Do X because Y". English.
6. **Keep `SKILL.md` under ~150 lines.** It holds the process, the core principles, the checklist and the "when to read what" table. Detail goes in `guidelines/`. Every new guideline file must be added to that table.
7. **Examples are inspiration, never to be copied.** New examples follow the template in `examples/README.md`.
8. **Avoid the vibe-coding copy tells in the skill's own text** (em-dash rhythm, triplets, "not just X, it's Y"; see `guidelines/vibe-coding-tells.md`).

## Commits

Do not add `Co-Authored-By` trailers or any AI attribution to commit messages in this repo.
