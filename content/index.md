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
    to: /getting-started/quickstart
  - name: View API Reference
    variant: outline
    to: /api/bluesminds-api
    leftIcon: 'lucide:code'
---

#title
One API. Every AI Model.

#description
Drop-in OpenAI-compatible gateway to 100+ LLMs. :br Automatic failover. Cost optimization. Privacy by default.
::

::card-group{cols=3}
  ::card
  ---
  title: 2-Minute Setup
  icon: lucide:zap
  to: /getting-started/quickstart
  ---
  Change one line of code. Your existing OpenAI SDK just works — Python, Node.js, cURL.
  ::

  ::card
  ---
  title: 100+ Models
  icon: lucide:cpu
  to: /getting-started/models
  ---
  GPT-4o, Claude Sonnet, Gemini Flash, DeepSeek, Grok — all through one API key.
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
  to: /integrations/claude-code
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
