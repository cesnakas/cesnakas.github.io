import { defineConfig } from 'vitepress'

export const rewrites = defineConfig ({
  rewrites: {
    // Bitrix
    'bitrix/index.md': 'ru/bitrix/index.md',

    // Guide
    'guide/browser.md': 'ru/guide/browser.md',
    'guide/git.md': 'ru/guide/git.md',
    'guide/ssh.md': 'ru/guide/ssh.md',

    // JavaScript
    'javascript/index.md': 'ru/javascript/index.md',
  }
})

export default rewrites
