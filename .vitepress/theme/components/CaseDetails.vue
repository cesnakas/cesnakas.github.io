<template>
  <div class="case-details">
    <a :href="'/cases/' + itemCase.detailLink">Перейти к кейсу</a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    itemCase: {
      type: Object,
      required: true
    }
  },
  // methods: {
  //   goToPage(detailLink) {
  //     this.$router.push(detailLink);
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.case-details {
  margin: 0 auto;
  padding-top: 16px;
}
</style>
