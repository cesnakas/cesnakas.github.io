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
    details: '&nbsp;'
    link: https://accesstyle.ru
    linkText: Подробнее
    
  - title: ru.dareu.com
    details: '&nbsp;'
    link: https://ru.dareu.com
    linkText: Подробнее
    
  - title: ru.viomi.com
    details: '&nbsp;'
    link: https://ru.viomi.com
    linkText: Подробнее

  - title: ninetygorussia.com
    details: '&nbsp;'
    link: https://ninetygorussia.com
    linkText: Подробнее

  - title: fplusmobile.ru
    details: '&nbsp;'
    link: https://fplusmobile.ru
    linkText: Подробнее

  - title: ru.yeelight.com
    details: '&nbsp;'
    link: https://ru.yeelight.com
    linkText: Подробнее

  - title: jimmyglobal.ru
    details: '&nbsp;'
    link: https://jimmyglobal.ru
    linkText: Подробнее

  - title: ru.dreametech.com
    details: '&nbsp;'
    link: https://ru.dreametech.com
    linkText: Подробнее

  - title: santehnika-tut.ru
    details: '&nbsp;'
    link: https://santehnika-tut.ru
    linkText: Подробнее
    
  - title: mb-mikro.ru
    details: '&nbsp;'
    link: https://mb-mikro.ru
    linkText: Подробнее
    
  - title: roomatic.ru
    details: '&nbsp;'
    link: https://roomatic.ru
    linkText: Подробнее
    
  - title: form-perm.ru
    details: '&nbsp;'
    link: https://form-perm.ru
    linkText: Подробнее
    
  - title: avtomir-jac.ru
    details: '&nbsp;'
    link: https://avtomir-jac.ru
    linkText: Подробнее

  - title: steklodom.com
    details: '&nbsp;'
    link: https://steklodom.com
    linkText: Подробнее
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
