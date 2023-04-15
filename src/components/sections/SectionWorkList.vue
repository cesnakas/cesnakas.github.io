<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-5 text-dark-emphasis invisible">Projects</h2>
      <div class="masonry row row-cols-1 row-cols-lg-3 g-4">
        <div v-for="(project, index) in projects" class="col" :key="index">
          <div class="card border-warning">
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
      projects: projectData,
      showProjects: 3,
      totalProjects: 0
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
