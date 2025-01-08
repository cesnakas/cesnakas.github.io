import { defineConfig } from 'vitepress'
import { search as ruSearch } from './ru'
import { search as enSearch } from './en'

export const shared = defineConfig({
    title: 'Sergei Česnakas',
    titleTemplate: false,
    description: 'Разработка сайтов, Верстка, Программирование, Портфолио, Языки программирования, Гайды, Заметки, Сниппеты, Инструменты разработчика.',

    cleanUrls: true,
    lastUpdated: true,

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap' }],
        ['script', {}, `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(95915064, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });`],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5QRK48NJWG'}],
        ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5QRK48NJWG');`]
    ],

    themeConfig: {
        logo: 'https://github.com/cesnakas.png',

        search: {
            provider: 'local',
            options: {
                locales: {
                    ...ruSearch,
                    ...enSearch
                }
            }
        },

        socialLinks: [
            { icon: 'telegram', link: 'https://t.me/cesnakas', ariaLabel: 'Telegram' },
            { icon: 'github', link: 'https://github.com/cesnakas', ariaLabel: 'GitHub' },
        ],

        docFooter: {
            prev: false,
            next: false
        },

        footer: {
            message: 'Česnakas Inc. All rights reserved.',
            copyright: 'Copyright © ' + new Date().getFullYear()
        }

    },

    markdown: {
        image: { lazyLoading: true }
    },

    sitemap: {
        hostname: 'https://cesnakas.com',
        lastmodDateOnly: true
    }
})
