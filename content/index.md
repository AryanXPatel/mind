---
title: Home
navigation: false
---

::hero
---
announcement:
  title: 'Free 500 credits on signup — no credit card required'
  icon: 'lucide:gift'
  to: https://api.bluesminds.com/console
  target: _blank
actions:
  - name: Get Started Free
    to: /quick-start/api-quickstart
  - name: View API Reference
    variant: outline
    to: /api/bluesminds-api
    leftIcon: 'lucide:code'
---

#title
One API. Every AI Model.

#description
Drop-in OpenAI-compatible gateway to 897+ LLMs from 19 providers. :br Automatic failover. Cost optimization. Privacy by default.
::

::card-group{cols=3}
  ::card
  ---
  title: 2-Minute Setup
  icon: lucide:zap
  to: /quick-start/api-quickstart
  ---
  Change one line of code. Your existing OpenAI SDK just works — Python, Node.js, cURL.
  ::

  ::card
  ---
  title: 897+ Models
  icon: lucide:cpu
  to: /about/models-and-pricing
  ---
  GPT-4o, Claude Sonnet, Gemini Flash, DeepSeek, Grok — 19 providers, one API key.
  ::

  ::card
  ---
  title: Zero Downtime
  icon: lucide:shield-check
  to: /features/provider-routing
  ---
  Automatic failover across providers. If OpenAI is down, your app stays up.
  ::
::

## Why developers choose BluesMinds

::card-group{cols=2}
  ::card
  ---
  title: OpenAI SDK Compatible
  icon: lucide:check-circle
  ---
  Just change `base_url`. Your existing code, libraries, and tools work unchanged. No new SDK to learn.
  ::

  ::card
  ---
  title: Smart Cost Routing
  icon: lucide:trending-down
  ---
  When multiple providers serve the same model, BluesMinds picks the cheapest one automatically.
  ::

  ::card
  ---
  title: Privacy First
  icon: lucide:lock
  ---
  Request and response bodies are **never stored** by default. Full GDPR compliance out of the box.
  ::

  ::card
  ---
  title: Works With Your Tools
  icon: lucide:plug
  to: /quick-start/claude-code
  ---
  Claude Code, Codex CLI, OpenClaw, Cursor, Continue.dev — any OpenAI-compatible tool.
  ::
::

## Start in 30 seconds

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-your-bluesminds-key",
    base_url="https://api.bluesminds.com/v1",
)

response = client.chat.completions.create(
    model="gpt-4o",  # or claude-sonnet-4-5, gemini-2.0-flash, etc.
    messages=[{"role": "user", "content": "Hello!"}],
)
```

::card-group{cols=3}
  ::card
  ---
  title: Free Forever
  icon: lucide:gift
  ---
  500 pi credits on signup. No credit card. No expiration.
  ::

  ::card
  ---
  title: Pay As You Grow
  icon: lucide:credit-card
  ---
  Plans from $5/day to $60/month unlimited. Enterprise custom pricing.
  ::

  ::card
  ---
  title: 24/7 Support
  icon: lucide:message-circle
  ---
  Telegram community and email support. We respond fast.
  ::
::

:read-more{title="Get your API key now" to="https://api.bluesminds.com/console" icon="lucide:external-link"}

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

  ::card
  ---
  title: Gemini CLI
  icon: lucide:sparkles
  to: /quick-start/gemini-cli
  ---
  Use Gemini models through BluesMinds gateway.
  ::

  ::card
  ---
  title: Continue.dev
  icon: lucide:puzzle
  to: /quick-start/continue-dev
  ---
  VS Code extension. Edit one config file.
  ::

  ::card
  ---
  title: More Tools
  icon: lucide:plus
  to: /quick-start/roocode
  ---
  RooCode, Kilocode, Qwen Code, Droid CLI, and more.
  ::
::
