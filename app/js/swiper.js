const slider = document.querySelector('.layouts__slider')
if (slider) {
  let mySwiper = new Swiper(slider, {
    //Количество слайдов на странице
    slidesPerView: 3,
    // slidesPerView: 2.7,

    // Отступы между слайдами
    // spaceBetween: -100,
    spaceBetween: 95,

    slideClass: 'layouts__slider-item',
    wrapperClass: 'layouts__slider-wrapper',

    // Кнопки управления
    navigation : {
      nextEl : '.layouts__btn-next',
      prevEl : '.layouts__btn-prev',
    },

    // Отключение свайпов на ПК
    // simulateTouch : false,

    //Бесконечная прокрутка
    loop: true,

    // Центральный слайд
    centeredSlides : true,
  })
}