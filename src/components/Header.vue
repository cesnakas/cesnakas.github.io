<template>
  <header class="navbar fixed-top pt-lg-5" role="banner">
    <div class="container">
      <a class="navbar-brand" href="/">Sergei Česnakas</a>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title invisible" id="offcanvasDarkNavbarLabel">Sergei Česnakas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center align-items-center h-100">
            <li v-for="item in items" class="nav-item">
              <RouterLink class="nav-link" :to="item.link">{{ item.linkTitle }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          linkTitle: 'About',
          link: '/'
        },
        {
          linkTitle: 'Resume',
          link: '/resume'
        },
        {
          linkTitle: 'Notes',
          link: '/notes'
        },
        {
          linkTitle: 'Work',
          link: '/work'
        },
        {
          linkTitle: 'Contact',
          link: '/contact'
        }
      ]
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      let lastScrollPosition = 0
      const navbar = document.querySelector('.navbar')
      window.addEventListener('scroll', function () {
        lastScrollPosition = window.scrollY
        if (lastScrollPosition > 100) navbar.classList.remove('pt-lg-5')
        else navbar.classList.add('pt-lg-5')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--bs-body-bg);
  transition: padding-top 0.15s ease-in-out;
}
</style>
