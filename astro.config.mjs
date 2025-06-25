// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // <-- nuevo

// https://astro.build/config
export default defineConfig({
  site: 'https://bydaniel.site', // <-- MUY IMPORTANTE para el sitemap
  integrations: [tailwind(), sitemap()], // <-- agrega el plugin aquí
});
