<template>
  <nav class="breadcrumbs" aria-label="breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <template v-if="index === items.length - 1">
          <span class="current">{{ item.text }}</span>
        </template>
        <template v-else>
          <a :href="item.link">{{ item.text }}</a>
          <span class="separator">/</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const items = computed(() => {
  const path = page.value.relativePath
  const parts = path.split('/')
  const result = [{ text: 'Home', link: '/' }]
  
  let currentPath = ''
  parts.forEach((part, index) => {
    if (part && part !== 'index.md') {
      currentPath += `/${part.replace('.md', '')}`
      const text = part
        .replace('.md', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      result.push({
        text,
        link: currentPath
      })
    }
  })
  
  return result
})
</script>

<style scoped>
.breadcrumbs {
  padding: 1rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
}

.breadcrumbs ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.breadcrumbs li {
  display: flex;
  align-items: center;
}

.breadcrumbs a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.breadcrumbs .separator {
  margin: 0 0.5rem;
  color: var(--vp-c-text-2);
}

.breadcrumbs .current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
</style> 