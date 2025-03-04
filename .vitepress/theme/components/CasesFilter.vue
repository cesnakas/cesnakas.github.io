<template>
  <div class="filter">
    <button
        v-for="(count, type) in typeCounts"
        :key="type"
        @click="$emit('update:filter', type)"
    >
      {{ filterLabels[type] }}
      <span class="count">{{ count }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      filterLabels: {
        all: 'Все',
        eComm: 'E-Commerce',
        company: 'Сайты компании',
        med: 'Медицина',
        service: 'Веб-сервисы',
        catalog: 'Сайты-каталоги',
        portal: 'Порталы',
        promo: 'Промо-сайты'
      },
    }
  },
  computed: {
    typeCounts() {
      return this.items.reduce((counts, item) => {
        if (item.type) {
          counts[item.type] = (counts[item.type] || 0) + 1;
        }
        return counts;
      }, { all: this.items.length });
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px 48px;

  button {
    position: relative;
    padding: 12px 16px;
    margin: 8px;
    border: 1px solid var(--vp-c-yellow-1);
    border-radius: 12px;
    background-color: var(--vp-c-bg-soft);
    color: inherit;
    text-decoration: inherit;
    transition: border-color 0.25s, background-color 0.25s;
    touch-action: manipulation;
    cursor: pointer;

    .count {
      position: absolute;
      top: -.75em;
      right: -.75em;
      padding: 2px 6px;
      border: 1px solid var(--vp-c-yellow-1);
      border-radius: 12px;
      background-color: var(--vp-c-yellow-1);
      color: var(--vp-c-neutral-inverse);
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
    }
  }
}
</style>
