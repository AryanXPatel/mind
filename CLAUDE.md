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
