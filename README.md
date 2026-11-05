# master-design-web

A personal Claude Code skill for designing and reviewing websites and apps: landing pages, dashboards, web apps, mobile apps and components.

## Install

```bash
git clone https://github.com/MasterKPG/master-design-web.git ~/.claude/skills/master-design-web
```

Restart Claude Code and check that `master-design-web` appears under `/skills`. It triggers on UI design, build, redesign and review tasks, or you can call it directly with `/master-design-web`.

## Built with this skill

Each example below was made from a single prompt. They're grouped by the release of the skill they were built with.

### [v1](https://github.com/MasterKPG/master-design-web/releases/tag/v1)

#### "build me a landing page for a restaurant software"

**[See the live page →](https://masterkpg.github.io/master-design-web/restaurant-software-example/)** · [source](restaurant-software-example/)

#### "build me a landing page for a web design agency. use one font only."

**[See the live page →](https://masterkpg.github.io/master-design-web/web-design-agency-example/)** · [source](web-design-agency-example/)

### [v2](https://github.com/MasterKPG/master-design-web/releases/tag/v2)

#### "Build a de-slopify web design agency landing page"

**[See the live page →](https://masterkpg.github.io/master-design-web/de-slopify-agency-example/)** · [source](de-slopify-agency-example/)

#### "build me a landing page for a sports/luxury car renting agency [...] Mood should be quiet luxury and sporty luxurious feeling, quiet and subtle wealth."

**[See the live page →](https://masterkpg.github.io/master-design-web/luxury-car-rental-example/)** · [source](luxury-car-rental-example/)

### [v3](https://github.com/MasterKPG/master-design-web/releases/tag/v3)

#### "Build a landing page for a finance law firm in new york."

**[See the live page →](https://masterkpg.github.io/master-design-web/finance-law-firm-example/)** · [source](finance-law-firm-example/)

#### "build me a cartoon/comics making studio landing page."

**[See the live page →](https://masterkpg.github.io/master-design-web/cartoon-studio-example/)** · [source](cartoon-studio-example/)

## Structure

```
SKILL.md                 process, core principles, checklist, file index
guidelines/              detailed rules (hierarchy, layout, type, color, dark mode,
                         shadows/overlays, icons/states, motion, hero scroll
                         motion, design directions, social proof, nav and footers,
                         pricing, components,
                         accessibility, identity workflow, landing pages,
                         dashboards, mobile apps, UX thinking, vibe-coding tells,
                         presenting designs)
examples/                reference screenshots and notes (the Figma files and
                         video transcripts stay local, see .gitignore)
design-notes.txt         the original notes the skill was written from
CLAUDE.md                how to maintain the skill
```
