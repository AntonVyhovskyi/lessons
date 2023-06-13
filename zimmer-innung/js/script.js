const header = document.querySelector('.header')
window.addEventListener("scroll", function () {
    header.classList.toggle('header_background', window.scrollY > 200)
  }
)

const mobileMenu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.header__burger')
burger.addEventListener ('click', function () {
    burger.classList.toggle('header__burger_close')
    mobileMenu.classList.toggle('mobile-menu_open')
})




