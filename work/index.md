---
layout: page
title: Work

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

features:
  - title: accesstyle.ru
    details: Lorem ipsum...
    link: /work/accesstyle-ru
    icon: 👋
    
  - title: ru.dareu.com
    details: Lorem ipsum...
    icon: 👋
    
  - title: ru.viomi.com
    details: Lorem ipsum...
    icon: 👋

  - title: ninetygorussia.com
    details: Lorem ipsum...
    icon: 👋

  - title: fplusmobile.ru
    details: Lorem ipsum...
    icon: 👋

  - title: ru.yeelight.com
    details: Lorem ipsum...
    link: /work/ru.yeelight.com
    icon: 👋

  - title: jimmyglobal.ru
    details: Lorem ipsum...
    link: /work/jimmyglobal.ru
    icon: 👋

  - title: ru.dreametech.com
    details: eCommerce
    link: /work/ru.dreametech.com
    icon: 👋

  - title: santehnika-tut.ru
    details: Lorem ipsum...
    link: /work/santehnika-tut.ru
    icon: 👋

  - title: steklodom.com
    details: Lorem ipsum...
    link: /work/steklodom.com
    icon: 👋
---

<script setup>
import {
  VPHomeFeatures, VPHomeHero,
  VPTeamPage, VPTeamPageTitle, VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

[//]: # (<VPHomeHero />)

<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>Work</template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>

[//]: # (<VPTeamMembers size="small" :members="members" />)

  <VPHomeFeatures />

</VPTeamPage>
