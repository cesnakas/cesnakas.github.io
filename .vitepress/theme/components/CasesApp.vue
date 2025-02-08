<template>
  <div class="container">
    <h1>Кейсы</h1>

    <div class="filter">
      <button @click="filter='all'">Все <span class="count">{{ typeCounts.all || items.length }}</span></button>
      <button @click="filter='web-service'">Веб-сервисы <span class="count">{{ typeCounts['web-service'] || 0 }}</span></button>
      <button @click="filter='e-shop'">Интернет-магазины <span class="count">{{ typeCounts['e-shop'] || 0 }}</span></button>
      <button @click="filter='portal'">Порталы <span class="count">{{ typeCounts.portal || 0 }}</span></button>
      <button @click="filter='company'">Сайты компании <span class="count">{{ typeCounts.company || 0 }}</span></button>
      <button @click="filter='promo'">Промо-сайты <span class="count">{{ typeCounts.promo || 0 }}</span></button>
    </div>

    <div class="items">
      <div class="item" v-for="(item, index) in filteredItems" :key="index">
        <a class="item__link" :href="item.link" target="_blank">
          <div class="item__box">
            <div class="item__title">{{ item.title }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { items } from './data.ts';

interface Item {
  title: string;
  link: string;
  type?: string;
}

export default {
  data() {
    return {
      filter: 'all',
      items: items as Item[],
    }
  },
  computed: {
    filteredItems() {
      if (this.filter === 'all') {
        return this.items;
      } else {
        return this.items.filter(item => item.type === this.filter);
      }
    },
    typeCounts() {
      return this.items.reduce((counts, item) => {
        if (item.type) {
          counts[item.type] = (counts[item.type] || 0) + 1;
        }
        return counts;
      }, {});
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
  padding: 8px;

  @media (min-width: 640px) {
    width: calc(100% / 3);
  }
  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  @media (min-width: 960px) {
    width: calc(100% / 4);
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
}
</style>
