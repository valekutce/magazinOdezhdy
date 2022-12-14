$(document).ready(function(){

    // Слайдер Главной Страницы Сайта

    $('.season_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '',
        nextArrow: '<div class="arrow"><img src="./assets/img/seasonSlider/Arrow.svg" alt="icon"></div>',
        dots: true,
    });

    // Мобильное меню

    let burg = document.querySelector('.burg'),
    mobMenu = document.querySelector('.header_menu_wrap');

    burg.addEventListener('click', ()=> {
        burg.classList.toggle('burg_activ');
        mobMenu.classList.toggle('header_menu_wrap_activ');
    });


  });