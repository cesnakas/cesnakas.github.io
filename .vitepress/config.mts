import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // lang: '',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://cesnakas.com'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap' }],
    ['script', {}, `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(24299302, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); ym(70155283, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, trackHash:true })`],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=UA-49010861-1'}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-49010861-1');`]
  ],

  title: 'Sergei Česnakas',
  description: 'Sergei Česnakas — Front-end Web Developer',
  // titleTemplate: false,

  locales: {
    root: { label: 'English', lang: 'en-US' },
    // ru: { label: 'Русский', lang: 'ru' }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/cesnakas.png',

    search: {
      provider: 'local'
    },

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cesnakas' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>Telegram</title><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>' }, link: 'https://t.me/cesnakas', ariaLabel: 'Telegram' }
    ],

    sidebar: {
      '/sass/': { base: '/sass', items: sidebarSass() },
      '/javascript/': { base: '/javascript', items: sidebarJavascript() },
      '/php/': { base: '/php', items: sidebarPhp() },
      '/git/': { base: '/git', items: sidebarGit() },
      '/bitrix/': { base: '/bitrix', items: sidebarBitrix() },
    },

    outlineTitle: 'Содержание:',

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'Česnakas Inc. All rights reserved.',
      copyright: 'Copyright © ' + new Date().getFullYear()
    }

  }
})

/** Navigation */

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Skills', link: '/#skills' },
    { text: 'Experience', link: '/#experience' },
    { text: 'Work', link: '/#work' },
    { text: 'Resume', link: '/#resume' },
    { text: 'Docs',
      items: [
        {
          items: [
            { text: 'Sass/SCSS', link: '/sass/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'PHP', link: '/php/' },
          ],
        },
        {
          items: [
            { text: 'Git', link: '/git/' }
          ]
        },
        {
          items: [
            { text: 'Bitrix', link: '/bitrix/' }
          ]
        },
      ]
    }
  ]
}

/** Sidebar */

function sidebarSass(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Sass/SCSS',
      items: [
        { text: 'Info', link: '/', },
        { text: 'Variables', link: '/variables' },
        { text: 'Mixins', link: '/mixins' }
      ]
    }
  ]
}

function sidebarJavascript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'JavaScript',
      items: [
        { text: 'Info', link: '/' }
      ]
    },
  ]
}

function sidebarPhp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'PHP',
      items: [
        { text: 'Info', link: '/' }
      ]
    },
  ]
}

function sidebarGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Git',
      items: [
        { text: 'Info', link: '/' }
      ]
    }
  ]
}

function sidebarBitrix(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bitrix',
      link: '/',
      items: [
        {
          text: 'Components', collapsed: true,
          items: [
            { text: 'Breadcrumb', link: '/components/breadcrumb' },
          ]
        },
        {
          text: 'Modules', collapsed: true,
          items: [
            { text: 'Demo', link: '/modules/demo' },
          ]
        },
        {
          text: 'Snippets', collapsed: true,
          items: [
            { text: 'Filter', link: '/snippets/filter' },
          ]
        },
        {
          text: 'Other', collapsed: true,
          items: [
            { text: 'Server', link: '/server' }
          ]
        }
      ]
    }
  ]
}
