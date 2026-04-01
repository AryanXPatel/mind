# BluesMinds Docs Restructure — Quick Start First

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restructure the docs site so users land on their coding tool, copy 2 commands, and are running in 30 seconds. Add 7 new tool pages, a combined Models & Pricing page, and reorganize the sidebar to put Quick Start first.

**Architecture:** The content directory gets renumbered: `1.quick-start/` (tool pages + API quickstart), `2.about/` (intro, models-pricing, principles, faq), `3.features/` (unchanged), `4.api/` (unchanged). The old `3.integrations/` section is deleted — its content migrates into Quick Start. Header nav in `app.config.ts` is rebuilt to match.

**Tech Stack:** Nuxt 3, shadcn-docs-nuxt (MDC markdown), Nuxt Content

---

## Phase 1: Restructure Sidebar & Sections

### Task 1: Create new directory structure

**Files:**
- Create: `content/1.quick-start/_dir.yml`
- Create: `content/2.about/_dir.yml`

**Step 1: Create Quick Start section directory config**

Create `content/1.quick-start/_dir.yml`:
```yaml
title: Quick Start
icon: lucide:rocket
```

**Step 2: Create About section directory config**

Create `content/2.about/_dir.yml`:
```yaml
title: About
icon: lucide:book-open
```

**Step 3: Verify directories exist**

Run: `ls D:\dev\mind\content\`
Expected: Both new directories visible alongside existing ones.

---

### Task 2: Move existing pages to new locations

**Files:**
- Move: `content/1.getting-started/1.introduction.md` → `content/2.about/1.introduction.md`
- Move: `content/1.getting-started/3.principles.md` → `content/2.about/3.principles.md`
- Move: `content/1.getting-started/5.faq.md` → `content/2.about/4.faq.md`
- Move: `content/1.getting-started/2.quickstart.md` → `content/1.quick-start/1.api-quickstart.md`
- Move: `content/3.integrations/1.claude-code.md` → `content/1.quick-start/2.claude-code.md`
- Move: `content/3.integrations/2.codex-cli.md` → `content/1.quick-start/3.codex-cli.md`
- Move: `content/3.integrations/3.openclaw.md` → `content/1.quick-start/11.openclaw.md` (last in list)
- Move: `content/1.getting-started/4.models.md` → will be replaced by new models-and-pricing page
- Delete: `content/1.getting-started/` (entire old directory)
- Delete: `content/3.integrations/` (entire old directory)

**Step 1: Move files**

```bash
# Create new dirs
mkdir -p "D:\dev\mind\content\1.quick-start"
mkdir -p "D:\dev\mind\content\2.about"

# Move to About
mv "D:\dev\mind\content\1.getting-started\1.introduction.md" "D:\dev\mind\content\2.about\1.introduction.md"
mv "D:\dev\mind\content\1.getting-started\3.principles.md" "D:\dev\mind\content\2.about\3.principles.md"
mv "D:\dev\mind\content\1.getting-started\5.faq.md" "D:\dev\mind\content\2.about\4.faq.md"

# Move Quickstart to Quick Start as API Quickstart
mv "D:\dev\mind\content\1.getting-started\2.quickstart.md" "D:\dev\mind\content\1.quick-start\1.api-quickstart.md"

# Move integrations to Quick Start
mv "D:\dev\mind\content\3.integrations\1.claude-code.md" "D:\dev\mind\content\1.quick-start\2.claude-code.md"
mv "D:\dev\mind\content\3.integrations\2.codex-cli.md" "D:\dev\mind\content\1.quick-start\3.codex-cli.md"
mv "D:\dev\mind\content\3.integrations\3.openclaw.md" "D:\dev\mind\content\1.quick-start\11.openclaw.md"
```

**Step 2: Clean up old directories**

```bash
rm -rf "D:\dev\mind\content\1.getting-started"
rm -rf "D:\dev\mind\content\3.integrations"
```

**Step 3: Renumber features from 3 to 3 (stays same) and api from 4 to 4 (stays same)**

Features and API keep their numbers. No rename needed.

**Step 4: Verify structure**

Run: `find D:\dev\mind\content -type f -name "*.md" | sort`
Expected: New structure with `1.quick-start/`, `2.about/`, `3.features/`, `4.api/`

---

### Task 3: Update moved page frontmatter and content

**Files:**
- Modify: `content/1.quick-start/1.api-quickstart.md`
- Modify: `content/2.about/1.introduction.md`

**Step 1: Update API Quickstart page**

Change title from "Quickstart" to "API Quickstart" and add a callout at the top redirecting tool users:

```markdown
---
title: API Quickstart
description: Get your first BluesMinds API call running in under 2 minutes.
icon: lucide:zap
---

