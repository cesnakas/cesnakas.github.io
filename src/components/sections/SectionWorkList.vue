<template>
  <section class="py-5">
    <div class="container">

      <h2 class="mb-5 text-dark-emphasis invisible">Projects</h2>

      <div class="masonry row row-cols-1 row-cols-lg-3 g-4">
        <div v-for="(project, index) in projects" class="col" :key="index">

          <div class="card border-warning">
            <svg xmlns="http://www.w3.org/2000/svg" class="card-img-top" width="100%" height="180" role="img" aria-label="Image">
              <rect width="100%" height="100%" fill="var(--bs-tertiary-bg)"></rect>
              <text x="50%" y="50%" fill="var(--bs-warning)" dy=".5em" text-anchor="middle">{{ project.name }}</text>
            </svg>
            <div class="card-body text-secondary-emphasis">

              <h5 class="card-title text-warning">{{ project.name }}</h5>

              <p class="card-text">{{ project.description }}</p>

              <p class="card-text">
                <small class="text-body-tertiary">{{ project.date }}</small>
              </p>

              <div v-if="project.tech" class="card-text small fw-light text-warning">
                {{ project.tech.join(',\n') }}
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- // -->

      <div v-if="projects.length <= 9" class="d-grid gap-2 col-3 mx-auto mt-5">
        <button class="btn btn-outline-warning">More...</button>
      </div>

    </div>
  </section>
</template>

<script>
import Masonry from 'masonry-layout'
import projectData from '@/components/sections/work/data'
export default {
  el: '.masonry',
  data() {
    return {
      projects: projectData
    }
  },
  mounted() {
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
