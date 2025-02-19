import { I18N } from '../libs/config.js'
import { getObjectValue } from '../libs/utils'
import en from './lang/en/index'
import fr from './lang/fr'
import zh from './lang/zh-cn/index'

const defaultLocales = {
  en: 'English',
  es: 'English',
  fr: 'Français',
  'zh-cn': '简体中文'
}

const defaultMessages = {
  en,
  es: en,
  fr: fr,
  'zh-cn': zh
}

const getLocales = () => {
  let ret = {}
  for (const key of I18N.supports) {
    ret[key] = defaultLocales[key]
  }
  return ret
}
const getMessages = () => {
  let ret = {}
  for (const key of I18N.supports) {
    ret[key] = defaultMessages[key]
  }
  return ret
}

export const defaultlocale = I18N.default
export const fallbacklocales = I18N.fallback
export const locales = getLocales()

export function useTranslations(lang: string) {
  const ui = getMessages()
  return function t(key) {
    return getObjectValue(ui[lang], key) || getObjectValue(ui[defaultlocale], key)
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in locales) return lang as keyof typeof locales;
  return defaultlocale;
}