::alert{type="info" icon="lucide:lightbulb"}
**Using a coding tool?** Skip straight to your tool's guide:
[Claude Code](/quick-start/claude-code) · [Codex CLI](/quick-start/codex-cli) · [Gemini CLI](/quick-start/gemini-cli) · [Cursor](/quick-start/cursor) · [Continue.dev](/quick-start/continue-dev)
::

Get up and running with the BluesMinds API in under 2 minutes.
```

Keep the rest of the existing content (Setup, Make Your First Call, Streaming, Coding Tools table, Next Steps) but update the Next Steps links to new paths:

```markdown
## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Tool Calling" to="/features/tool-calling"}
:read-more{title="Provider Routing" to="/features/provider-routing"}
```

**Step 2: Update Introduction page links**

In `content/2.about/1.introduction.md`, update the "Getting Started" steps and "Quick Links" table to point to new paths:
- Quickstart → `/quick-start/api-quickstart`
- Models → `/about/models-and-pricing`
- FAQ → `/about/faq`

---

### Task 4: Update app.config.ts navigation

**Files:**
- Modify: `app.config.ts`

**Step 1: Rewrite the header nav array**

Replace the entire `nav` array in `app.config.ts` with:

```typescript
nav: [
  {
    title: 'Quick Start',
    links: [
      {
        title: 'API Quickstart',
        to: '/quick-start/api-quickstart',
        description: 'Make your first API call in 2 minutes',
        icon: 'lucide:zap',
      },
      {
        title: 'Claude Code',
        to: '/quick-start/claude-code',
        description: 'Use Claude Code via BluesMinds',
        icon: 'lucide:terminal',
      },
      {
        title: 'Codex CLI',
        to: '/quick-start/codex-cli',
        description: 'OpenAI Codex CLI integration',
        icon: 'lucide:square-terminal',
      },
      {
        title: 'Gemini CLI',
        to: '/quick-start/gemini-cli',
        description: 'Google Gemini CLI integration',
        icon: 'lucide:sparkles',
      },
      {
        title: 'Cursor',
        to: '/quick-start/cursor',
        description: 'AI code editor setup',
        icon: 'lucide:mouse-pointer',
      },
      {
        title: 'More Tools...',
        to: '/quick-start/continue-dev',
        description: 'Continue.dev, RooCode, Kilocode, and more',
        icon: 'lucide:plus',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        title: 'Introduction',
        to: '/about/introduction',
        description: 'Overview of BluesMinds API gateway',
        icon: 'lucide:info',
      },
      {
        title: 'Models & Pricing',
        to: '/about/models-and-pricing',
        description: 'Plans, models, RPM limits, and costs',
        icon: 'lucide:cpu',
      },
      {
        title: 'Principles',
        to: '/about/principles',
        description: 'Core design principles behind the API',
        icon: 'lucide:compass',
      },
      {
        title: 'FAQ',
        to: '/about/faq',
        description: 'Common questions and troubleshooting',
        icon: 'lucide:help-circle',
      },
    ],
  },
  {
    title: 'Features',
    links: [
      {
        title: 'Provider Routing',
        to: '/features/provider-routing',
        description: 'Automatic failover and load balancing',
        icon: 'lucide:route',
      },
      {
        title: 'Tool Calling',
        to: '/features/tool-calling',
        description: 'OpenAI-compatible function calling',
        icon: 'lucide:wrench',
      },
      {
        title: 'Message Transforms',
        to: '/features/message-transforms',
        description: 'Auto-convert between API formats',
        icon: 'lucide:repeat',
      },
      {
        title: 'Privacy & Logging',
        to: '/features/privacy-logging',
        description: 'Data handling and security controls',
        icon: 'lucide:shield',
      },
      {
        title: 'Web Search',
        to: '/features/web-search',
        description: 'Real-time web search in LLM responses',
        icon: 'lucide:search',
      },
    ],
  },
  {
    title: 'API Reference',
    to: '/api/bluesminds-api',
    showLinkIcon: false,
  },
],
```

**Step 2: Verify dev server starts**

Run: `cd D:\dev\mind && npx nuxt dev`
Expected: No build errors. Sidebar shows new structure.

**Step 3: Commit Phase 1**

```bash
git add -A
git commit -m "restructure: move to Quick Start first sidebar layout"
```

---

## Phase 2: Create New Quick Start Tool Pages

All tool pages follow the same template. Each has: paid-plan warning, prerequisites, env vars (Linux/macOS + Windows tabs), run command, persistent config, model selection, troubleshooting.

### Task 5: Enhance Claude Code page (already exists, needs OS tabs + paid warning)

**Files:**
- Modify: `content/1.quick-start/2.claude-code.md`

**Full rewrite:**

```markdown
---
title: Claude Code
description: Use Claude Code with BluesMinds — automatic failover, unified billing, 100+ models.
icon: lucide:terminal
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher. Free accounts cannot use Claude Code.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install Claude Code

