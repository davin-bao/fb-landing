import en from './lang/en/index'
import zh from './lang/zh-cn/index'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: [
    { code: 'en', language: 'en-US' },
    { code: 'zh', language: 'zh-CN' }
  ],
  defaultLocale: 'en',
  messages: {
    en,
    zh
  }
}))