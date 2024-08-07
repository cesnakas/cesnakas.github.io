import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
  lang: 'ru',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide', items: sidebarGuide() },
      '/git/': { base: '/git', items: sidebarGit() },
      '/sass/': { base: '/sass', items: sidebarSass() },
      '/javascript/': { base: '/javascript', items: sidebarJavascript() },
      '/vue/': { base: '/vue', items: sidebarVue() },
      '/php/': { base: '/php', items: sidebarPhp() },
      '/bitrix/': { base: '/bitrix', items: sidebarBitrix() },
    },

    sidebarMenuLabel: 'Меню',
    langMenuLabel: 'Изменить язык',
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',

    outline: { label: 'Содержание:' },
    returnToTopLabel: 'Вернуться к началу',

    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        forceLocale: true,
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    },
  }
})

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Навыки', link: '/#skills' },
    { text: 'Опыт', link: '/#experience' },
    { text: 'Работы', link: '/work/' },
    // { text: 'Резюме', link: '/#resume' },
    {
      text: 'Гайды', link: '/guide/', items: [
        { text: 'Bash', link: '/guide/bash' },
        { text: 'SSH', link: '/guide/ssh' },
        { text: 'Sass/SCSS', link: '/sass/' },
        { text: 'JavaScript', link: '/javascript/' },
        { text: 'PHP', link: '/php/' },
        { text: 'Vue', link: '/vue/' },
        { text: 'Bitrix', link: '/bitrix/' },
      ]
    }
  ]
}

/** Sidebars */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Bash', link: '/bash' },
        { text: 'Browser', link: '/browser' },
        { text: 'Git', link: '/git' },
        { text: 'Gulp', link: '/gulp' },
        { text: 'macOS', link: '/mac-os' },
        { text: 'MAMP', link: '/mamp' },
        {
          text: 'Node', link: '/node', collapsed: true,
          items: [
            { text: 'NVM', link: '/node#nvm' },
          ]
        },
        { text: 'PhpStorm', link: '/phpstorm' },
        { text: 'RegExp', link: '/regexp' },
        {
          text: 'SSH', link: '/ssh', collapsed: true,
          items: [
            { text: 'Подключение к серверу', link: '/ssh#подключение-к-серверу' },
          ]
        },
        { text: 'Vite', link: '/vite' },
        { text: 'Webpack', link: '/webpack' },
      ]
    }
  ]
}

function sidebarGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'General',
      items: [
        { text: 'Git', link: '/' },
      ]
    },
    {
      text: 'Command',
      items: [
        { text: 'Git Add', link: '/add' },
        { text: 'Git Branch', link: '/branch' },
        { text: 'Git Checkout', link: '/checkout' },
        { text: 'Git Commit', link: '/commit' },
      ]
    }
  ]
}

function sidebarSass(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Sass/SCSS', link: '/', items: [
        { text: 'Переменные', link: '/variables' },
        { text: 'Миксины', link: '/mixins' }
      ]
    },
    {
      text: 'Паттерн 7-1', link: '/7-1/', items: [
        { text: 'Base', link: '/7-1/base' },
      ]
    },
  ]
}

function sidebarJavascript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'JavaScript', link: '/', items: [
        { text: 'Переменные', link: '/variables' },
        { text: 'Условия', link: '/conditions' },
        { text: 'Циклы', link: '/loops' },
      ]
    },
  ]
}

function sidebarVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Get started', link: null },
        {
          text: 'Состаяния компонента', link: '/states', collapsed: true,
          items: [
            { text: 'Local state', link: null }
          ]
        }
      ]
    },
  ]
}

function sidebarPhp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'PHP', link: '/', items: [
        { text: 'Массивы', link: '/arrays' }
      ]
    },
  ]
}

function sidebarBitrix(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bitrix', link: '/', items: [
        { text: 'Debugging', link: '/debugging' },
        { text: 'Папки и файлы', link: '/server' },
      ]
    },
    {
      text: 'Компоненты', collapsed: null, items: [
        { text: 'Breadcrumb', link: '/components/breadcrumb' },
      ]
    },
    {
      text: 'Модули', collapsed: null, items: [
        { text: 'Demo', link: '/modules/demo' },
      ]
    },
    {
      text: 'Миграции', collapsed: null, link: '/migrations', items: [
        { text: 'SEO-Свойства', link: '/migrations/meta' }
      ]
    },
    {
      items: [
        {
          text: 'Сниппеты', link: '/snippets',
          items: [
            { text: 'GetList', link: '/snippets/getlist' },
            { text: 'Admin', link: '/snippets/admin' },
            { text: 'Filter', link: '/snippets/filter' },
            { text: 'News', link: '/snippets/news' }
          ]
        }
      ]
    },
  ]
}

/** Search */
export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск по сайту'
      },
      modal: {
        resetButtonTitle: 'Сбросить',
        backButtonTitle: 'Закрыть',
        noResultsText: 'Нет результатов по запросу',
        displayDetails: 'Показать подробный список',
        footer: {
          navigateText: 'Навигация',
          selectText: 'Выбор',
          selectKeyAriaLabel: 'Enter',
          navigateUpKeyAriaLabel: 'Стрелка вверх',
          navigateDownKeyAriaLabel: 'Стрелка вниз',
          closeText: 'Закрыть',
          closeKeyAriaLabel: 'Escape'
        }
      }
    }
  }
}
