// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',

  // Fix dayjs ESM import error from mermaid dependency
  vite: {
    optimizeDeps: {
      include: ['dayjs'],
    },
  },

  // i18n for language switcher
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
    ],
  },

  // Shiki syntax highlighting languages
  mdc: {
    highlight: {
      langs: ['python', 'javascript', 'typescript', 'bash', 'json', 'json5', 'css', 'html', 'vue', 'yaml', 'toml', 'ini', 'powershell', 'sql', 'mdc'],
    },
  },
});
