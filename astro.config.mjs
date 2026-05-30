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

  // i18n is added in Phase 4
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de'],
  //   routing: { prefixDefaultLocale: false },
  // },
});
