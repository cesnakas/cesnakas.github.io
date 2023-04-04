<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-5 text-dark-emphasis invisible">Projects</h2>

      <div class="masonry row row-cols-1 row-cols-lg-3 g-4">
        <div v-for="(project, index) in projects" class="col" :key="index">
          <div class="card border-warning">
            <!--
            <svg xmlns="http://www.w3.org/2000/svg" class="card-img-top" width="100%" height="250" role="img" aria-label="{{ project.name }}">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-gray)"></rect>
              <text x="50%" y="50%" fill="var(--bs-emphasis-color)" dy=".5em" text-anchor="middle">{{ project.name }}</text>
            </svg>
            <img class="card-img-top opacity-50" :src="`./src/assets/images/work/` + project.image" alt="">
            -->
            <div class="card-body">
              <h5 class="card-title text-warning">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <div class="mb-3">
                <a href="#" class="card-link text-reset">Card link</a>
                <a href="#" class="card-link text-reset">Another link</a>
              </div>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="projects < projects.length || projects.length > projects">
        <button class="btn btn-outline-secondary" @click="projects += 5">show more...</button>
      </div>
    </div>
  </section>
</template>

<script>
import Masonry from 'masonry-layout'
export default {
  el: '.masonry',
  data() {
    return {
      projects: [
        {
          name: 'iesa.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nisi obcaecati odio provident tempora. Aperiam dolores eos facilis fugit iusto laboriosam laudantium necessitatibus odit, perspiciatis quaerat quasi sapiente veritatis voluptas.'
        },
        {
          name: 'pixeltools.kz',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur corporis doloremque eius eos expedita hic illum in ipsum laboriosam magnam mollitia nesciunt nisi obcaecati odit, officia placeat quis quod repudiandae sapiente, sint sit tempora ut! Accusamus, ad aut, consequuntur inventore, nemo nesciunt obcaecati optio quae quia rem sequi tenetur.'
        },
        {
          name: 'tools.pixelplus.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore illo illum nisi possimus quam rem similique temporibus vel. Ad fugiat libero veritatis? Ab aperiam aspernatur consectetur cum dignissimos doloremque dolorum ducimus enim error, esse est, et fuga fugiat ipsum labore laborum laudantium libero minima molestias odio officiis perspiciatis placeat, provident quas quasi rem repudiandae sed sit sunt vero! At, dolorem eum iste numquam omnis sed temporibus.'
        },
        {
          name: 'pixelplus.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name: 'oknastar.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, commodi consequuntur cum delectus dolore, eligendi expedita iure laudantium nisi obcaecati omnis quam reprehenderit saepe similique suscipit ut veritatis.'
        },
        {
          name: 'cultfood.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name: 'open-urology.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name: 'tikkurila.moscow',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          name: 'mirkrasok.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name: 'kriston-kadastr.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, eveniet ipsam ipsum labore neque provident quas quis, reprehenderit sequi veniam, voluptates? Ipsam numquam obcaecati, optio quibusdam rem sunt.'
        },
        {
          name: 'makfa.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ratione, tempora. Debitis delectus, distinctio dolore incidunt magnam perferendis. Culpa cupiditate eos eum illum molestias neque obcaecati sed velit. Qui, quidem.'
        },
        {
          image: 'uralz.ru.jpg',
          height: 'height: 220px',
          name: 'sagitta-stk.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          image: 'tsd-atol.ru.jpg',
          height: 'height: 210px',
          name: 'tsd-atol.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet dolore eius ex fugit odio placeat sint tempora unde ut? Cum doloremque fugiat harum in incidunt nihil omnis quisquam repudiandae.'
        }
      ],
      showProjects: 3,
      totalProjects: 0
    }
  },
  mounted() {
    this.totalProjects = this.projects.length
    console.log(this.projects.length)
    // if (this.projects.length > this.showProjects) {
    //   document.querySelector('.masonry .col').style.display = 'none';
    // }

    let msnry = new Masonry('.masonry', {
      itemSelector: '.col',
      percentPosition: true
    })
  }
}
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 240px;
  object-fit: cover;
  object-position: top center;
}
</style>
