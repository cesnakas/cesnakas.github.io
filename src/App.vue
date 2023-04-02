<template>
  <Header />
  <main class="min-vh-100" role="main">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
