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
    label: 'English', lang: 'en-US',

    themeConfig: {
      nav: nav(),
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
    { text: 'Docs',
      items: [
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
