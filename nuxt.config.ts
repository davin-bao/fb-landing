import Components from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    '@nuxtjs/seo'
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
  robots: {
    disallow: ['/secret', '/admin'],
  }
})