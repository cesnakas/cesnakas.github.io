import type { DefaultTheme, LocaleConfig } from 'vitepress'

export const config: LocaleConfig<DefaultTheme.Config> = {
  root: {
    label: 'English', lang: 'en-US',
  }
}

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
