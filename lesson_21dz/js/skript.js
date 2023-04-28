
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    header.classList.toggle("header_background", window.scrollY > 150)
 })

 window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    header.classList.toggle("header_background2", window.scrollY < 150)
 })

 const burger = document.querySelector(".header__burger")
 burger.addEventListener("click", function () {
    let menu2 = document.querySelector(".header__menu2");
    menu2.classList.toggle("header__menu2_hidden")
 })

 burger.addEventListener("click", function () {
    let menu2 = document.querySelector(".header__menu2");
    menu2.classList.toggle("header__menu2_hidden-off")
 })