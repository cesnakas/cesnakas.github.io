<template>
  <!-- Ничего не рендерим, всё делаем через onMounted -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { page, site } = useData()

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  // ...другие данные
}

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
</script> 