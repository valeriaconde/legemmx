// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://legem.mx',
  // Genera /nosotros/index.html, que funciona en cualquier hosting (Apache, Nginx, cPanel).
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // Español vive en la raíz (legem.mx/...), inglés en legem.mx/en/...
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
