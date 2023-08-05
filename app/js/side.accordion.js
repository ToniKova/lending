const allButton = document.querySelector('.catalog__all-button')
const buttonOnePage = document.querySelectorAll('.catalog__side-accordion')

buttonOnePage.forEach(item => {
  item.addEventListener('click', openSideAccordion)
})

function openSideAccordion (event) {
  const allButton = document.querySelector('.catalog__all-button')
  const nearestParent = event.target.closest('.catalog__side-accordion') 
  const currentContent = event.target.nextElementSibling
  nearestParent.classList.toggle('open-side-accordion')
  nearestParent.classList.toggle('background-active')
  allButton.classList.remove('background-active')

  if (nearestParent.classList.contains('open-side-accordion')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
  } else {
    currentContent.style.maxHeight = 0 
  }
  document.addEventListener('click', (event) => {
    const target = event.target
    
    if (target.classList.contains('catalog__all-button')) {
      allButton.classList.add('background-active')
      currentContent.style.maxHeight = 0 
      if (nearestParent.classList.contains('open-side-accordion')){
        nearestParent.classList.remove('open-side-accordion')
      } else {

      }
      buttonOnePage.forEach(item => {
        item.classList.remove('background-active')
      })
    } 
  })
}




