import fs from 'fs'
import yaml from 'js-yaml'
import merge from 'lodash.merge'

const config = yaml.load(fs.readFileSync('src/config.yml', 'utf8'))
const getSite = () => {
    const _default = {
        name: 'Astro Blog',
        site: 'http://www.fbadsorter.com/',
        appSite: 'http://app.fbadsorter.com/',
        base: '/',
        trailingSlash: 'ignore',
        service: 'service@anreen.com',

        googleSiteVerificationId: '',
    }
    return merge(_default, config?.site ?? {})
}

const getMetadata = () => {
    const siteConfig = getSite()
  
    const _default = {
      title: {
        default: siteConfig?.name || DEFAULT_SITE_NAME,
        template: '%s',
      },
      description: '',
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        type: 'website',
      },
    }
  
    return merge({}, _default, config?.metadata ?? {})
}

const getI18n = () => {
    const _default = {
        default: 'en',
        fallback: ['es'],
        supports: ['en'],
    }
    const value = merge({}, _default, config?.i18n ?? {});

    return Object.assign(value, {
        dateFormatter: new Intl.DateTimeFormat(value.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
        }),
    })
}

const getTheme = () => {
    const _default = {
        fonts: { sans: 'InterVariable' },
        colors: {
            default: '#FFFFFF',
            header: '#FFFFFF',
            footer: '#FFFFFF',
            primary: '#000000',
            secondary: '#283CFF',
            accent: '#283CFF',
            info: '#3b82f6',
            success: '#65a30d',
            warn: '#F59E0B',
            danger: '#dc2626',
            link: '#0B0B0B',
        }
    }
    return merge(_default, config?.theme ?? {})
}

const getHeader = () => {
    const _default = {
        menus: [],
    }
    const conf = merge(_default, config?.header ?? {})
    return {
        ...conf,
        note: conf.note && conf.note
        .replace('{year}', new Date().getFullYear()) 
        .replace('{SITE.base}', SITE.base) 
        .replace('{SITE.name}', SITE.name) 
        || ''
    }
}

const getFooter = () => {
    const _default = {
        links: [],
        socials: [],
        note: '',
    }
    const conf = merge(_default, config?.footer ?? {})
    return {
        ...conf,
        note: conf.note && conf.note
        .replace('{year}', new Date().getFullYear()) 
        .replace('{SITE.base}', SITE.base) 
        .replace('{SITE.name}', SITE.name) 
        || ''
    }
}

export const SITE = getSite()
export const METADATA = getMetadata()
export const I18N = getI18n()
export const THEME = getTheme()
export const HEADER = getHeader()
export const FOOTER = getFooter()