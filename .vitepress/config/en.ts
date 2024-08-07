import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
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
})

/** Navigation */
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Skills', link: '/#skills' },
    { text: 'Experience', link: '/#experience' },
    { text: 'Work', link: '/work/' },
    { text: 'Resume', link: '/#resume' },
    {
      text: 'Guide',
      items: [
        { text: 'SSH', link: '/guide/ssh' },
        { text: 'Git', link: '/guide/git' },
        { text: 'Sass/SCSS', link: '/sass/' },
        { text: 'JavaScript', link: '/javascript/' },
        { text: 'PHP', link: '/php/' },
        { text: 'Bitrix', link: '/bitrix/' },
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

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {

  }
}
