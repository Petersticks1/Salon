(function ($) {
  "use strict";

  var glowTimer;
  function resetGlowTimer() {
    clearTimeout(glowTimer);
    $('.sticky-booking-btn').removeClass('attention-glow');
    glowTimer = setTimeout(function () {
      if ($('.sticky-booking-btn').hasClass('show')) {
        $('.sticky-booking-btn').addClass('attention-glow');
      }
    }, 10000); // 10 seconds
  }

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    resetGlowTimer();
    if (scroll < 120) {
      $(".sticky-navbar").removeClass("sticky");
      $('.back-to-top').hide();
      $('.sticky-booking-btn').removeClass("show");
    } else {
      $(".sticky-navbar").addClass("sticky");
      $('.back-to-top').show();
      $('.sticky-booking-btn').addClass("show");
    }
  });

  resetGlowTimer(); // Initial start


  /*===================================*
    CounterUp  JS
  *===================================*/
  $(window).on('scroll', function () {
    function winScrollPosition() {
      var scrollPos = $(window).scrollTop(),
        winHeight = $(window).height();
      var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
      return scrollPosition;
    }
    var elemOffset = $('.odometer').offset().top;
    if (elemOffset < winScrollPosition()) {

      $('.odometer').each(function () {
        $(this).html($(this).data('count-to'));
      });
    }
  });

  var swiper = new Swiper(".portfolioswiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });


  var swiper2 = new Swiper(".portfolioswiper2", {
    loop: true,
    // spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  new Swiper(".reviewswiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

  new Swiper(".stylers-style-1-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    slidesPerGroup: 1,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 480px
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,

      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1

      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,

      },

    },
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".logoswiper", {
    slidesPerView: 5,
    breakpoints: {
      // when window width is >= 480px
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,

      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1,

      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 3,
    grabCursor: true,
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".portfolio-swiper", {
    slidesPerView: 4,
    breakpoints: {
      280: { // when window width is >= 480px
        slidesPerView: 1,
        slidesPerGroup: 1,

      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1,

      },
      768: {  // when window width is >= 768px
        slidesPerView: 3,
        slidesPerGroup: 1,

      },
      1000: { // when window width is >= 1000px
        slidesPerView: 4,
        slidesPerGroup: 1,

      }
    },

    loop: true,
    slidesPerGroup: 1,
    grabCursor: true,
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".offerswiper", {
    slidesPerView: 5,
    breakpoints: {
      // when window width is >= 480px
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,

      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1,

      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    },
    spaceBetween: 40,
    loop: true,
    slidesPerGroup: 3,
    grabCursor: true,
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*====================
      Magnific Popup
  ====================*/
  $('.image-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Video popup
  $('.video-popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


  // $('ul.nav li.dropdown').hover(function () {
  //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  // }, function () {
  //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  // });


  /*===================*
    ANIMATION JS
  *===================*/
  $(function () {

    function ckScrollInit(items, trigger) {
      items.each(function () {
        var ckElement = $(this),
          AnimationClass = ckElement.attr('data-animation'),
          AnimationDelay = ckElement.attr('data-animation-delay');

        ckElement.css({
          '-webkit-animation-delay': AnimationDelay,
          'animation-delay': AnimationDelay,
          opacity: 0
        });

        var ckTrigger = (trigger) ? trigger : ckElement;

        ckTrigger.waypoint(function () {
          ckElement.addClass("animated").css("opacity", "1");
          ckElement.addClass('animated').addClass(AnimationClass);
        }, {
          triggerOnce: true,
          offset: '90%'
        });
      });
    }

    ckScrollInit($('.animation'));
    ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));

  });

  new WOW().init();

  /*===================================*
    Draggable Booking Button
  *===================================*/
  var $btn = $('.sticky-booking-btn');
  var isDragging = false;
  var startX, startY, initialRight, initialBottom;

  $btn.on('mousedown touchstart', function (e) {
    resetGlowTimer();
    isDragging = false;
    var pointer = e.type === 'touchstart' ? e.originalEvent.touches[0] : e;

    startX = pointer.clientX;
    startY = pointer.clientY;

    // Get current position relative to viewport
    var rect = $btn[0].getBoundingClientRect();
    initialRight = $(window).width() - rect.right;
    initialBottom = $(window).height() - rect.bottom;

    $(document).on('mousemove.drag touchmove.drag', function (e) {
      var movePointer = e.type === 'touchmove' ? e.originalEvent.touches[0] : e;
      var dx = movePointer.clientX - startX;
      var dy = movePointer.clientY - startY;

      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        isDragging = true;
        $btn.addClass('dragging');

        // Update position using right/bottom to maintain responsiveness
        var newRight = initialRight - dx;
        var newBottom = initialBottom - dy;

        $btn.css({
          'right': newRight + 'px',
          'bottom': newBottom + 'px',
          'left': 'auto',
          'top': 'auto'
        });
      }
    });

    $(document).on('mouseup.drag touchend.drag', function () {
      $(document).off('.drag');
      setTimeout(function () {
        isDragging = false;
        $btn.removeClass('dragging');
      }, 1);
    });
  });

  $btn.on('click', function (e) {
    if (isDragging) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });

})(jQuery);