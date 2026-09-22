// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],

  site: "https://marvideo2009.github.io",
  base: "/Lyse-AI-Community.github.io",

  vite: {
    plugins: [tailwindcss()]
  }
});