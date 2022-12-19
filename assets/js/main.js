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

    let topicalItemWidth = document.querySelectorAll('.topical_item');
    let topicalItemTitle = document.querySelectorAll('.back_content h3');
    let topicalItemBack = document.querySelectorAll('.topical_item_back');
    let topicalItemBackContent = document.querySelectorAll('.topical_item_back .back_content');
    let topicalItemBackDescr = document.querySelectorAll('.topical_item_back .back_content p');
    let backContentMore = document.querySelectorAll('.back_content_more');
    let cardProduct = document.querySelector('.cardProduct');
    let cardProductClose = document.querySelector('.cardProduct_close');

    for (let i = 0; i < topicalItemWidth.length; i++) {

        if (topicalItemWidth[i].offsetWidth >= 300) {

            topicalItemBackContent.forEach((item)=> {
                item.style.padding = "50px 20px";
            });
            for (let i = 0; i < topicalItemTitle.length; i++) {
                topicalItemTitle[i].style.display = "block";
            }
            topicalItemBackDescr.forEach((parag)=> {
                parag.style.fontSize = "16px";
                parag.style.lineHeight = "30px";
            });
            
        }

        if (topicalItemWidth[i].offsetWidth == 250) {

            topicalItemBackContent.forEach((item)=> {
                item.style.padding = "15px 20px 15px";
            });
            
        }

        if (topicalItemWidth[i].offsetWidth >= 200 && topicalItemWidth[i].offsetWidth < 250 ) {
            for (let i = 0; i < topicalItemTitle.length; i++) {
                topicalItemTitle[i].style.display = "none";
            }
            topicalItemBackContent.forEach((item)=> {
                item.style.padding = "20px 20px";
            });
        } 
        
        if (topicalItemWidth[i].offsetWidth < 200) {
            for (let i = 0; i < topicalItemTitle.length; i++) {
                topicalItemTitle[i].style.display = "none";
            }

            topicalItemBackContent.forEach((item)=> {
                item.style.padding = "15px";
            });

            topicalItemBackDescr.forEach((parag)=> {
                parag.style.fontSize = "14px";
                parag.style.lineHeight = "17px";
            });
        }

    }
 
// Карта Товара
    backContentMore.forEach((cardClick)=> {
        cardClick.addEventListener('click', (e)=> {
            e.preventDefault();
            cardProduct.classList.add('cardProduct_activ');
            setTimeout(()=> {
                cardProductClose.classList.add('cardProduct_close_activ');
            }, 1000);
        });
    });

    cardProductClose.addEventListener('click', ()=> {
        cardProductClose.classList.remove('cardProduct_close_activ');
        setTimeout(()=> {
            cardProduct.classList.remove('cardProduct_activ');
        }, 500);
    });



  });