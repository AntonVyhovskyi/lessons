const linkKontakt = document.querySelector('[href="index.html#kontakt"]');
console.log(linkKontakt);
linkKontakt.addEventListener('click', function() {
    burger.classList.toggle('header__burger_close')
    mobileMenu.classList.toggle('mobile-menu_open')
})
