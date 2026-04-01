export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'BluesMinds',
      description: 'One API key. 897+ models. 19 providers. Zero vendor lock-in.',
    },
    theme: {
      customizable: false,
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
        light: 'https://api.bluesminds.com/logo.png',
        dark: 'https://api.bluesminds.com/logo.png',
      },
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
      links: [{
        icon: 'lucide:external-link',
        to: 'https://api.bluesminds.com/console',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: false,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
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
