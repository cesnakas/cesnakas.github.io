// Navbar
document.onreadystatechange = () => {
  let lastScrollPosition = 0
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', function () {
    lastScrollPosition = window.scrollY
    if (lastScrollPosition > 100) navbar.classList.remove('pt-lg-5')
    else navbar.classList.add('pt-lg-5')
  })
}
