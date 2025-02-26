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
      '/reference/scss': { base: '/reference', items: sidebarReferenceScss() },
      '/reference/js': { base: '/reference', items: sidebarReferenceJs() },
      '/reference/php': { base: '/reference', items: sidebarReferencePhp() },
      '/reference/sql': { base: '/reference', items: sidebarReferenceSql() },

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
        { text: 'SCSS', link: '/reference/scss', activeMatch: '/reference/scss.*' },
        { text: 'JavaScript', link: '/reference/js', activeMatch: '/reference/js.*' },
        { text: 'PHP', link: '/reference/php', activeMatch: '/reference/php.*' },
        { text: 'SQL', link: '/reference/sql', activeMatch: '/reference/sql.*' },
      ]
    },
    {
      text: 'Фреймворки',
      items: [
        { text: 'Bitrix', link: '/bitrix/' },
        { text: 'Vue', link: '/vue/' },
      ]
    },
    { text: 'Кейсы', link: '/cases/' },
  ]
}

/** Sidebars */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Командная строка',
      // link: '/shell',
      items: [
        { text: 'Bash', link: '/bash' },
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

function sidebarReferenceScss(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Sass/SCSS', link: '/scss', items: [
        { text: 'Переменные', link: '/scss-variables' },
        { text: 'Миксины', link: '/scss-mixins' }
      ]
    },
    {
      text: 'Паттерн 7-1', link: '/scss-7-1', items: [
        { text: 'Base', link: '/scss-7-1-base' },
      ]
    },
  ]
}

function sidebarReferenceJs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'JavaScript', link: '/js', items: [
        { text: 'Переменные', link: '/js-variables' },
        { text: 'Условия', link: '/js-conditions' },
        { text: 'Циклы', link: '/js-loops' },
      ]
    },
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

function sidebarReferenceSql(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'SQL', link: '/sql', items: [
        { text: 'SQL команды', link: '/sql-commands' },
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
