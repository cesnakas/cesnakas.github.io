// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// @ts-ignore
import WorkList from './WorkList.vue'
// @ts-ignore
import TimeCalculator from './TimeCalculator.vue'

import './style.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('work', WorkList)
    app.component('TimeCalculator', TimeCalculator)
  }
} satisfies Theme
