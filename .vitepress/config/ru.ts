import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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

    outlineTitle: 'Содержание:',

    lastUpdatedText: 'Последнее обновление',
  }
}

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Навыки', link: '/#skills' },
    { text: 'Опыт', link: '/#experience' },
    { text: 'Работы', link: '/work/' },
    { text: 'Резюме', link: '/#resume' },
    {
      text: 'Гайды', items: [
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
    { text: 'Bash', link: '/bash' },
    { text: 'Git', link: '/git' },
    { text: 'SSH', link: '/ssh' },
    {
      items: [
        { text: 'Node', link: '/node' },
      ]
    },
    {
      items: [
        { text: 'Gulp', link: '/gulp' },
        { text: 'Webpack', link: '/webpack' },
        { text: 'Vite', link: '/vite' }
      ]
    },
    {
      items: [
        { text: 'Браузер', link: '/browser' },
        { text: 'macOS', link: '/mac-os' },
        { text: 'MAMP', link: '/mamp' },
      ]
    },
    {
      items: [
        { text: 'PhpStorm', link: '/phpstorm' }
      ]
    },
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
        { text: 'Подключение', link: null }
      ]
    },
  ]
}

function sidebarVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Vue', link: '/', items: [
        { text: 'Get started', link: null }
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
      text: 'Сниппеты', collapsed: null, items: [
        { text: 'GetList', link: '/snippets/getlist' },
        { text: 'Admin', link: '/snippets/admin' },
        { text: 'Filter', link: '/snippets/filter' },
        { text: 'News', link: '/snippets/news' }
      ]
    },
  ]
}

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
  ru: {
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск'
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
  },
}
