// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// @ts-ignore
import CasesApp from './components/CasesApp.vue'
// @ts-ignore
import CasesFilter from './components/CasesFilter.vue'
// @ts-ignore
import CaseDetails from './components/CaseDetails.vue'
// @ts-ignore
import WorkList from './components/WorkList.vue'
// @ts-ignore
import TimeCalculator from './components/TimeCalculator.vue'
// @ts-ignore
import TaskTracker from './components/TaskTracker.vue'

import 'virtual:group-icons.css'
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
    app.component('CasesFilter', CasesFilter)
    app.component('CaseDetails', CaseDetails)
    app.component('work', WorkList)
    app.component('TimeCalculator', TimeCalculator)
    app.component('TaskTracker', TaskTracker)
  }
} satisfies Theme
