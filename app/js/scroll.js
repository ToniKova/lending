
const menulinks = document.querySelectorAll('.header__link[data-goto')
menulinks.forEach(item => {
  item.addEventListener('click', scrollToSection)

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
});

// const anhors = document.querySelectorAll('a[href*="#"')

// for (let elem of anhors) {
//   elem.addEventListener('click', (e) => {
//     e.preventDefault()
//     const blockId = elem.getAttribute('href')
//     document.querySelector('' + blockId).scrollIntoView({
//       behavior:'smooth',
//       block:'start'
//     })
//      const  header = document.querySelector('.header').offsetHeight
//      console.log(header)

    
//   })
// }

// const blockSection = document.querySelector('.news') 
    // const blockValue = blockSection.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
    // console.log(blockValue)
