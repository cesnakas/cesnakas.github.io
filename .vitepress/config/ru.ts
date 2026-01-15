import {defineConfig, type DefaultTheme} from 'vitepress'

export const ru = defineConfig({
  lang: 'ru',
  themeConfig: {
    nav: nav(),

    sidebar: {
      // Guides
      '/guide': { base: '/guide', items: sidebarGuide() },
      // Servers
      '/guide/apache': { base: '/guide', items: sidebarGuideServer() },
      '/guide/nginx': { base: '/guide', items: sidebarGuideServer() },
      '/guide/mamp': { base: '/guide', items: sidebarGuideServer() },

      '/reference/git': { base: '/reference', items: sidebarReferenceGit() },
      '/reference/php': { base: '/reference', items: sidebarReferencePhp() },

      '/javascript/': { base: '/javascript', items: sidebarJavascript() },
      '/vue/': { base: '/vue', items: sidebarVue() },
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
    { text: 'Гайды', link: '/guide/' },
    {
      text: 'Референсы',
      activeMatch: '/reference/.*',
      items: [
        { text: 'Git', link: '/reference/git', activeMatch: '/reference/git.*' },
        { text: 'PHP', link: '/reference/php', activeMatch: '/reference/php.*' },
      ]
    },
    {
      text: 'Фреймворки',
      items: [
        { text: 'Bitrix', link: '/bitrix/' },
        { text: 'Vue', link: '/vue/' },
      ]
    },
    { text: 'Экспириенс', link: '/experience/', activeMatch: '/experience.*' },
    { text: 'Кейсы', link: '/cases/' },
  ]
}

/** Sidebars */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Командная строка',
      items: [
        { text: 'SSH', link: '/ssh' },
        { text: 'SSH команды', link: '/ssh-commands' },
        { text: 'SSH ключи', link: '/ssh-key' },
      ]
    },
    {
      text: 'Git', link: '/git'
    },
    {
      text: 'Node', link: '/node'
    },
    { text: ' ' },
    { text: 'Calc', link: '/calc' },
    { text: 'macOS', link: '/mac-os' },
    { text: 'PhpStorm', link: '/phpstorm' },
  ]
}

function sidebarGuideServer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Apache',
      items: [
        { text: 'Настройка', link: '/apache' },
      ]
    },
    {
      text: 'Nginx',
      items: [
        { text: 'Nginx', link: '/nginx' },
      ]
    },
    {
      text: 'MAMP',
      items: [
        { text: 'Установка и настройка', link: '/mamp' },
        { text: 'Настройка HTTPS', link: '/mamp-https' }
      ]
    },
  ]
}

function sidebarReferenceGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Справочник:',
      items: [
        { text: 'Git', link: '/git' },
        { text: 'Git Add', link: '/git-add' },
        // { text: 'Git SSH', link: '/git-ssh' },
      ]
    }
  ]
}

function sidebarReferencePhp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'PHP', link: '/php', items: [
        { text: 'Массивы', link: '/php-arrays' }
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
