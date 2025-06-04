<script setup lang="ts">
// Component logic here
</script>

<template>
  <section class="VPWorkDetail">
    <div class="container">
      <h1>Custom Layout!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur corporis dolorum est et ex explicabo harum in inventore ipsa minus odio perspiciatis praesentium, quae quas quidem quis suscipit, vel.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.VPWorkDetail {
  position: relative;
  padding: 32px 24px 0;

  @media (min-width: 640px) {
    padding: 32px 48px 0;
  }

  @media (min-width: 960px) {
    padding: 48px 64px 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}
</style>
