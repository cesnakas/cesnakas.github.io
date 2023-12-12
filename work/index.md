---
layout: page

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
  - title: Simple and minimal, always
    details: Lorem ipsum...
    icon: 🛠️
    
  - title: Another cool feature
    details: Lorem ipsum...
    icon: 😉
    
  - title: Another cool feature
    details: Lorem ipsum...
    icon: 😎

  - title: Another cool feature
    details: Lorem ipsum...
    icon: 👋

  - title: Simple and minimal, always
    details: Lorem ipsum...
    icon: 🛠️

  - title: Another cool feature
    details: Lorem ipsum...
    icon: 😉

  - title: Another cool feature
    details: Lorem ipsum...
    icon: 😎

  - title: Another cool feature
    details: Lorem ipsum...
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

[//]: # (  <VPTeamMembers size="medium" :members="members" />)

  <VPHomeFeatures />

</VPTeamPage>
