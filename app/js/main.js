$(".search-form__button--op").click(function(){
    $(".search-form").toggleClass("active");
  });


  $(".header-top__burger").click(function(){
    $(this).toggleClass("active");
    $(".main-menu").toggleClass("active");
  });
  var events_slider = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    autoplay:true,
    loop:true,
    centeredSlides: true,
    // init: false,
  
    breakpoints: {
      640: {
        centeredSlides: false,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1024: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
    }
  });

  $('.events__container .swiper-container').each(function(){
    var events_slider = new Swiper(this, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    autoplay:true,
    loop:true,
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
    breakpoints: {
        640: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      } 
  });
  });

  $('.ticker__text').simplemarquee({
    speed: 100,
    cycles: Infinity,
    space: 100,
    delayBetweenCycles: 0,
    handleHover: false,
    handleResize: true
});

(function($) {
  $(function() {
   
    $('div.tabs').on('click', 'li.tabs__caption:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
   
  });
  })(jQuery);


  windowSize = $(window).width(); 
  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
});

$(".main-menu> ul > li > span").on('click', function(){

  
  if(windowSize < 1025){
  if ($(this).hasClass("js-active")) {
      $(this).removeClass("js-active");
      $(this).next().removeClass("js-active");
      $(this).next().slideToggle();
      
  } else {
    
    $(this).closest(".main-menu").find("ul.js-active").slideToggle();
    $(this).closest(".main-menu").find("ul.js-active").removeClass("js-active");
    $(".main-menu > ul > li > span").removeClass("js-active");
    $(this).addClass("js-active");
    $(this).next().addClass("js-active");
    $(this).next().slideToggle();
  }
  }  
});

