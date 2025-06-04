<template>
  <!-- Ничего не рендерим, всё делаем через onMounted -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { page, site } = useData()

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.value.title || site.value.title,
  "description": page.value.description || site.value.description,
  "url": `https://cesnakas.com${page.value.relativePath.replace('.md', '')}`,
  "author": {
    "@type": "Person",
    "name": "Sergei Česnakas",
    "url": "https://cesnakas.com",
    "jobTitle": "Web Developer"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sergei Česnakas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cesnakas.com/images/s.cesnakas.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://cesnakas.com${page.value.relativePath.replace('.md', '')}`
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
</script> 