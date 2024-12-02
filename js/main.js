// PROMOTIONS

$(document).ready(function($) {
    $('.promotions').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev promotions-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next promotions-next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

// PROMOTIONS

// Events

$(document).ready(function($) {
    $('.event').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev promotions-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next promotions-next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});

// Events

// Navbar scroll 

window.addEventListener('scroll', function() {
    var header = document.getElementById('header-bar');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Navbar scroll