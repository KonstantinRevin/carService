// new Swiper('.image-slider', {
//     navigation: {
//         nextEL: '.swiper-button-next',
//         prevEL: '.swiper-button-prev'
//     },
// });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
  
    // If we need pagination

    pagination: {
      el: '.swiper-pagination',
    //   dynamicBullets: true ,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });