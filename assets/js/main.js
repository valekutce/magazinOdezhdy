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

    // Слайдер Страница О нас

    $('.about-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 769,
              settings: {
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
    });

    // Мобильное меню

    let burg = document.querySelector('.burg'),
    mobMenu = document.querySelector('.header_menu_wrap');

    burg.addEventListener('click', ()=> {
        burg.classList.toggle('burg_activ');
        mobMenu.classList.toggle('header_menu_wrap_activ');
    });


  });