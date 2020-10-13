; (function ($) {
    "use strict";
    if ($('.swiper-container-testimonial').length) {
        var mySwiperTestimonial = new Swiper('.swiper-container-testimonial', {
            // Optional parameters
            loop: true,
            speed: 1200,
            slidesPerView: 1, // or 'auto'
            centeredSlides: true,
            effect: '', // 'cube', 'fade', 'coverflow',
            flipEffect: {
                slideShadows: true, // Enables slides shadows
            },
            grabCursor: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next-nosuper',
                prevEl: '.swiper-button-prev-nosuper',
            },
            autoplay: {
                delay: 20000,
            }
        })
    }


    if ($('.swiper-container-project').length) {
        var mySwiperProject = new Swiper('.swiper-container-project', {
            // Optional parameters
            loop: true,
            speed: 1200,
            slidesPerView: 1, // or 'auto'
            centeredSlides: true,
            effect: '', // 'cube', 'fade', 'coverflow',
            flipEffect: {
                slideShadows: true, // Enables slides shadows
            },
            grabCursor: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next-super',
                prevEl: '.swiper-button-prev-super',
            },
            autoplay: {
                delay: 20000,
            },
            spaceBetween: 2000,
        })
    }





    if ($('.swiper-container-clients').length) {
        var mySwiperClientsReviews = new Swiper('.swiper-container-clients', {
            // Optional parameters
            loop: true,
            speed: 1200,
            slidesPerView: 1, // or 'auto'
            centeredSlides: true,
            effect: '', // 'cube', 'fade', 'coverflow',
            flipEffect: {
                slideShadows: true, // Enables slides shadows
            },
            grabCursor: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next-clients',
                prevEl: '.swiper-button-prev-clients',
            },
            autoplay: {
                delay: 20000,
            }
        })
    }


    $(".menu-text").click(function () {
        $(".swiper-wrapper").addClass("js-wrapping");
    });

    $(".close-menu").click(function () {
        $(".swiper-wrapper").removeClass("js-wrapping");
    });

    $(window).on('load', function () {
        $(".swiper-wrapper").removeClass("js-wrapping");
    });


    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial-carousel.default', mySwiperTestimonial);
        elementorFrontend.hooks.addAction('frontend/element_ready/project-slider.default', mySwiperProject);
        elementorFrontend.hooks.addAction('frontend/element_ready/clients-testimonial-carousel.default', mySwiperClientsReviews);
    });


})(jQuery);