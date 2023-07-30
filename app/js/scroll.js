
const menulinks = document.querySelectorAll('.header__link[data-goto')
menulinks.forEach(item => {
  item.addEventListener('click', scrollToSection)
});
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

const burgerlink = document.querySelectorAll('.header__burger-link')

// burgerlink.forEach(item => {
//   item
// })

