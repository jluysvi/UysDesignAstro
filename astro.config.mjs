import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://uysdesign.co.za/',
  integrations: [tailwind(), sitemap()],
  typescript: {
    checkCondfig: false,
    check: false
  }
});