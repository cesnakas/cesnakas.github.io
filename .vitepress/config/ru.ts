import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ru/guide/': { base: '/ru/guide', items: sidebarGuide() },
      '/ru/sass/': { base: '/ru/sass', items: sidebarSass() },
      '/ru/javascript/': { base: '/ru/javascript', items: sidebarJavascript() },
      '/ru/vue/': { base: '/ru/vue', items: sidebarVue() },
      '/ru/php/': { base: '/ru/php', items: sidebarPhp() },
      '/ru/bitrix/': { base: '/ru/bitrix', items: sidebarBitrix() },
    },

    outlineTitle: 'Содержание:',

    lastUpdatedText: 'Последнее обновление',
  }
}

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Навыки', link: '/ru/#skills' },
    { text: 'Опыт', link: '/ru/#experience' },
    { text: 'Работы', link: '/ru/work/' },
    { text: 'Резюме', link: '/ru/#resume' },
    {
      text: 'Гайды', items: [
        { text: 'Bash', link: '/ru/guide/bash' },
        { text: 'Git', link: '/ru/guide/git' },
        { text: 'SSH', link: '/ru/guide/ssh' },
        { text: 'Node', link: '/ru/guide/node' },
        { text: 'Sass/SCSS', link: '/ru/sass/' },
        { text: 'JavaScript', link: '/ru/javascript/' },
        { text: 'PHP', link: '/ru/php/' },
        { text: 'Vue', link: '/ru/vue/' },
        { text: 'Bitrix', link: '/ru/bitrix/' },
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
      text: 'Сниппеты', collapsed: null, items: [
        { text: 'Admin', link: '/snippets/admin' },
        { text: 'Filter', link: '/snippets/filter' },
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
