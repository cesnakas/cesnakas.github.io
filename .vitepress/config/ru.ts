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
      text: 'Обновлено',
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
      text: 'Bash', collapsed: false,
      items: [
        { text: 'Документация', link: '/bash' },
        { text: 'Команды', link: '/bash' },
      ]
    },
    {
      text: 'SSH', collapsed: false,
      items: [
        { text: 'Общие сведения', link: '/ssh' },
        { text: 'Команды', link: '/ssh-commands' },
        { text: 'Работа с ключами', link: '/ssh-key' },
      ]
    },
    {
      text: 'Git', collapsed: false,
      items: [
        { text: 'Общие сведения', link: '/git' },
        { text: 'Подходы', link: '/git#подходы' },
      ]
    },
    {
      text: 'Node', collapsed: false,
      items: [
        { text: 'Описание', link: '/node' },
        { text: 'Node Version Manager (NVM)', link: '/node-nvm' },
      ]
    },
    {
      text: 'MAMP', collapsed: false,
      items: [
        { text: 'Описание', link: '/mamp' },
        { text: 'Установка', link: '/mamp-install' },
        { text: 'Настройка доменов', link: '/mamp-domains' },
      ]
    },

    {
      text: null, collapsed: false,
      items: [
        { text: 'Bitrix', base: '/bitrix', link: '/' },
        { text: 'Browser', link: '/browser' },
        { text: 'Calc', link: '/calc' },
        { text: 'Gulp', link: '/gulp' },
        { text: 'macOS', link: '/mac-os' },
        { text: 'PhpStorm', link: '/phpstorm' },
        { text: 'RegExp', link: '/regexp' },
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
      items: [
        {
          text: 'Bitrix', link: '/index', collapsed: true,
          items: [
            { text: 'Debugging', link: '/debugging' },
            { text: 'Папки и файлы', link: '/server' },
          ]
        },
        {
          text: 'Компоненты', link: '/components', collapsed: true,
          items: [
            { text: 'Breadcrumb', link: '/components/breadcrumb' },
          ]
        },
        {
          text: 'Модули', link: '/modules', collapsed: true,
          items: [
            { text: 'Demo', link: '/modules/demo' },
          ]
        },
        {
          text: 'Миграции', link: '/migrations', collapsed: true,
          items: [
            { text: 'Изменение шаблона', link: '/migrations-SiteTemplateTable' },
            { text: 'SEO-Свойства', link: '/migrations-IProperty' }
          ]
        },
        {
          text: 'Сниппеты', link: '/snippets', collapsed: true,
          items: [
            { text: 'GetList', link: '/snippets/getlist' },
            { text: 'Admin', link: '/snippets/admin' },
            { text: 'Filter', link: '/snippets/filter' },
            { text: 'News', link: '/snippets/news' }
          ]
        }
      ]
    }
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
