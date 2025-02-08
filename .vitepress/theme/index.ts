// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import CasesApp from './components/CasesApp.vue'
import WorkList from './components/WorkList.vue'
import TimeCalculator from './components/TimeCalculator.vue'
import TaskTracker from './components/TaskTracker.vue'

import './style.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CasesApp', CasesApp)
    app.component('work', WorkList)
    app.component('TimeCalculator', TimeCalculator)
    app.component('TaskTracker', TaskTracker)
  }
} satisfies Theme