:pm-install{name="-g @anthropic-ai/claude-code"}

## Set Environment Variables

::tabs{variant="card"}
  ::div{label="Linux / macOS" icon="lucide:terminal"}
  ```bash
  export ANTHROPIC_BASE_URL=https://api.bluesminds.com/
  export ANTHROPIC_API_KEY=sk-your-bluesminds-key
  ```
  ::

  ::div{label="Windows PowerShell" icon="lucide:terminal"}
  ```powershell
  $env:ANTHROPIC_BASE_URL = "https://api.bluesminds.com/"
  $env:ANTHROPIC_API_KEY = "sk-your-bluesminds-key"
  ```
  ::
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Run It

```bash
claude
```

That's it. Claude Code is now routing through BluesMinds.

## Persistent Configuration (Optional)

::tabs{variant="card"}
  ::div{label="bash / zsh" icon="lucide:terminal"}
  ```bash
  echo 'export ANTHROPIC_BASE_URL=https://api.bluesminds.com/' >> ~/.bashrc
  echo 'export ANTHROPIC_API_KEY=sk-your-bluesminds-key' >> ~/.bashrc
  source ~/.bashrc
  ```
  ::

  ::div{label="PowerShell Profile" icon="lucide:terminal"}
  ```powershell
  Add-Content $PROFILE "`n`$env:ANTHROPIC_BASE_URL = 'https://api.bluesminds.com/'"
  Add-Content $PROFILE "`$env:ANTHROPIC_API_KEY = 'sk-your-bluesminds-key'"
  ```
  Then restart your terminal.
  ::
::

## Model Selection

```bash
claude --model claude-sonnet-4-5
```

| Model | Best For | Context |
|-------|----------|---------|
| `claude-sonnet-4-5` | Balanced quality/speed **(recommended)** | 200k |
| `claude-opus-4-5` | Complex tasks, deep reasoning | 200k |
| `claude-haiku-3-5` | Fastest, most cost-efficient | 200k |

## Why Route Through BluesMinds?

::card-group{cols=2}
  ::card
  ---
  title: Automatic Failover
  icon: lucide:refresh-cw
  ---
  If the primary Anthropic channel is degraded, BluesMinds routes to an alternate provider automatically.
  ::

  ::card
  ---
  title: Rate-Limit Distribution
  icon: lucide:gauge
  ---
  Spread requests across multiple channels to avoid hitting per-provider rate limits.
  ::

  ::card
  ---
  title: Unified Billing
  icon: lucide:credit-card
  ---
  One bill for all models across all providers — no juggling multiple accounts.
  ::

  ::card
  ---
  title: Privacy Controls
  icon: lucide:lock
  ---
  Request bodies are not stored by default. Full control over logging and data retention.
  ::
::

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Verify key starts with `sk-`; run `echo $ANTHROPIC_API_KEY` to check |
| `Connection refused` | Ensure no trailing path after the base URL |
| Wrong model | Restart Claude Code after changing env vars (it caches the base URL) |
| Older versions | May need `ANTHROPIC_AUTH_TOKEN` in addition to `ANTHROPIC_API_KEY` |

**Connectivity check:**

```bash
curl https://api.bluesminds.com//models \
  -H "Authorization: Bearer sk-your-key"
