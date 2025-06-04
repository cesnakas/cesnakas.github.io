// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import CasesApp from './components/CasesApp.vue'
import CasesFilter from './components/CasesFilter.vue'
import CaseDetails from './components/CaseDetails.vue'
import WorkList from './components/WorkList.vue'
import TimeCalculator from './components/TimeCalculator.vue'
import TaskTracker from './components/TaskTracker.vue'
import Skills from './components/Skills.vue'
import Certificates from './components/Certificates.vue'
import Experience from './components/Experience.vue'
import ExperienceStats from './components/ExperienceStats.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'

import 'virtual:group-icons.css'
import './style.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Breadcrumbs)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CasesApp', CasesApp)
    app.component('CasesFilter', CasesFilter)
    app.component('CaseDetails', CaseDetails)
    app.component('work', WorkList)
    app.component('TimeCalculator', TimeCalculator)
    app.component('TaskTracker', TaskTracker)
    app.component('Skills', Skills)
    app.component('Certificates', Certificates)
    app.component('Experience', Experience)
    app.component('ExperienceStats', ExperienceStats)
    app.component('Breadcrumbs', Breadcrumbs)
  }
} satisfies Theme
