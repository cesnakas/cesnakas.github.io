---
layout: page
title: Навыки
---

<div class="content-container">
  <h1>Навыки и образование</h1>

  <script setup>
  import Skills from '.vitepress/theme/components/Skills.vue'
  import Certificates from '.vitepress/theme/components/Certificates.vue'
  </script>

  <Skills />

  <Certificates />
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
