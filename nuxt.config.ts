import Components from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'
import { CONFIG } from './lib/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: [],
      // please note that this is an area that is likely to change
      style: [],
      noscript: []
    }
  },
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    databaseUrl: '',
  },
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [
          RadixVueResolver()
        ],
      }),
    ],
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en-US.json', name: 'English' },
      { code: 'zh', language: 'zh-CN', file: 'zh-CN.json', name: '简体中文' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    }
  },
  site: { indexable: true },
  robots: {
    disallow: ['/secret', '/admin'],
    allow: ['/']
  },
  routeRules: {
    // use the `index` shortcut for simple rules
    '/secret/**': { robots: false },
  }
})