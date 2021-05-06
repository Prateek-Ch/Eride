var window, jQuery, document;

(function ($) {
    "use strict";
    //this code is for submenu
    $(document).ready(function () {

        var window_width = $(window).width();
    // submenu parent add class
        $('.dropdown-menu').each(function(){
            $(this).closest('li').addClass('dropdown');
        });
        
    var dropdown = $('.dropdown');
        
    if(window_width < 768){
            dropdown.find('a').on('click', function(){
                $(this).siblings('ul').slideToggle();
                $(this).toggleClass('active');
                $(this).closest('li').toggleClass('mb-none');
            });
        }
        //Header-Bottom searchForm
        $('.cartSearch li.search a').on( "click", function(){
            $('.searchForm').toggleClass('active');
        });
        $('.searchForm i').on( "click", function(){
            $('.searchForm').toggleClass('active');
        });
    //This code is for owl Carousel
    if ($.fn.owlCarousel) {
            var autoplay = 6000,
                smartSpeed_c = 700,
                hero_slider = $('.hero_slider');
            //Hero_Slider_crsl
        
            hero_slider.owlCarousel({
                nav: true,
                dots: true,
                autoplay: true,
                loop: true,
                items: 1,
                animation: true,
                touchDrag:false,
                mouseDrag:false,
                smartSpeed: smartSpeed_c,
                autoplayTimeout: autoplay
            });
            $('.slider_prg_in').css({
                animationName: 'slider_prg_in'
            });
            hero_slider.on('translate.owl.carousel', function(){
                $('.slider_prg_in').css({
                    animationName: ''
                });
            });
            hero_slider.on('translated.owl.carousel', function(){
                $('.slider_prg_in').css({
                    animationName: 'slider_prg_in'
                });
            });
            $('.slider_prg_in').css({
                animationDuration: (autoplay/1000) + 's',
            });
            //tihs code is for slider effect
            hero_slider.on('translate.owl.carousel', function() {
                $('.romana_hero_text h1').removeClass('slideInLeft animated').hide();
                $('.romana_hero_text p').removeClass('slideInLeft animated').hide();
                $('.romana_hero_text .romana_slider_btn').removeClass('slideInRight animated').hide();
            });
            hero_slider.on('translated.owl.carousel', function() {
                $('.owl-item.active .romana_hero_text h1').addClass('slideInLeft animated').show();
                $('.owl-item.active .romana_hero_text p').addClass('slideInLeft animated').show();
                $('.owl-item.active .romana_hero_text .romana_slider_btn').addClass('slideInLeft animated').show();
            });
        //client crsl 
        $('.romana_client_crsl').owlCarousel({
            nav:false,
            dots:true,
            autoplay: true,
            loop: true,
            margin: 0,
            items:1,
            smartSpeed: 1000,
            responsiveClass: true,
            touchDrag:false,
            mouseDrag:false,
        });
    }
    });
    // Preloder
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $("body").removeClass("preloader_active"); 
})(jQuery);

