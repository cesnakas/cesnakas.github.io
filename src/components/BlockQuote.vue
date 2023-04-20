<template>
  <figure class="text-end mt-5">
    <blockquote class="blockquote">
      <p class="small">
        <small v-for="quote in quotes">{{ quote }}</small>
      </p>
    </blockquote>
    <figcaption class="blockquote-footer">Someone famous</figcaption>
  </figure>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        'Твой результат — Твой самый крутой аргумент',
        'Цитата 2'
      ]
    }
  }
}
</script>
