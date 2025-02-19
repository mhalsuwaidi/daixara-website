

$(".navbar-toggler").click(function(){
  $(".navbar-collapse").toggleClass("menu-visible");
  $(".menu_overlay").toggleClass("menu-visible");
  $('body').css('overflow', 'hidden');	
}); 
$(".menu_close_btn").click(function(){
  $(".navbar-collapse").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".menu_overlay").removeClass("menu-visible");
  $('body').css('overflow', 'auto');
});
$(".menu_overlay").click(function(){
  $(".menu_overlay").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".navbar-collapse").removeClass("menu-visible");
  $('body').css('overflow', 'auto');
});


 $('.recentProjectSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
	centerPadding: '300px',
	swipeToSlide: true,
	slidesToScroll: 1,
	
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]

 });
 

$('.technology-stack-slider').owlCarousel({
    nav:false,
    margin:20,
	autoplay:true,
    loop:true,
    dots:false,
    smartSpeed:	500,	
	navText: [
    "<span><i class='fa-regular fa-arrow-left'></i></span>",
    "<span><i class='fa-regular fa-arrow-right'></i></span>"
  ], 
    responsive:{
      0:{
        items:2
      },
      600:{
        items:2
      },
      767:{
        items:4
      },
      1000:{
        items:5
      },
      1560:{
        items:6
      },
      1920:{
        items:6
      }
    }
  });
 
 
 $('.discoverSlider').owlCarousel({
    nav:false,
    margin:0,
	autoplay:true,
    loop:true,
    dots:false,
    smartSpeed:	500,	
	navText: [
    "<span><i class='fa-regular fa-arrow-left'></i></span>",
    "<span><i class='fa-regular fa-arrow-right'></i></span>"
  ], 
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:4
      },
      1560:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });
 

/*

$('.recentProjectSlider').owlCarousel({
    nav:true,
    margin:20,
	autoplay:false,
   loop:true,
    dots:false,
    smartSpeed:	500,
	//center: true,
	navText: [
    "<span><i class='fa-regular fa-arrow-left'></i></span>",
    "<span><i class='fa-regular fa-arrow-right'></i></span>"
  ],
  
  
	
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      767:{
        items:2,
		stagePadding:0,
      },
	  1000:{
        items:2,
		stagePadding:200,
      },
      1200:{
        items:2,
		stagePadding:300,
      },
      1370:{
        items:2,
		stagePadding:300,
      },
      1560:{
        items:2,
		stagePadding:400,
      }
    }
  });
  
  */
  
  
  $('.trustedPartnerSlider').owlCarousel({
    nav:false,
    margin:20,
	autoplay:true,
    loop:true,
    dots:false,
    smartSpeed:	500,
	navText: [
    "<span><i class='fa-regular fa-arrow-left'></i></span>",
    "<span><i class='fa-regular fa-arrow-right'></i></span>"
  ],
  
  
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:2
      },
      600:{
        items:2
      },
      767:{
        items:4
      },
      1000:{
        items:5
      },
      1560:{
        items:6
      },
      1920:{
        items:6
      }
    }
  });



$('.coursesListingSlider').owlCarousel({
    nav:true,
    margin:0,
	autoplay:false,
    loop:false,
    dots:false,
    smartSpeed:	500,
	/*navText: [
    "<span><i class='fa-light fa-arrow-left'></i></span>",
    "<span><i class='fa-light fa-arrow-right'></i></span>"
  ],
  */
  navContainer: '#customNav',
  navText: ["<span class='nav-button'><i class='fa-regular fa-arrow-left'></i></span>", "<span class='nav-button'><i class='fa-regular fa-arrow-right'></i></span>"],
	
	/*animateOut: 'fadeOut',
       animateIn: 'fadeIn',*/
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:4
      },
      1560:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });
  
  
  
$( ".header .navbar .navbar-nav li ul" ).find( "li" ) .closest("ul") .parent("li") .addClass( 'dropdown_menu' );
$(".header .navbar .navbar-nav li").click(function(){
  $(this).toggleClass("curent");
  $('.header .navbar .navbar-nav li').not($(this)).removeClass('curent');
});

$( ".popularCitySearchArea .popularCityList li ul" ).find( "li" ) .closest("ul") .parent("li") .addClass( 'dropdownMenu' );
$(".popularCitySearchArea .popularCityList .popularCityListItem .arrow").click(function(){
  $(this).parent().toggleClass("curent");
  $('.popularCitySearchArea .popularCityList .popularCityListItem .arrow').not($(this)).parent().removeClass('curent');
});
$(".sub-menu li").click(function(){
  $(this).toggleClass("curent2");
  $('.sub-menu li').not($(this)).removeClass('curent2');
});


$( ".modal" ).insertAfter( ".footer" );






/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";
	
	var OnlinePayment = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				
				this.BackgroundImage();	
			},
			
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},			

		}
	}
	jQuery(document).ready(function (){
		OnlinePayment.init();
	});

})();



// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})



 /*-----------------------------------
    Hover Tilt Effect
  -----------------------------------*/
  $(".tilt-effect").tilt({
    maxTilt: 6,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    transition: true,
  });
