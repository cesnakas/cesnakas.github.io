---
layout: page
title: Экспириенс
---

<div class="content-container">
  <h1>Экспириенс</h1>

  <script setup>
  import Experience from '.vitepress/theme/components/Experience.vue'
  import ExperienceStats from '.vitepress/theme/components/ExperienceStats.vue'
  </script>

  <ExperienceStats />
  <Experience />
</div>

<style>
.content-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px;
}

.content-container h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}
</style>
