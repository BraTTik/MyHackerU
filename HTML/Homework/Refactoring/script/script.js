let menuOpener = document.querySelector('.menu_menu-opener');
let navElem = document.querySelector('.navigation_block');


menuOpener.addEventListener('click', function() {
    navElem.classList.toggle('active');
    document.querySelector('.menu_menu-opener div').classList.toggle('active');
    document.querySelector('.logo-block').classList.toggle('active');
});