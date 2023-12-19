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
    label: 'Русский', lang: 'ru',

    themeConfig: {
      nav: nav(),

      sidebar: {
        '/ru/guide/': { base: '/ru/guide', items: sidebarGuide() },
      }
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
      text: 'Гайды',
      items: [
        { text: 'SSH', link: '/ru/guide/ssh' }
      ]
    }
  ]
}

/** Sidebar */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Браузер', link: '/browser' },
    { text: 'SSH', link: '/ssh' },
  ]
}
