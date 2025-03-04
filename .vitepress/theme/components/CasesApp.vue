<template>
  <div class="container">
    <h1>Кейсы</h1>
    <CasesFilter :items="items" v-model:filter="filter" @update:filter="filter = $event"/>
    <div class="items">
      <div class="item" v-for="(item, index) in filteredItems" :key="index">
        <a class="item__link"
           :href="item.intLink || item.extLink"
           :target="item.intLink ? '_self' : '_blank'"
        >
          <div class="item__box">
            <div class="item__title">{{ item.title }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { items } from './data.ts'
import CasesFilter from './CasesFilter.vue'

interface Item {
  title: string;
  intLink?: string;
  extLink?: string;
  type?: string;
}

export default {
  components: {
    CasesFilter
  },
  data() {
    return {
      filter: 'all',
      items: items as Item[],
      visibleItems: 12,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    filteredItems() {
      if (this.filter === 'all') {
        return this.items.slice(0, this.visibleItems);
      } else {
        return this.items.filter(item => item.type === this.filter).slice(0, this.visibleItems);
      }
    },
  },
  methods: {
    loadMore() {
      this.visibleItems += 3;
    },
    handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && this.visibleItems < this.items.length) {
        this.loadMore();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 80px 64px 48px;
  letter-spacing: 0;
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
  }
}

.container {
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  padding-bottom: 128px;
}

.item {
  width: 100%;
  min-height: 140px;
  padding: 8px;

  @media (min-width: 640px) {
    width: calc(100% / 2);
  }
  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  @media (min-width: 960px) {
    width: calc(100% / 3);
  }

  &__link {
    display: block;
    height: 100%;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    background-color: var(--vp-c-bg-soft);
    color: inherit;
    text-decoration: inherit;
    transition: border-color 0.25s, background-color 0.25s;
    touch-action: manipulation;
    cursor: pointer;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 24px;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  &__detail {
    padding-top: 16px;
  }
}
</style>
