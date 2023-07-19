const bestSection = document.querySelector('.best')
const headerInnre = document.querySelector('.header__inner')

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY
  let florScroll = Math.floor(scrollTop)
  if (florScroll >= 50 ) {
    headerInnre.classList.add('border')
  } else if(florScroll < 50) {
    headerInnre.classList.remove('border')
  }
})
