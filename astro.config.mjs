// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],

  // URL de base de ton compte GitHub
  site: 'https://arthurguerrier.github.io',
  
  // NOM EXACT DU REPO (obligatoire !)
  base: '/SparksLyse-Community.github.io/',

  vite: {
    plugins: [tailwindcss()]
  }
});