<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="main-header row align-items-center justify-content-center">
        <div class="col text-center text-lg-start mb-5 mb-lg-0">
          <h1 class="display-1 text-body-emphasis">Work ://</h1>
        </div>
      </div>
    </div>
  </section>
  <SectionWorkList />
</template>

<script setup>
import SectionWorkList from '@/components/sections/SectionWorkList.vue'
</script>

<style lang="scss" scoped>
.main-header {
  position: relative;
  min-height: calc(100vh - 3rem - 3rem - 3rem - 3rem);
}
</style>
