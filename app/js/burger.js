const openBtn = document.querySelector('.header__burger-open')
openBtn.addEventListener('click', openBurger)

function openBurger () {
  const burgerlink = document.querySelectorAll('.header__burger-link')
  const burgerWrapper = document.querySelector('.header__burger-wrapper')
  burgerWrapper.classList.toggle('burger-open')
  openBtn.classList.toggle('active-icon-burger')
  document.body.classList.toggle('no-scroll')
  // debugger
  burgerlink.forEach(item => {
    item.addEventListener('click', closeBurger)
  })
  
}
function closeBurger () {
  // console.log(burgerWrapper)
  const burgerWrapper = document.querySelector('.header__burger-wrapper')
  burgerWrapper.classList.toggle('burger-open')
  openBtn.classList.toggle('active-icon-burger')
  document.body.classList.toggle('no-scroll')
  // popup.classList.toggle('burger-open')
}
// console.log(burgerlink)
