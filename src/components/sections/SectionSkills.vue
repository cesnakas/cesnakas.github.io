<template>
  <section class="section my-5 py-5" id="skills">
    <div class="container">

      <div class='row row-cols-3 row-cols-md-6 g-3 justify-content-center'>
        <div class='col' v-for='item in items' :key='item.id'>
          <figure class='card h-100 justify-content-center bg-body-tertiary border-0'>
            <img v-if='item.img' :src="`images/` + item.img" class="figure-img mt-2 mx-auto" :alt="item.name">
            <figcaption class="figure-caption text-center text-warning">{{ item.name }}</figcaption>
          </figure>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'JavaScript', img: 'javascript.svg' },
        { name: 'TypeScript', img: 'typescript.svg' },
        { name: 'Node.js', img: 'node.svg' },
        { name: 'HTML', img: 'html.svg' },
        { name: 'CSS', img: 'css.svg' },
        { name: 'Sass/SCSS', img: 'sass.svg' },
        { name: 'Git', img: 'git.svg' },
        { name: 'Gulp', img: 'gulp.svg' },
        { name: 'Webpack', img: 'webpack.svg' },
        { name: 'Vite', img: 'vite.svg' },
        { name: 'Vue.js', img: 'vue.svg' },
        { name: 'Vuex', img: 'vuex.svg' },
        { name: 'Vue Router', img: 'vue-router.svg' },
        { name: 'Pinia', img: 'pinia.svg' },
        { name: 'React', img: 'react.svg' },
        { name: 'Bootstrap 5', img: 'bootstrap.svg' },
        { name: 'BEM', img: 'bem.svg' },
        { name: 'jQuery', img: 'jquery.svg' },
        { name: 'HTTP', img: 'http.svg' },
        { name: 'REST API' },
        { name: 'WebSocket', img: 'websocket.svg' },
        { name: 'Axios', img: 'axios.svg' },
        { name: 'Handlebars', img: 'handlebars.svg' },
        { name: 'Figma', img: 'figma.svg' },
        { name: 'WebStorm', img: 'webstorm.svg' },
        { name: 'PhpStorm', img: 'phpstorm.svg' },
        { name: 'macOS', img: 'macos.svg' },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.figure-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  object-position: center;
}
</style>
