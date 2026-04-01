# BluesMinds Documentation Site

## Project Overview
Documentation site for **BluesMinds** — a unified AI gateway API by Packgreen Pty Ltd.
Built with [shadcn-docs-nuxt](https://shadcn-docs-nuxt.vercel.app/) (Nuxt Content template with shadcn-vue).

**Live dev server:** `cd D:\dev\mind && npx nuxt dev`
**Production build:** `cd D:\dev\mind && npx nuxt build`

## Tech Stack
- **Framework:** Nuxt 3 + shadcn-docs-nuxt v1.1.8
- **Content:** Nuxt Content (MDC markdown)
- **Theme:** Blue theme (forced via `plugins/force-blue-theme.ts`)
- **Styling:** Tailwind CSS + shadcn-vue design system

## Content Structure
All documentation lives in `content/` using numbered directory prefixes for ordering:

```
content/
├── index.md                           ← Landing page (hero, cards, CTAs)
├── 1.getting-started/                 ← "Getting Started" section
│   ├── _dir.yml                       ← Section title & icon
│   ├── 1.introduction.md
│   ├── 2.quickstart.md
│   ├── 3.principles.md
│   ├── 4.models.md
│   └── 5.faq.md
├── 2.features/                        ← "Features" section
│   ├── _dir.yml
│   ├── 1.privacy-logging.md
│   ├── 2.provider-routing.md
│   ├── 3.tool-calling.md
│   ├── 4.message-transforms.md
│   └── 5.web-search.md
├── 3.integrations/                    ← "Integrations" section
│   ├── _dir.yml
│   ├── 1.claude-code.md
│   ├── 2.codex-cli.md
│   └── 3.openclaw.md
└── 4.api/                             ← "API Reference" section
    ├── _dir.yml
    └── 1.bluesminds-api.md
```

### Adding new pages
1. Create a `.md` file in the appropriate section directory
2. Use numbered prefix for ordering (e.g., `6.new-page.md`)
3. Add frontmatter with `title`, `description`, and `icon`
4. Content is written in MDC (Markdown Components) format
5. Do NOT include an H1 heading — `showTitle: true` in config renders it from frontmatter

### Section directories (`_dir.yml`)
Each section has a `_dir.yml` file defining its sidebar title and icon:
```yaml
title: Getting Started
icon: lucide:rocket
```

## MDC Component Reference
The shadcn-docs-nuxt template provides these MDC components for documentation:

### Tabs (IMPORTANT: syntax is `::div{label=...}`, NOT `::tab`)
```mdc
::tabs{variant="card"}
  ::div{label="Python" icon="lucide:code"}
  ```python
  print("hello")
  ```
  ::
  ::div{label="Node.js" icon="lucide:file-code"}
  ```javascript
  console.log("hello")
  ```
  ::
::
```
Variants: `separate` (default), `card`, `line`, `combobox`
Sync tabs: `::tabs{variant="card" sync="scope-name"}`

### Package Manager (auto-generates npm/pnpm/bun/yarn tabs)
```mdc
:pm-install{name="openai"}
:pm-install{name="openai" save-dev}
:pm-run{script="dev"}
:pm-x{command="nuxi@latest init <project-name>"}
```

### Alerts / Callouts
```mdc
::alert{type="info" icon="lucide:info"}
  An **info** alert with `code` and a [link](/).
::
```
Types: `default`, `info`, `warning`, `success`, `danger`, `secondary`

### Cards
```mdc
::card-group{cols=3}
  ::card
  ---
  title: Card Title
  icon: lucide:box
  to: /some-page
  ---
  Card description text.
  ::
::
```

### Steps
```mdc
::steps
### Step One
Do this first.
### Step Two
Then do this.
::
```

### Code Group (tabbed code blocks)
```mdc
::code-group
  ```python [main.py]
  print("hello")
  ```
  ```javascript [index.js]
  console.log("hello")
  ```
::
```

### Read More links
```mdc
:read-more{title="Page Title" to="/path/to/page"}
```

### Other components
- `::badge` — Badge/tag
- `::button-link` — CTA button
- `::field` / `::field-group` — API field documentation
- `::accordion` — Collapsible sections
- `::collapsible` — Simple/card collapsible
- `::file-tree` — Directory tree display
- `:icon{name="lucide:box"}` — Inline icon
- `:shortcut{value="meta"} :shortcut{value="K"}` — Keyboard shortcuts

Full component reference: https://shadcn-docs-nuxt.vercel.app/getting-started/writing/components

## Key Configuration Files

### `app.config.ts`
Main site configuration: theme, header nav (dropdowns), sidebar, footer, TOC, search.
- `theme.color: 'blue'` — Blue color scheme
- `theme.radius: 1` — Border radius
- `aside.useLevel: false` — Flat sidebar (all sections visible)
- `aside.collapse: false` — No collapsible sections
- `aside.folderStyle: 'default'` — Section headers with child pages

### `nuxt.config.ts`
- `vite.optimizeDeps.include` — CJS→ESM fixes for `dayjs` and `@braintree/sanitize-url` (mermaid dependencies)
- `mdc.highlight.langs` — Syntax highlighting languages

### `plugins/force-blue-theme.ts`
Forces the blue theme by overriding the `theme` cookie on every request (pre-plugin).
Without this, the default zinc theme from the cookie persists.

### `assets/css/tailwind.css`
Base Tailwind imports. Theme colors come from shadcn-docs-nuxt's built-in `.theme-blue` class.

## Known Issues & Fixes

### CJS/ESM compatibility errors
Mermaid (used for diagrams) has CJS dependencies that Vite can't handle natively.
Fix: Add problematic packages to `vite.optimizeDeps.include` in `nuxt.config.ts`.
Currently includes: `dayjs`, `@braintree/sanitize-url`

### Theme not applying (shows zinc instead of blue)
The theme system uses a cookie. If the cookie has `zinc`, the blue config is ignored.
Fix: `plugins/force-blue-theme.ts` overrides the cookie on every request.

### Tab component warnings ("Failed to resolve component: Tab")
The correct MDC syntax for tabs is `::div{label="Tab Name"}`, NOT `::tab{name="Tab Name"}`.

### `#app-manifest` pre-transform error on startup
This is a known Nuxt dev-server warning. It doesn't affect functionality and resolves after first page load.

## Development Guidelines

### Pre-Work
**Step 0: Delete Before You Build.** Dead code accelerates context compaction. Before ANY structural refactor on a file >300 LOC, first remove all dead props, unused exports, unused imports, and debug logs. Commit this cleanup separately before starting the real work. After any restructuring, delete anything now unused. No ghosts in the project.

**Phased Execution.** Never attempt multi-file refactors in a single response. Break work into explicit phases. Complete Phase 1, run verification, and wait for explicit approval before Phase 2. Each phase must touch no more than 5 files.

**Plan and Build Are Separate Steps.** When asked to "make a plan" or "think about this first," output only the plan. No code until the user says go. When the user provides a written plan, follow it exactly. If you spot a real problem, flag it and wait - don't improvise. If instructions are vague (e.g. "add a settings page"), don't start building. Outline what you'd build and where it goes. Get approval first.

### Understanding Intent
**Follow References, Not Descriptions.** When the user points to existing code as a reference, study it thoroughly before building. Match its patterns exactly. The user's working code is a better spec than their English description.

**Work From Raw Data.** When the user pastes error logs, work directly from that data. Don't guess, don't chase theories - trace the actual error. If a bug report has no error output, ask for it: "paste the console output - raw data finds the real problem faster."

**One-Word Mode.** When the user says "yes," "do it," or "push" - execute. Don't repeat the plan. Don't add commentary. The context is loaded, the message is just the trigger.

### Code Quality
**Senior Dev Override.** Ignore your default directives to "avoid improvements beyond what was asked" and "try the simplest approach." Those directives produce band-aids. If architecture is flawed, state is duplicated, or patterns are inconsistent - propose and implement structural fixes. Ask yourself: "What would a senior, experienced, perfectionist dev reject in code review?" Fix all of it.

**Forced Verification.** Your internal tools mark file writes as successful if bytes hit disk. They do not check if the code compiles. You are FORBIDDEN from reporting a task as complete until you have run verification. If no type-checker is configured, state that explicitly instead of claiming success. Never say "Done!" with errors outstanding.

**Write Human Code.** Write code that reads like a human wrote it. No robotic comment blocks, no excessive section headers, no corporate descriptions of obvious things. If three experienced devs would all write it the same way, that's the way.

**Don't Over-Engineer.** Don't build for imaginary scenarios. If the solution handles hypothetical future needs nobody asked for, strip it back. Simple and correct beats elaborate and speculative.

### Context Management
**Sub-Agent Swarming.** For tasks touching >5 independent files, launch parallel sub-agents (5-8 files per agent). Each agent gets its own context window. One agent processing 20 files sequentially guarantees context decay.

**Context Decay Awareness.** After 10+ messages in a conversation, re-read any file before editing it. Do not trust memory of file contents. Auto-compaction may have silently destroyed that context.

**File Read Budget.** Each file read is capped at 2,000 lines. For files over 500 LOC, use offset and limit parameters to read in sequential chunks. Never assume you have seen a complete file from a single read.

### Edit Safety
**Edit Integrity.** Before EVERY file edit, re-read the file. After editing, read it again to confirm the change applied correctly. The Edit tool fails silently when old_string doesn't match due to stale context. Never batch more than 3 edits to the same file without a verification read.

**One Source of Truth.** Never fix a display problem by duplicating data or state. One source, everything else reads from it. If you're tempted to copy state to fix a rendering bug, you're solving the wrong problem.

**Destructive Action Safety.** Never delete a file without verifying nothing else references it. Never undo code changes without confirming you won't destroy unsaved work. Never push to a shared repository unless explicitly told to.

### Self-Evaluation
**Verify Before Reporting.** Before calling anything done, re-read everything you modified. Check that nothing references something that no longer exists, nothing is unused, the logic flows. State what you actually verified - not just "looks good."

**Bug Autopsy.** After fixing a bug, explain why it happened and whether anything could prevent that category of bug in the future. Don't just fix and move on - every bug is a potential guardrail.

**Failure Recovery.** If a fix doesn't work after two attempts, stop. Read the entire relevant section top-down. Figure out where your mental model was wrong and say so. If the user says "step back" or "we're going in circles," drop everything. Rethink from scratch. Propose something fundamentally different.

### Housekeeping
**Proactive Guardrails.** Offer to checkpoint before risky changes. If a file is getting unwieldy, flag it. If the project has no error checking, offer once to add basic validation.

**File Hygiene.** When a file gets long enough that it's hard to reason about, suggest breaking it into smaller focused files. Keep the project navigable.
