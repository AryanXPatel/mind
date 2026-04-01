export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'BluesMinds',
      description: 'One API key. Hundreds of models. Zero vendor lock-in.',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 1,
    },
    header: {
      title: 'BluesMinds',
      showTitle: true,
      darkModeToggle: true,
      border: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: 'Documentation',
          links: [
            {
              title: 'Introduction',
              to: '/getting-started/introduction',
              description: 'Overview of BluesMinds API gateway',
              icon: 'lucide:info',
            },
            {
              title: 'Quickstart',
              to: '/getting-started/quickstart',
              description: 'Get your first API call running in 2 minutes',
              icon: 'lucide:zap',
            },
            {
              title: 'Principles',
              to: '/getting-started/principles',
              description: 'Core design principles behind the API',
              icon: 'lucide:compass',
            },
            {
              title: 'Models',
              to: '/getting-started/models',
              description: 'Browse available models and pricing tiers',
              icon: 'lucide:cpu',
            },
            {
              title: 'FAQ',
              to: '/getting-started/faq',
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
          title: 'Integrations',
          links: [
            {
              title: 'Claude Code',
              to: '/integrations/claude-code',
              description: 'Use Claude Code via BluesMinds',
              icon: 'lucide:terminal',
            },
            {
              title: 'Codex CLI',
              to: '/integrations/codex-cli',
              description: 'OpenAI Codex CLI integration',
              icon: 'lucide:square-terminal',
            },
            {
              title: 'OpenClaw',
              to: '/integrations/openclaw',
              description: 'OpenClaw AI agent platform',
              icon: 'lucide:bot',
            },
          ],
        },
        {
          title: 'API Reference',
          to: '/api/bluesminds-api',
          showLinkIcon: false,
        },
      ],
      links: [{
        icon: 'lucide:external-link',
        to: 'https://api.bluesminds.com/console',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: false,
      collapse: true,
      collapseLevel: 1,
      folderStyle: 'group',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeCopyToastText: 'Copied!',
    },
    footer: {
      credits: 'Copyright © 2026 BluesMinds. All rights reserved.',
      links: [{
        icon: 'lucide:message-circle',
        to: 'https://t.me/apibluesminds',
        target: '_blank',
      }, {
        icon: 'lucide:mail',
        to: 'mailto:hello@bluesminds.com',
        target: '_blank',
      }, {
        icon: 'lucide:globe',
        to: 'https://api.bluesminds.com',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Open Console',
        icon: 'lucide:external-link',
        to: 'https://api.bluesminds.com/console',
        target: '_blank',
      }, {
        title: 'Telegram Support',
        icon: 'lucide:message-circle',
        to: 'https://t.me/apibluesminds',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
