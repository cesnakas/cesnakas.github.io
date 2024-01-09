import type { DefaultTheme, LocaleConfig } from 'vitepress'

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

export const config: LocaleConfig<DefaultTheme.Config> = {
  ru: {
    lang: 'ru',

    // label: 'Русский', lang: 'ru',

    themeConfig: {
      nav: nav(),

      sidebar: {
        '/ru/guide/': { base: '/ru/guide', items: sidebarGuide() },
        '/ru/sass/': { base: '/ru/sass', items: sidebarSass() },
        '/ru/javascript/': { base: '/ru/javascript', items: sidebarJavascript() },
        '/ru/php/': { base: '/ru/php', items: sidebarPhp() },
        '/ru/bitrix/': { base: '/ru/bitrix', items: sidebarBitrix() },
      },

      outlineTitle: 'Содержание:',
    }
  }
}

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Навыки', link: '/ru/#skills' },
    { text: 'Опыт', link: '/ru/#experience' },
    { text: 'Работы', link: '/ru/#work' },
    { text: 'Резюме', link: '/ru/#resume' },
    {
      text: 'Гайды', items: [
        { text: 'Browser', link: '/ru/guide/browser' },
        { text: 'Bash', link: '/ru/guide/bash' },
        { text: 'SSH', link: '/ru/guide/ssh' },
        { text: 'Git', link: '/ru/guide/git' },
        { text: 'Sass/SCSS', link: '/ru/sass/' },
        { text: 'Bitrix', link: '/ru/bitrix/' },
      ]
    }
  ]
}

/** Sidebars */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Браузер', link: '/browser' },
    { text: 'Bash', link: '/bash' },
    { text: 'SSH', link: '/ssh' },
    { text: 'Git', link: '/git' },
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

function sidebarPhp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'PHP', link: '/', items: [
        { text: 'Get started', link: null }
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
      text: 'Components', collapsed: null, items: [
        { text: 'Breadcrumb', link: '/components/breadcrumb' },
      ]
    },
    {
      text: 'Modules', collapsed: null, items: [
        { text: 'Demo', link: '/modules/demo' },
      ]
    },
    {
      text: 'Snippets', collapsed: null, items: [
        { text: 'Filter', link: '/snippets/filter' },
      ]
    },
  ]
}
