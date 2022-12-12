document.querySelector('.services-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.services-accordion__item')) {
       event.target.closest('.services-accordion__item')
           .classList.toggle('services-accordion__item--active');
    }
});

// document.querySelector('.header-wrapper-nav__burger').addEventListener('click', (event) => {
//   document.querySelector('.visually-hidden').classList.toggle('visually-hidden-active');
// });

// document.querySelector('.visually-hidden__close').addEventListener('click', (event) => {
//   document.querySelector('.visually-hidden').classList.toggle('visually-hidden-active');
// });



swiper = new Swiper('.slider', {

    pagination: {
      el: '.swiper-pagination',  
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // direction: 'vertical',
    loop: true ,
    clicable: true,
    speed: 800,
    // slidesPerView: 3,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      slideShadows: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
        
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      
      }
    }

   
  
    // // clicable: true
   
  });

  // let windowInnerWidth = document.documentElement.clientWidth;
  // console.log(windowInnerWidth);


let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popup = document.querySelector('.popup-burger'); // Само окно
let openPopupButtons = document.querySelectorAll('.header-wrapper-nav__burger'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup-burger__close'); // Кнопка для скрытия окна


openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup-bg-active'); // Добавляем класс 'active' для фона
      // popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('popup-bg-active'); // Убираем активный класс с фона
  // popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('popup-bg-active'); // Убираем активный класс с фона
      // popup.classList.remove('active'); // И с окна
  }
});

////////////////////////////////////////////////////////////////////

let popupBgRequest = document.querySelector('.popup-bg-request'); // Фон попап окна
let popupRequest = document.querySelector('.popup'); // Само окно
let openPopupButtonsRequest = document.querySelectorAll('.btn-header'); // Кнопки для показа окна
let closePopupButtonRequest = document.querySelector('.popup__close'); // Кнопка для скрытия окна


openPopupButtonsRequest.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBgRequest.classList.add('popup-bg-request-active'); // Добавляем класс 'active' для фона
      // popup.classList.add('active'); // И для самого окна
  })
});

closePopupButtonRequest.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBgRequest.classList.remove('popup-bg-request-active'); // Убираем активный класс с фона
  // popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBgRequest) { // Если цель клика - фот, то:
      popupBgRequest.classList.remove('popup-bg-request-active'); // Убираем активный класс с фона
      // popup.classList.remove('active'); // И с окна
  }
});

////////////////////////////////////////////////////////////////////

let popupBgSuccess = document.querySelector('.popup-bg-success'); // Фон попап окна
let popupSuccess = document.querySelector('.popup-success'); // Само окно
let openPopupButtonsSuccess = document.querySelectorAll('.popup-btn'); // Кнопки для показа окна
let closePopupButtonSuccess = document.querySelector('.popup-success__close'); // Кнопка для скрытия окна


openPopupButtonsSuccess.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBgSuccess.classList.add('popup-bg-success-active');
      popupBgRequest.classList.remove('popup-bg-request-active'); // Добавляем класс 'active' для фона
      // popup.classList.add('active'); // И для самого окна
  })
});

closePopupButtonSuccess.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBgSuccess.classList.remove('popup-bg-success-active'); // Убираем активный класс с фона
  // popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBgSuccess) { // Если цель клика - фот, то:
      popupBgSuccess.classList.remove('popup-bg-success-active'); // Убираем активный класс с фона
      // popup.classList.remove('active'); // И с окна
  }
});