```

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Codex CLI Setup" to="/quick-start/codex-cli"}
:read-more{title="API Quickstart" to="/quick-start/api-quickstart"}
```

---

### Task 6: Enhance Codex CLI page

**Files:**
- Modify: `content/1.quick-start/3.codex-cli.md`

**Full rewrite** following same template as Claude Code but with OpenAI env vars:

```markdown
---
title: Codex CLI
description: Use OpenAI Codex CLI with BluesMinds for multi-provider access and failover.
icon: lucide:square-terminal
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher. Free accounts cannot use Codex CLI.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install Codex CLI

:pm-install{name="-g @openai/codex"}

## Set Environment Variables

::tabs{variant="card"}
  ::div{label="Linux / macOS" icon="lucide:terminal"}
  ```bash
  export OPENAI_BASE_URL=https://api.bluesminds.com/v1
  export OPENAI_API_KEY=sk-your-bluesminds-key
  ```
  ::

  ::div{label="Windows PowerShell" icon="lucide:terminal"}
  ```powershell
  $env:OPENAI_BASE_URL = "https://api.bluesminds.com/v1"
  $env:OPENAI_API_KEY = "sk-your-bluesminds-key"
  ```
  ::
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Run It

```bash
codex "describe your task here"
```

That's it. Codex CLI is now routing through BluesMinds.

## Persistent Configuration (Optional)

::tabs{variant="card"}
  ::div{label="bash / zsh" icon="lucide:terminal"}
  ```bash
  echo 'export OPENAI_BASE_URL=https://api.bluesminds.com/v1' >> ~/.bashrc
  echo 'export OPENAI_API_KEY=sk-your-bluesminds-key' >> ~/.bashrc
  source ~/.bashrc
  ```
  ::

  ::div{label="PowerShell Profile" icon="lucide:terminal"}
  ```powershell
  Add-Content $PROFILE "`n`$env:OPENAI_BASE_URL = 'https://api.bluesminds.com/v1'"
  Add-Content $PROFILE "`$env:OPENAI_API_KEY = 'sk-your-bluesminds-key'"
  ```
  Then restart your terminal.
  ::
::

## Model Selection

| Model | Best For |
|-------|----------|
| `gpt-4o` | General purpose, fast **(recommended)** |
| `gpt-4.1` | 1M token context window |
| `claude-sonnet-4-5` | Balanced quality, cross-provider |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Verify `OPENAI_API_KEY` starts with `sk-` |
| Model not found | Check available models with `GET /v1/models` |
| Slow responses | Try a faster model like `gpt-4o-mini` |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Claude Code Setup" to="/quick-start/claude-code"}
:read-more{title="API Quickstart" to="/quick-start/api-quickstart"}
```

---

### Task 7: Create Gemini CLI page (NEW)

**Files:**
- Create: `content/1.quick-start/4.gemini-cli.md`

```markdown
---
title: Gemini CLI
description: Use Google's Gemini CLI with BluesMinds for multi-provider access.
icon: lucide:sparkles
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install Gemini CLI

:pm-install{name="-g @anthropic-ai/claude-code"}

::alert{type="info" icon="lucide:info"}
Gemini CLI uses the same protocol as Claude Code. Install Claude Code, then configure it to use Gemini models via BluesMinds.
::

## Set Environment Variables

::tabs{variant="card"}
  ::div{label="Linux / macOS" icon="lucide:terminal"}
  ```bash
  export ANTHROPIC_BASE_URL=https://api.bluesminds.com/
  export ANTHROPIC_API_KEY=sk-your-bluesminds-key
  ```
  ::

  ::div{label="Windows PowerShell" icon="lucide:terminal"}
  ```powershell
  $env:ANTHROPIC_BASE_URL = "https://api.bluesminds.com/"
  $env:ANTHROPIC_API_KEY = "sk-your-bluesminds-key"
  ```
  ::
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Run It

```bash
claude --model gemini-2.0-flash
```

## Model Selection

| Model | Best For | Context |
|-------|----------|---------|
| `gemini-2.0-flash` | Fast, multimodal **(recommended)** | 1M |
| `gemini-2.5-pro` | Best quality reasoning | 1M |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Verify key starts with `sk-` |
| Model not found | Ensure your plan supports this model |
| Slow responses | Try `gemini-2.0-flash` for speed |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Claude Code Setup" to="/quick-start/claude-code"}
```

