<template>
  <div class="container">
    <h1>Кейсы</h1>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <a class="item__link" :href="item.link" target="_blank">
          <div class="item__box">
            <div class="item__title">{{ item.title }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'pixelplus.ru',
          link: 'https://pixelplus.ru'
        },
        {
          title: 'tikkurila.moscow',
          link: 'https://tikkurila.moscow'
        },
        {
          title: 'makfa.ru',
          link: 'https://makfa.ru'
        },
        {
          title: 'sagitta-stk.ru',
          link: 'https://sagitta-stk.ru'
        },
      ]
    }
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
