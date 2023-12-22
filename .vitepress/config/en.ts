import type { DefaultTheme, LocaleConfig } from 'vitepress'

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

export const config: LocaleConfig<DefaultTheme.Config> = {
  root: {
    lang: 'en-US',

    // label: 'English', lang: 'en-US',

    themeConfig: {
      nav: nav(),

      sidebar: {
        '/guide/': { base: '/guide', items: sidebarGuide() },
        '/sass/': { base: '/sass', items: sidebarSass() },
        '/javascript/': { base: '/javascript', items: sidebarJavascript() },
        '/php/': { base: '/php', items: sidebarPhp() },
        '/git/': { base: '/git', items: sidebarGit() },
        '/bitrix/': { base: '/bitrix', items: sidebarBitrix() },
      },
    }
  }
}

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Skills', link: '/#skills' },
    { text: 'Experience', link: '/#experience' },
    { text: 'Work', link: '/#work' },
    { text: 'Resume', link: '/#resume' },
    {
      text: 'Guide',
      items: [
        { text: 'SSH', link: '/guide/ssh' }
      ]
    },
    {
      text: 'Docs', items: [
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
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'SSH', link: '/ssh' }
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