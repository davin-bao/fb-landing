export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: [
    { code: 'en', language: 'en-US' },
    { code: 'fr', language: 'fr-FR' }
  ],
  defaultLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
}))
