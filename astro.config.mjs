// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  site: "https://marvideo2009.github.io/Lyse-AI-Community.github.io/",

  vite: {
    plugins: [tailwindcss()]
  }
});