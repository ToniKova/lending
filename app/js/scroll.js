
const menulinks = document.querySelectorAll('.header__link[data-goto]')
const birgerLunk = document.querySelectorAll('.header__burger-link')
menulinks.forEach(item => {
  item.addEventListener('click', scrollToSection)
});
birgerLunk.forEach(item => {
  item.addEventListener('click',scrollToSection)
})
function scrollToSection (e) {
  const target = e.target
  const gotoBlock = document.querySelector(target.dataset.goto)
  const blockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
  window.scrollTo({
    top:blockValue,
    behavior:'smooth'
  })
  e.preventDefault()
}




