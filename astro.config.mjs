import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import { SITE } from './src/libs/config.js'
import { locales, defaultlocale, fallbacklocales } from './src/i18n'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  site: SITE.site,
  trailingSlash: SITE.trailingSlash,
  output: 'static',
  integrations: [
    mdx(),
    tailwind(),  
    sitemap(), 
    robotsTxt({
      policy: [{
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '*/logout'],
        crawlDelay: 10,
      },
    ]}),
    icon({
      iconDir: "src/assets/icons",
    })
  ],
  i18n: {
    defaultLocale: defaultlocale,
    locales: Object.entries(locales).map(([lang, label]) => lang),
    routing: {
      prefixDefaultLocale: true
    },
    fallback: Object.assign({}, ...fallbacklocales.map((value, index) => ({
      [value]: defaultlocale
    })))
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        external: ['sharp'],
      }
    }
  },
  build: {
    assets: 'assets'
  }
});