---

### Task 8: Create Cursor page (NEW)

**Files:**
- Create: `content/1.quick-start/5.cursor.md`

```markdown
---
title: Cursor
description: Use Cursor AI editor with BluesMinds for 100+ models through one key.
icon: lucide:mouse-pointer
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Configure Cursor

::steps
### Open Cursor Settings

Go to **Settings** → **Models** → **OpenAI API Key**

### Set the API Key

Enter your BluesMinds key:
```
sk-your-bluesminds-key
```

### Set the Base URL

Override the base URL:
```
https://api.bluesminds.com/v1
```

### Choose a Model

Select or type a model ID, e.g. `gpt-4o` or `claude-sonnet-4-5`.
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Recommended Models

| Model | Best For |
|-------|----------|
| `gpt-4o` | Fast general purpose **(recommended)** |
| `claude-sonnet-4-5` | High quality code generation |
| `deepseek-chat` | Cost-efficient coding |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Re-enter your API key in settings |
| Model not found | Check available models with `GET /v1/models` |
| No completions | Ensure base URL ends with `/v1` |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="API Quickstart" to="/quick-start/api-quickstart"}
```

---

### Task 9: Create Continue.dev page (NEW)

**Files:**
- Create: `content/1.quick-start/6.continue-dev.md`

```markdown
---
title: Continue.dev
description: Use Continue.dev VS Code extension with BluesMinds for multi-provider AI.
icon: lucide:puzzle
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install Continue.dev

Install the [Continue extension](https://marketplace.visualstudio.com/items?itemName=Continue.continue) from the VS Code marketplace.

## Configure

Edit your Continue config file (`~/.continue/config.json`):

```json
{
  "models": [
    {
      "title": "BluesMinds - GPT-4o",
      "provider": "openai",
      "model": "gpt-4o",
      "apiBase": "https://api.bluesminds.com/v1",
      "apiKey": "sk-your-bluesminds-key"
    }
  ]
}
```

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Recommended Models

| Model | Best For |
|-------|----------|
| `gpt-4o` | Fast general purpose **(recommended)** |
| `claude-sonnet-4-5` | High quality code generation |
| `gemini-2.0-flash` | Fast, large context |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No completions | Check `apiBase` ends with `/v1` |
| Auth errors | Verify `apiKey` in config.json |
| Wrong model | Ensure model ID matches `GET /v1/models` |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Cursor Setup" to="/quick-start/cursor"}
```

---

### Task 10: Create RooCode page (NEW)

**Files:**
- Create: `content/1.quick-start/7.roocode.md`

```markdown
---
title: RooCode
description: Use RooCode with BluesMinds for AI-assisted coding with 100+ models.
icon: lucide:code
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install RooCode

Install the [RooCode extension](https://marketplace.visualstudio.com/items?itemName=RooVetGit.roo-cline) from the VS Code marketplace.

## Configure

::steps
### Open RooCode Settings

Click the RooCode icon in the sidebar → **Settings** (gear icon)

### Select API Provider

Choose **OpenAI Compatible** as the provider.

### Enter API Details

- **Base URL:** `https://api.bluesminds.com/v1`
- **API Key:** `sk-your-bluesminds-key`
- **Model:** `claude-sonnet-4-5` (or any model from `/v1/models`)
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Recommended Models

| Model | Best For |
|-------|----------|
| `claude-sonnet-4-5` | Balanced quality/speed **(recommended)** |
| `gpt-4o` | Fast general purpose |
| `deepseek-chat` | Cost-efficient |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection error | Verify base URL is `https://api.bluesminds.com/v1` |
| Auth failed | Re-enter API key in settings |
| Model not found | Check available models with `GET /v1/models` |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Kilocode Setup" to="/quick-start/kilocode"}
```

---

### Task 11: Create Kilocode page (NEW)

**Files:**
- Create: `content/1.quick-start/8.kilocode.md`

```markdown
---
title: Kilocode
description: Use Kilocode with BluesMinds for AI-powered development.
icon: lucide:zap
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Install Kilocode

