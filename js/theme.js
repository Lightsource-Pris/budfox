//  Theme Custom jquery file,

      // Created on   : 15/05/2017.
      // Theme Name   : Snappy.
      // Description  : Snappy |**| Responsive Business Template.
      // Version      : 1.0.
      // Author       : @TheMazine.
      // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


"use strict";

// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });

        });
  }
}



// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}



// Theme-banner slider
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:true,
      delay:7000,
      navigation: {
         bullets: {
                    enable:true,
                    hide_onmobile:true,
                    style:"hermes",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"right",
                    v_align:"bottom",
                    h_offset:50,
                    v_offset:30,
                    space:10,
                    tmp:''
                  }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,303],
                gridheight:[800,800,800,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                },
    });
  };
}


// Main Menu Function
function themeMenu () {
  var menu= $("#mega-menu-holder>ul");
  if(menu.length) {
    menu.slimmenu({
      resizeWidth: '991',
      animSpeed:'medium',
      indentChildren: true,
    });
  }
}


// Fancybox
function FancypopUp () {
  var popBox = $(".fancybox");
  if (popBox.length) {
      popBox.fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}


// Fancybox Video
function FancypopUpVideo () {
  if ($(".fancy-video").length) {
      $(".fancy-video").fancybox({
      maxWidth  : 1080,
      maxHeight : 1080,
      fitToView : false,
      width   : '85%',
      height    : '85%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  };
}


// Service Slider
function serviceSlider () {
  var cSlider = $ (".service-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Testimonial SLider
function testimonialSlider () {
  var cSlider = $ (".testimonial-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        items:1
    })
  }
}


// Team Slider
function teamSldier () {
  var tSlider = $ (".team-sldier");
  if(tSlider.length) {
      tSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:2
            }
        }
    })
  }
}


// Blog Slider
function blogSldier () {
  var bSlider = $ (".blog-slider");
  if(bSlider.length) {
      bSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}



// Partner Logo
function partnerSlider () {
  var partner = $("#partenr-logo");
  if(partner.length) {
    partner.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        lazyLoad:true,
        dragEndSpeed:1000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  }
}

// Sidebar Slider
function sidebarSlider () {
  var cSlider = $ (".snappy-sidebar-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1200,
        lazyLoad:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        items:1
    })
  }
}


// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Area Chart function
function areaChart () {
  if($("#chartContainer").length) {
        var chart = new CanvasJS.Chart("chartContainer",
            {
                animationEnabled: true,
                axisX:{
                  tickColor: "rgba(0,0,0,0.0)",
                  gridColor: "rgba(0,0,0,0.0)" ,
                },
                axisY:{
                  tickColor: "rgba(0,0,0,0.0)" ,
                  gridColor: "rgba(0,0,0,0.04)" ,
                  gridThickness: 1
                },

                data: [
                {        
                    legendMarkerType: "square",
                    type: "area",
                    color: "rgba(53,184,248,1)",
                    markerSize: 0,
                    label: "",
                    dataPoints: [
                        { x: 10, y: 35 },
                        { x: 20, y: 50 },
                        { x: 30, y: 60 },
                        { x: 40, y: 45 },
                        { x: 50, y: 40 },
                        { x: 60, y: 50 },
                        { x: 70, y: 70 },
                        { x: 80, y: 75 },
                        { x: 90, y: 60 },
                        { x: 100, y: 50 },
                        { x: 110, y: 40 },
                        { x: 120, y: 50 },
                        { x: 130, y: 65 },
                        { x: 140, y: 0 },
                      ]
                }
                
                
                
                ]
            });

        chart.render();
  }
}


// Scroll to top
function scrollToTop () {
  var scrollTop = $ (".scroll-top")
  if (scrollTop.length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        scrollTop.fadeIn();
      } else {
        scrollTop.fadeOut();
      }
    });

    //Click event to scroll to top
      scrollTop.on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  };
}



// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");

    });

    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });

  };
}



// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     BannerSlider ();
     CounterNumberChanger ();
     themeMenu ();
     FancypopUp ();
     FancypopUpVideo ();
     serviceSlider ();
     testimonialSlider ();
     teamSldier ();
     blogSldier ();
     partnerSlider ();
     sidebarSlider ();
     mixitupGallery ();
     areaChart ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     themeAccrodion ();
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
