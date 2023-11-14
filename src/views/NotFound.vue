<template>
  <section class="py-5 my-5">
    <div class="container">
      <div class="align-items-center justify-content-center row">
        <div class="col-lg-5 mb-5 mb-lg-0 text-center text-lg-end">
          <picture>
            <source srcset="@/assets/images/cesnakas.webp" type="image/webp" />
            <source srcset="@/assets/images/cesnakas.png" type="image/png" />
            <img class="col-9 me-lg-4 rounded-circle" src="@/assets/images/cesnakas.webp" alt="Sergei Česnakas"/>
          </picture>
        </div>
        <div class="col-lg-7">
          <h1 class="ms-lg-4 mb-4 text-danger display-1">[ 404 ]</h1>
          <p class="ms-lg-4 mb-4 text-danger col-lg-9 display-6 mb-lg-5">Страница не найдена</p>
          <div class="-flex-column align-items-start d-flex gap-3">
            <a href="/" class="ms-lg-4 btn btn-outline-warning px-4 rounded-5" role="button">На главную</a>
            <a href="javascript:history.back();" class="btn px-4 rounded-5 btn-outline-secondary" type="button">Вернуться обратно</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.row {
  @media (min-width: 992px) {
    position: relative;
    min-height: calc(100vh - 3rem - 3rem - 3rem - 3rem);
  }
}
</style>
