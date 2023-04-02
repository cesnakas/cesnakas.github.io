<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-5 text-dark-emphasis">Services</h2>

      <div class="row row-cols-1 row-cols-lg-3 g-3">
        <div v-for="item in items" class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-dark-emphasis mb-3">{{ item.title }}</h5>
              <p class="card-text text-muted">{{ item.text }}</p>
            </div>
            <div class="card-body d-flex align-items-end gap-2">
              <a href="#" class="btn btn-outline-secondary rounded-5 px-4" role="button"
                >Подробнее</a
              >
            </div>
          </div>
        </div>
      </div>

      <figure class="text-end mt-5">
        <blockquote class="blockquote">
          <p class="small">
            <small>Твой результат — Твой самый крутой аргумент</small>
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">Someone famous</figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Технический анализ',
          text: 'Технический анализ складывается из оценки времени и стоимости работ. Работаю по Scrum методологии — разбиваю основные задачи на более мелкие, выстраиваю их преоритет и определяю срок выполнения.'
        },
        {
          title: 'Gulp / Webpack',
          text: 'Для более быстрой сборки фронтэндной части использую Gulp/Webpack. Такая сборка легко интегрируется в любой проект использующий систему управления (CMS) или если нужна простая верстка.'
        },
        {
          title: 'Vue / React',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laudantium mollitia quasi totam? Accusamus ad aspernatur, blanditiis cupiditate delectus ea enim hic incidunt omnis quaerat quis quos ratione repudiandae, voluptatem!'
        },
        {
          title: 'Битрикс / WordPress',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur commodi cum cumque, eligendi est expedita in ipsam iste iusto labore libero minima nihil porro quisquam reiciendis suscipit voluptate?'
        },
        {
          title: 'Laravel / Symfony',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur nam natus omnis quas tenetur vel. Dolorum eaque eum exercitationem iste minima omnis quae reprehenderit repudiandae saepe ullam, vero voluptatem.'
        },
        {
          title: 'eCommerce',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laudantium mollitia quasi totam? Accusamus ad aspernatur, blanditiis cupiditate delectus ea enim hic incidunt omnis quaerat quis quos ratione repudiandae, voluptatem!'
        }
      ]
    }
  }
}
</script>
