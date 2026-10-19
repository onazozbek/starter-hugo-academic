// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nazozbek.netlify.app', // Update this with your actual Netlify URL
  adapter: netlify(),
  output: 'static',
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});