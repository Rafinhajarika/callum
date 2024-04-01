// swiper_js_slider_started
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// swiper_js_slider_finished

// header_background_started
  $(window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});
// header_background_finished