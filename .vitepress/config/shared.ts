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
    // ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
    // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap' }],
    ['script', {}, `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(95915064, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });`],
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
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg>'
        },
        link: '/guide/',
        ariaLabel: 'Guides'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/cesnakas',
        ariaLabel: 'Telegram'},
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
  }
})
