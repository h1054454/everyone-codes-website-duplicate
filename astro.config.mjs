// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Sprint A: GitHub Pages. Sprint B switches to https://everyonecodes.io
  site: 'https://h1054454.github.io',
  base: '/everyone-codes-website-duplicate',

  integrations: [sitemap()],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  // Phase 4: i18n scaffold. EN stays at the root (no /en prefix), DE lives
  // under /de. Content is English everywhere for now — only the routing,
  // label lookup and language switcher are wired up. The actual German
  // translations are a later content sprint (see plan.md Phase 4 scope note).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
