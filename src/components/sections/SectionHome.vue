<template>
  <section class="py-5 my-5">
    <div class="container">
      <div class="front-header row align-items-center justify-content-center">
        <div class="col-lg-5 text-center text-lg-end mb-5 mb-lg-0">
          <picture>
            <source srcset="@/assets/images/cesnakas.webp" type="image/webp" />
            <source srcset="@/assets//images/cesnakas.png" type="image/png" />
            <img
              class="col-9 rounded-circle me-lg-4"
              src="@/assets/images/cesnakas.webp"
              alt="Sergei Česnakas"
            />
          </picture>
        </div>

        <div class="col-lg-7">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade ms-lg-4 mb-3 text-muted"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active"><h4 class="fs-6">Software Engineer</h4></div>
              <div class="carousel-item"><h4 class="fs-6">Frontend developer</h4></div>
              <div class="carousel-item"><h4 class="fs-6">Backend PHP developer</h4></div>
              <div class="carousel-item"><h4 class="fs-6">Fullstack developer</h4></div>
            </div>
          </div>

          <h1 class="h1 ms-lg-4 mb-4 text-warning">Sergei Česnakas</h1>

          <p class="col-lg-9 ms-lg-4 text-muted">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
            абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору
            отточить навык публичных выступлений в домашних условиях.
          </p>
          <p class="col-lg-9 ms-lg-4 mb-4 mb-lg-5 text-muted">
            — Делай то, что любишь... Люби то, что делаешь...
          </p>

          <button type="button" class="btn btn-outline-warning rounded-5 ms-lg-4 px-4">
            Напишите мне
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.front-header {
  @media (min-width: 992px) {
    position: relative;
    min-height: calc(100vh - 3rem - 3rem - 3rem - 3rem);
  }
}
</style>
