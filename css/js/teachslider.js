
var swiper = new Swiper(".slider-content", {
    slidesPerView: 1,
    spaceBetween: 20,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    grapCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  