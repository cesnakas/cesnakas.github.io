import {DefaultTheme, LocaleSpecificConfig, LocaleConfig} from 'vitepress'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
  root: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search'
      },
      modal: {
        resetButtonTitle: 'Reset search',
        noResultsText: 'No results for',
        backButtonTitle: 'Close search',
        displayDetails: 'Display detailed list',
        footer: {
          selectText: 'Select',
          selectKeyAriaLabel: 'Enter',
          navigateText: 'Navigate',
          navigateUpKeyAriaLabel: 'Up arrow',
          navigateDownKeyAriaLabel: 'Down arrow',
          closeText: 'Close',
          closeKeyAriaLabel: 'Escape'
        }
      }
    }
  },
}

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide', items: sidebarGuide() },
      '/sass/': { base: '/sass', items: sidebarSass() },
      '/javascript/': { base: '/javascript', items: sidebarJavascript() },
      '/php/': { base: '/php', items: sidebarPhp() },
      '/bitrix/': { base: '/bitrix', items: sidebarBitrix() },
    },
  }
}

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Skills', link: '/#skills' },
    { text: 'Experience', link: '/#experience' },
    { text: 'Work', link: '/ru/work/' },
    { text: 'Resume', link: '/#resume' },
    {
      text: 'Guide',
      items: [
        { text: 'SSH', link: '/ru/guide/ssh' },
        { text: 'Git', link: '/ru/guide/git' },
        { text: 'Sass/SCSS', link: '/ru/sass/' },
        { text: 'JavaScript', link: '/ru/javascript/' },
        { text: 'PHP', link: '/ru/php/' },
        { text: 'Bitrix', link: '/ru/bitrix/' },
      ]
    }
  ]
}

/** Sidebar */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    // { text: '', link: null },
  ]
}

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

function sidebarBitrix(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bitrix', link: '/', items: [
        { text: 'Folders & files', link: '/server' },
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
    }
  ]
}
