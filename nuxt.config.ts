// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/i18n'],
  devtools: { enabled: true },
  hub: {
    database: true
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
