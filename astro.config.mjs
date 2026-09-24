// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],

  site: 'https://sparkslyse-community.github.io/',
  
  base: '/SparksLyse-Community.github.io/',

  vite: {
    plugins: [tailwindcss()]
  }
});