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
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/><path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/></svg>'
        },
        link: '/guide/',
        ariaLabel: 'Docs'
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
      },
      headers: {
        'Content-Type': 'application/javascript'
      }
    }
  }
})
