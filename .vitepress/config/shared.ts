import {defineConfig} from 'vitepress'
import {groupIconMdPlugin, groupIconVitePlugin, localIconLoader} from 'vitepress-plugin-group-icons'

import {search as ruSearch} from './ru'
import {search as enSearch} from './en'

export const shared = defineConfig({
  title: 'Sergei Česnakas',
  titleTemplate: false,
  description: 'Разработка сайтов, Верстка, Программирование, Портфолио, Языки программирования, Гайды, Заметки, Сниппеты, Инструменты разработчика.',

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Sergei Česnakas — Web Developer' }],
    ['meta', { property: 'og:description', content: 'Разработка сайтов, Верстка, Программирование, Портфолио, Языки программирования, Гайды, Заметки, Сниппеты, Инструменты разработчика.' }],
    ['meta', { property: 'og:image', content: 'https://cesnakas.com/images/s.cesnakas.png' }],
    ['meta', { property: 'og:url', content: 'https://cesnakas.com' }],
    ['meta', { property: 'og:site_name', content: 'Sergei Česnakas' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Sergei Česnakas — Web Developer' }],
    ['meta', { name: 'twitter:description', content: 'Разработка сайтов, Верстка, Программирование, Портфолио, Языки программирования, Гайды, Заметки, Сниппеты, Инструменты разработчика.' }],
    ['meta', { name: 'twitter:image', content: 'https://cesnakas.com/images/s.cesnakas.png' }],
    // JSON-LD
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sergei Česnakas — Web Developer",
      "description": "Разработка сайтов, Верстка, Программирование, Портфолио, Языки программирования, Гайды, Заметки, Сниппеты, Инструменты разработчика.",
      "url": "https://cesnakas.com",
      "author": {
        "@type": "Person",
        "name": "Sergei Česnakas",
        "url": "https://cesnakas.com",
        "jobTitle": "Web Developer"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sergei Česnakas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cesnakas.com/images/s.cesnakas.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cesnakas.com"
      }
    })],
    // Yandex.Metrika
    ['script', {}, `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(95915064, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });`],
    // Google Analytics
    ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5QRK48NJWG'}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5QRK48NJWG');`]
  ],

  themeConfig: {
    logo: 'https://github.com/cesnakas.png',

    search: {
      provider: 'local',
      options: {
        locales: {
          ...ruSearch,
          ...enSearch
        }
      }
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>'
        },
        link: 'https://chromewebstore.google.com/detail/xtrecker/ebccbgckajjhnfdbpblnckfpkdcfphfg',
        ariaLabel: 'xTrecker'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/cesnakas',
        ariaLabel: 'Telegram',
      },
      {
        icon: 'github',
        link: 'https://github.com/cesnakas',
        ariaLabel: 'GitHub'
      },
    ],

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'Česnakas Inc. All rights reserved.',
      copyright: 'Copyright © ' + new Date().getFullYear()
    }

  },

  markdown: {
    image: {lazyLoading: true},
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  sitemap: {
    hostname: 'https://cesnakas.com',
    lastmodDateOnly: true
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        // https://vpgi.vercel.app/features.html
        customIcon: {
          // @ts-ignore
          '.conf': localIconLoader(import.meta.url, '../../public/images/folder.svg')
        }
      })
    ],
    server: {
      fs: {
        strict: true
      }
    },
    publicDir: 'public'
  }
})
