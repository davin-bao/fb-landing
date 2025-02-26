
const getTheme = () => {
  const _default = {
    fonts: { sans: 'InterVariable' },
    colors: {
      background: '#FFFFFF',
      card: '#FFFFFF',
      muted: '#F3F4F6',
      foreground: '#000000',
      'muted-foreground': '#6B7280',
      accent: '#8B00FF',
      warning: '#F59E0B',
      'warning-foreground': '#FFF2CC',
    }
  }
  return _default
}

export const THEME = getTheme()

export const CONFIG = {
  siteUrl: 'https://fbadsorter.com',
  siteName: 'Fb Ad Sorting Tool',
  service: 'service@anreen.com',
  header: {
    description: 'Sort your Facebook ads by date, engagement and more.',
    image: '/images/hero-image.png',
    menus: [
      { text: 'menu.features', href: '/#features' },
      { text: 'menu.testimonial', href: '/#testimonial' },
      // { text: 'menu.blog', href: '/#blog' },
      { text: 'menu.faq', href: '/faq' }
    ],
  },
  footer: {
    "links": [
      {
        "title": "menu.product",
        "links": [
          {
            "text": "menu.features",
            "href": "/#features"
          },
          {
            "text": "menu.faq",
            "href": "/faq"
          },
          // {
          //   "text": "menu.pricing",
          //   "href": "/#pricing"
          // }
        ]
      },
      {
        "title": "menu.support",
        "links": [
          {
            "text": "menu.terms",
            "href": "/terms"
          },
          {
            "text": "menu.privacy",
            "href": "/privacy"
          },
          {
            "text": "menu.extensions.privacy",
            "href": "/extensions/privacy"
          }
        ]
      },
      // {
      //   "title": "menu.resource",
      //   "links": [
      //     {
      //       "text": "menu.blog",
      //       "href": "/blog"
      //     }
      //   ]
      // }
    ],
    "socials": [
      {
        "ariaLabel": "RSS",
        "icon": "rss",
        "href": "/rss.xml"
      },
      {
        "ariaLabel": "Instagram",
        "icon": "instagram",
        "href": "https://github.com/onwidget/fb_ad_sorter"
      }
    ],
    "note": `<p class=\"text-sm text-neutral-600 lg:col-span-2 mt-4\"> © ` + new Date().getFullYear() + ` <a class=\"text-link font-bold hover:text-accent\" href=\"/\">Fb Ad Sorting Tool</a>. All rights reserved.</p>`
  },
}
