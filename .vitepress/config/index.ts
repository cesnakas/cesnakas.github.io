import { defineConfig } from 'vitepress'

import { shared } from './shared'
import { ru } from './ru'
import { en } from './en'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: null, ...ru },
    en: { label: null, ...en },
  }
})