Install the [Kilocode extension](https://marketplace.visualstudio.com/items?itemName=kilocode.kilocode) from the VS Code marketplace.

## Configure

::steps
### Open Kilocode Settings

Click the Kilocode icon in the sidebar → **Settings**

### Select API Provider

Choose **OpenAI Compatible** as the provider.

### Enter API Details

- **Base URL:** `https://api.bluesminds.com/v1`
- **API Key:** `sk-your-bluesminds-key`
- **Model:** `gpt-4o` (or any model from `/v1/models`)
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Recommended Models

| Model | Best For |
|-------|----------|
| `gpt-4o` | Fast general purpose **(recommended)** |
| `claude-sonnet-4-5` | High quality code generation |
| `deepseek-chat` | Cost-efficient |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection error | Verify base URL ends with `/v1` |
| Auth failed | Re-enter API key in settings |
| No completions | Ensure model ID is valid |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="RooCode Setup" to="/quick-start/roocode"}
```

---

### Task 12: Create Qwen Code page (NEW)

**Files:**
- Create: `content/1.quick-start/9.qwen-code.md`

```markdown
---
title: Qwen Code
description: Use Qwen Code with BluesMinds for Alibaba's AI coding assistant.
icon: lucide:bot
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Set Environment Variables

::tabs{variant="card"}
  ::div{label="Linux / macOS" icon="lucide:terminal"}
  ```bash
  export OPENAI_BASE_URL=https://api.bluesminds.com/v1
  export OPENAI_API_KEY=sk-your-bluesminds-key
  ```
  ::

  ::div{label="Windows PowerShell" icon="lucide:terminal"}
  ```powershell
  $env:OPENAI_BASE_URL = "https://api.bluesminds.com/v1"
  $env:OPENAI_API_KEY = "sk-your-bluesminds-key"
  ```
  ::
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Run It

```bash
qwen
```

## Recommended Models

| Model | Best For |
|-------|----------|
| `gpt-4o` | General purpose **(recommended)** |
| `claude-sonnet-4-5` | High quality code generation |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Verify `OPENAI_API_KEY` starts with `sk-` |
| Model not found | Check models with `GET /v1/models` |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Droid CLI Setup" to="/quick-start/droid-cli"}
```

---

### Task 13: Create Droid CLI page (NEW)

**Files:**
- Create: `content/1.quick-start/10.droid-cli.md`

```markdown
---
title: Droid CLI
description: Use Droid CLI with BluesMinds for terminal-based AI coding.
icon: lucide:smartphone
---

