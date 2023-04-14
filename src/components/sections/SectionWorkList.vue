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
              <p class="card-text">
                <small class="text-muted">{{ project.date }}</small>
              </p>
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
import data from './work/data'
import Masonry from 'masonry-layout'
export default {
  el: '.masonry',
  data() {
    return {
      projects: [
        {
          name: 'proprognozy.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ex minima obcaecati possimus? Accusamus alias aperiam, distinctio eos est maxime molestias obcaecati possimus quod, temporibus totam voluptatum.',
          date: '2023/04'
        },
        {
          name: 'iesa.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nisi obcaecati odio provident tempora. Aperiam dolores eos facilis fugit iusto laboriosam laudantium necessitatibus odit, perspiciatis quaerat quasi sapiente veritatis voluptas.',
          date: '2023/03'
        },
        {
          name: 'pixeltools.kz',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur corporis doloremque eius eos expedita hic illum in ipsum laboriosam magnam mollitia nesciunt nisi obcaecati odit, officia placeat quis quod repudiandae sapiente, sint sit tempora ut! Accusamus, ad aut, consequuntur inventore, nemo nesciunt obcaecati optio quae quia rem sequi tenetur.',
          date: '2023/02'
        },
        {
          name: 'tools.pixelplus.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore illo illum nisi possimus quam rem similique temporibus vel. Ad fugiat libero veritatis? Ab aperiam aspernatur consectetur cum dignissimos doloremque dolorum ducimus enim error, esse est, et fuga fugiat ipsum labore laborum laudantium libero minima molestias odio officiis perspiciatis placeat, provident quas quasi rem repudiandae sed sit sunt vero! At, dolorem eum iste numquam omnis sed temporibus.',
          date: '2022/12'
        },
        {
          name: 'pixelplus.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: '2022/12'
        },
        {
          name: 'oknastar.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, commodi consequuntur cum delectus dolore, eligendi expedita iure laudantium nisi obcaecati omnis quam reprehenderit saepe similique suscipit ut veritatis.',
          date: '2022/10'
        },
        {
          name: 'cultfood.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: '2022/09'
        },
        {
          name: 'open-urology.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: '2022/09'
        },
        {
          name: 'tikkurila.moscow',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          date: '2022'
        },
        {
          name: 'mirkrasok.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: '2022'
        },
        {
          name: 'kriston-kadastr.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, eveniet ipsam ipsum labore neque provident quas quis, reprehenderit sequi veniam, voluptates? Ipsam numquam obcaecati, optio quibusdam rem sunt.',
          date: '2022'
        },
        {
          name: 'makfa.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ratione, tempora. Debitis delectus, distinctio dolore incidunt magnam perferendis. Culpa cupiditate eos eum illum molestias neque obcaecati sed velit. Qui, quidem.',
          date: '2022'
        },
        {
          image: 'uralz.ru.jpg',
          height: 'height: 220px',
          name: 'sagitta-stk.ru',
          description:
            'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: '2022'
        },
        {
          image: 'tsd-atol.ru.jpg',
          height: 'height: 210px',
          name: 'tsd-atol.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet dolore eius ex fugit odio placeat sint tempora unde ut? Cum doloremque fugiat harum in incidunt nihil omnis quisquam repudiandae.',
          date: '2022'
        },
        {
          name: 'uralz.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci animi cupiditate dicta dignissimos error est incidunt ipsum iure maxime molestias, neque sapiente similique suscipit temporibus unde? Eaque excepturi quae quibusdam sapiente tenetur.',
          date: '2022'
        },
        {
          name: 'logicroof.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut blanditiis deleniti dicta est, et hic maiores molestias mollitia officiis placeat quidem, recusandae saepe veritatis! Consectetur doloribus dolorum et facilis illum impedit nesciunt sed tempore ut vero!',
          date: '2022'
        },
        {
          name: 'sabellino.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque delectus eveniet excepturi id nihil, officia perferendis, quo reprehenderit repudiandae veniam voluptas voluptatum. Ad adipisci autem dolorem dolores eaque eum illum necessitatibus nihil non numquam praesentium quia, sequi totam, velit veniam. Aperiam, est maxime. Accusantium aliquam nulla velit voluptates?',
          date: '2022'
        },
        {
          name: 'gu10.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt labore numquam praesentium vel? Ab architecto, assumenda cumque dicta earum eum fugiat incidunt modi soluta ullam voluptatum.',
          date: '2022'
        },
        {
          name: 'gvozdhoztorg.ru',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda aut cupiditate deserunt dignissimos dolor dolores dolorum eos eveniet ex expedita explicabo facilis fuga hic, id itaque laboriosam maxime minus molestiae natus nobis porro saepe sapiente sed tempora temporibus vel veniam veritatis voluptates. Deleniti, sapiente!',
          date: '2022'
        },
        {
          name: 'aqvalite.ru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti eius enim et facilis impedit necessitatibus, numquam quibusdam sequi voluptas voluptatibus voluptatum! Alias ex harum, hic nisi sit veniam voluptas?',
          date: '2022'
        },
        {
          name: 'webrel.org',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores at aut dolor doloremque doloribus et exercitationem, explicabo fugit, illum nisi quidem reiciendis repellat soluta tempore velit vitae voluptate.',
          date: '2022'
        },
        {
          name: 'mydoctor32.ru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At hic illo natus, nulla provident quod vel! Ad aspernatur commodi consectetur dolor dolorem, impedit, laboriosam magni non, obcaecati rem vel velit?',
          date: '2022'
        },
        {
          name: 'fibroblok.ru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, animi at culpa ea eligendi ex expedita facere incidunt laboriosam molestias nam nihil nisi nobis omnis quae quam, ut, voluptatem.',
          date: '2022'
        },
        {
          name: 'easylex.ru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum distinctio doloribus, error expedita explicabo in laudantium modi neque odio odit optio quaerat quas repellendus sed similique ullam voluptates.',
          date: '2022'
        },
        {
          name: 'tverstroymash.ru',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi commodi consequuntur dignissimos, distinctio dolore ducimus enim error, expedita fuga fugiat, laudantium reiciendis rem sequi soluta ut voluptas voluptate?',
          date: '2022'
        },
        {
          name: 'zolushkacleans.ru',
          description: '',
          date: '2022'
        },
        {
          name: 'medalis.ru',
          description: '',
          date: '2022'
        },
        {
          name: 'cirpp.ru',
          description: '',
          date: '2022'
        },
        {
          name: 'linxdatacenter.com',
          description: '',
          date: '2022'
        },
        {
          name: 'mcdl.ru',
          description: '',
          date: '2022'
        },
        {
          name: 'powervideo.ru',
          description: '',
          date: '2022'
        },
        {
          name: 'arbaum.ru',
          description: '',
          date: '2022'
        }
      ],
      showProjects: 3,
      totalProjects: 0
    }
  },
  mounted() {
    // this.totalProjects = this.projects.length
    // console.log(this.projects.length)
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
