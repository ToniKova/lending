const openBtn = document.querySelector('.header__burger-open')
openBtn.addEventListener('click', openBurger)

function openBurger () {
  const burgerWrapper = document.querySelector('.header__burger-wrapper')
  burgerWrapper.classList.toggle('burger-open')
  openBtn.classList.toggle('active-icon')
  document.body.classList.toggle('no-scroll')
}