window.addEventListener('DOMContentLoaded', function() {


  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
   
      // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 2
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3
      },
    },
  
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  

  });

});