::alert{type="warning" icon="lucide:alert-triangle"}
**Paid plan required.** Coding tools need a Trial ($5/day) plan or higher.
[Get a plan →](https://api.bluesminds.com/console){target="_blank"}
::

## Set Environment Variables

::tabs{variant="card"}
  ::div{label="Linux / macOS" icon="lucide:terminal"}
  ```bash
  export ANTHROPIC_BASE_URL=https://api.bluesminds.com/
  export ANTHROPIC_API_KEY=sk-your-bluesminds-key
  ```
  ::

  ::div{label="Windows PowerShell" icon="lucide:terminal"}
  ```powershell
  $env:ANTHROPIC_BASE_URL = "https://api.bluesminds.com/"
  $env:ANTHROPIC_API_KEY = "sk-your-bluesminds-key"
  ```
  ::
::

::alert{type="info" icon="lucide:key"}
Get your API key at [api.bluesminds.com/console](https://api.bluesminds.com/console){target="_blank"} → **Tokens** → **Create New Token**.
::

## Run It

```bash
droid
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `401 Unauthorized` | Verify key starts with `sk-` |
| Connection error | Check base URL formatting |

## Next Steps

:read-more{title="Models & Pricing" to="/about/models-and-pricing"}
:read-more{title="Claude Code Setup" to="/quick-start/claude-code"}
```

---

### Task 14: Commit Phase 2

```bash
git add content/1.quick-start/
git commit -m "feat: add 7 new tool quickstart pages with OS tabs and paid-plan warnings"
```

---

## Phase 3: Create Models & Pricing Page

### Task 15: Create combined Models & Pricing page

**Files:**
- Create: `content/2.about/2.models-and-pricing.md`
- Delete: old `content/1.getting-started/4.models.md` (already moved/deleted in Phase 1)

```markdown
---
title: Models & Pricing
description: Plans, rate limits, available models, and pricing for BluesMinds.
icon: lucide:cpu
---

All 100+ models are accessible through every plan. Plans differ by **usage quotas**, **rate limits**, and **context window access**.

## Plans

| | Free | Trial ⚡ | 10-Day Pass | Unlimited | Enterprise |
|---|---|---|---|---|---|
| **Price** | $0 | $5 / 24hrs | $25 / 10 days | $60 / month | Custom |
| **Requests** | 300/day | Unlimited | Unlimited | Unlimited | Custom |
| **RPM** | 20 | 15 | 15 | 15 | Custom |
| **Model Access** | Limited subset | Good quality | Good quality | All available | All + priority |
| **Context Window** | ~50% | Full | Full | Full | Full |
| **Coding Tools** | ✕ | ✓ | ✓ | ✓ | ✓ |
| **Uptime SLA** | — | — | 90% | 90% | Custom |
| | [Start Free](https://api.bluesminds.com/console){target="_blank"} | [Buy](https://api.bluesminds.com/console){target="_blank"} | [Buy](https://api.bluesminds.com/console){target="_blank"} | [Buy](https://api.bluesminds.com/console){target="_blank"} | [Contact](https://t.me/apibluesminds){target="_blank"} |

::alert{type="info" icon="lucide:gift"}
**Free forever:** Every new account receives **500 pi credits** on signup. No credit card required. Credits never expire.
::

::alert{type="warning" icon="lucide:alert-triangle"}
**Coding tools** (Claude Code, Cursor, Codex CLI, etc.) require a **paid plan** (Trial or higher). Free accounts cannot use coding tools.
::

## RPM Add-Ons

Need more requests per minute? Purchase RPM add-ons:

::tabs{variant="card"}
  ::div{label="10-Day Pass" icon="lucide:zap"}
  | Extra RPM | Cost |
  |-----------|------|
  | +5 RPM | $5 |
  | +10 RPM | $5 per 5 |
  | +15 RPM | $4 per 5 |
  | +20+ RPM | $4 per 5 |
  ::

  ::div{label="Unlimited Plan" icon="lucide:infinity"}
  | Extra RPM | Cost |
  |-----------|------|
  | +5 RPM | $10 |
  | +10 RPM | $9 per 5 |
  | +15 RPM | $8 per 5 |
  | +20+ RPM | $7 per 5 |
  ::
::

## Popular Models

| Provider | Model | Best For | Context |
|----------|-------|----------|---------|
| OpenAI | `gpt-4o` | General purpose, fast | 128k |
| OpenAI | `gpt-4.1` | Huge context window | 1M |
| Anthropic | `claude-sonnet-4-5` | Balanced quality/speed | 200k |
| Anthropic | `claude-opus-4-5` | Complex reasoning | 200k |
| Google | `gemini-2.0-flash` | Fast, multimodal | 1M |
| Google | `gemini-2.5-pro` | Best quality | 1M |
| DeepSeek | `deepseek-chat` | Cost-efficient | 64k |
| DeepSeek | `deepseek-reasoner` | Reasoning chains | 64k |
| xAI | `grok-3` | Alternative reasoning | 128k |

::alert{type="info" icon="lucide:lightbulb"}
**Full model list:** Query the API for real-time availability:
```bash
curl https://api.bluesminds.com/v1/models \
  -H "Authorization: Bearer $BLUESMINDS_API_KEY"
```
::

## Pi Credits

- Every API request deducts credits based on the model used
- Live per-model rates at [api.bluesminds.com/pricing](https://api.bluesminds.com/pricing){target="_blank"}
- Free tier: 500 pi credits on signup, never expire
- Paid plans: quota depends on plan (see table above)

## Payment Methods

- Credit and debit cards
- Cryptocurrency
- Enterprise: custom invoicing via [Telegram](https://t.me/apibluesminds){target="_blank"}

## Next Steps

:read-more{title="API Quickstart" to="/quick-start/api-quickstart"}
:read-more{title="Provider Routing" to="/features/provider-routing"}
:read-more{title="FAQ" to="/about/faq"}
```

---

### Task 16: Commit Phase 3

```bash
git add content/2.about/2.models-and-pricing.md
git commit -m "feat: add combined Models & Pricing page with plan tiers and RPM add-ons"
```

---

## Phase 4: Update Cross-References & Landing Page

### Task 17: Update index.md (landing page)

**Files:**
- Modify: `content/index.md`

**Changes:**
- Update hero CTA links to new paths
- Update card links to new paths
- Update "Start in 30 seconds" section
- Add a "Pick Your Tool" section before the pricing cards

Replace relevant link targets:
- `/getting-started/quickstart` → `/quick-start/api-quickstart`
- `/getting-started/models` → `/about/models-and-pricing`
- `/features/provider-routing` → `/features/provider-routing` (unchanged)
- `/integrations/claude-code` → `/quick-start/claude-code`

Add new section after "Start in 30 seconds":

```markdown
## Pick Your Coding Tool

::card-group{cols=3}
  ::card
  ---
  title: Claude Code
  icon: lucide:terminal
  to: /quick-start/claude-code
  ---
  Set 2 env vars, run `claude`. Done in 30 seconds.
  ::

  ::card
  ---
  title: Cursor
  icon: lucide:mouse-pointer
  to: /quick-start/cursor
  ---
  Configure in Settings → Models. Any model, one key.
  ::

  ::card
  ---
  title: Codex CLI
  icon: lucide:square-terminal
  to: /quick-start/codex-cli
  ---
  Set 2 env vars, run `codex`. OpenAI-compatible.
  ::
::

:read-more{title="See all supported tools" to="/quick-start/api-quickstart"}
```

---

### Task 18: Update FAQ page internal links

**Files:**
- Modify: `content/2.about/4.faq.md`

Update internal link `/features/tool-calling` stays the same. No broken links expected since features paths didn't change.

---

### Task 19: Update Introduction page internal links

**Files:**
- Modify: `content/2.about/1.introduction.md`

Update Quick Links table targets:
- Quickstart → `/quick-start/api-quickstart`
- Models → `/about/models-and-pricing`
- FAQ → `/about/faq`
- API Reference → `/api/bluesminds-api` (unchanged)

---

### Task 20: Commit Phase 4

```bash
git add -A
git commit -m "fix: update all cross-references to new URL structure"
```

---

## Phase 5: Verify & Polish

### Task 21: Start dev server and verify all pages load

**Run:** `cd D:\dev\mind && npx nuxt dev`

**Check each page manually:**
- [ ] `/quick-start/api-quickstart` — loads, tabs work
- [ ] `/quick-start/claude-code` — loads, OS tabs work
- [ ] `/quick-start/codex-cli` — loads
- [ ] `/quick-start/gemini-cli` — loads
- [ ] `/quick-start/cursor` — loads
- [ ] `/quick-start/continue-dev` — loads
- [ ] `/quick-start/roocode` — loads
- [ ] `/quick-start/kilocode` — loads
- [ ] `/quick-start/qwen-code` — loads
- [ ] `/quick-start/droid-cli` — loads
- [ ] `/quick-start/openclaw` — loads
- [ ] `/about/introduction` — loads, links work
- [ ] `/about/models-and-pricing` — loads, tabs work
- [ ] `/about/principles` — loads
- [ ] `/about/faq` — loads
- [ ] `/features/*` — all 5 pages load
- [ ] `/api/bluesminds-api` — loads
- [ ] `/` — landing page, all cards link correctly
- [ ] Sidebar shows correct order: Quick Start → About → Features → API Reference
- [ ] Header dropdowns work

### Task 22: Fix any broken links or build errors

Address any issues found in Task 21.

### Task 23: Final commit

```bash
git add -A
git commit -m "docs: complete site restructure — Quick Start first with 10 tool pages"
```
