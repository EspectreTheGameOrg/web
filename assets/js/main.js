(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        jQuery(window).trigger('resize').trigger('scroll');
        //  offcanvas-menu

        //    click-action
        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".close-menu").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });

        $(".off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });


              
        $(".product-slider-active").owlCarousel({
            items:1,
            nav:true,
            dot:false,
            loop:true,
            margin:70,
            stagePadding:70,
            autoplay:false,
            navText: ['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    stagePadding:0,
                   
                },
                768:{
                    items:1,
                    stagePadding:0,
                   
                },
                992:{
                    items:2,
                   
                },
                1200:{
                    items:3,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	