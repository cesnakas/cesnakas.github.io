<template>
  <section class="py-5 my-5">
    <div class="container">
      <div class="hero-header row align-items-center justify-content-center">
        <div class="col-lg-5 text-center text-lg-end mb-5 mb-lg-0">
          <picture>
            <source srcset="@/assets/images/cesnakas.webp" type="image/webp" />
            <source srcset="@/assets/images/cesnakas.png" type="image/png" />
            <img
              class="col-9 rounded-circle me-lg-4"
              src="@/assets/images/cesnakas.webp"
              alt="Sergei Česnakas"
            />
          </picture>
        </div>

        <div class="col-lg-7">
          <div
            id="carouselProfessions"
            class="carousel slide carousel-fade ms-lg-4 mb-3 text-muted"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active"><h4 class="fs-5">Frontend Developer</h4></div>
              <div class="carousel-item"><h4 class="fs-5">Vue.js Developer</h4></div>
              <div class="carousel-item"><h4 class="fs-5">React Developer</h4></div>
              <div class="carousel-item"><h4 class="fs-5">Fullstack Developer</h4></div>
            </div>
          </div>

          <h1 class="h1 ms-lg-4 mb-4 text-warning">Sergei Česnakas</h1>

          <p class="col-lg-9 ms-lg-4 text-muted">
            Vestibulum viverra leo nec dui ultricies, ut molestie sem euismod. Pellentesque vestibulum, ex quis tempor consectetur, eros nisl interdum nulla, sit amet dignissim justo orci non augue.
          </p>
          <p class="col-lg-9 ms-lg-4 mb-4 mb-lg-5 text-muted">
            — Do what you love... Love what you do...
          </p>

          <a class="btn btn-outline-warning rounded-5 ms-lg-4 px-4" href="https://t.me/cesnakas" target="_blank" role="button">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.hero-header {
  @media (min-width: 992px) {
    position: relative;
    min-height: calc(100vh - 3rem - 3rem - 3rem - 3rem);
  }
}
</style>
