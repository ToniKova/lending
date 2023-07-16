// const faqAccordion = document.querySelectorAll('.questions__accordion')
const faqWrapperAccordion = document.querySelectorAll('.questions__accordion-wrapper')

faqWrapperAccordion.forEach(item => {
  item.addEventListener('click', openAccordion) 
})

function openAccordion (event) {
  const currentBox = event.target.closest('.questions__accordion-wrapper')
  // const faqWrapperAccordion = document.querySelectorAll('.questions__accordion-wrapper')
  const prev = event.target.closest('.questions__accordion-wrapper')
  const curentContent = event.target.nextElementSibling

  currentBox.classList.toggle('open-accordion')
  currentBox.classList.toggle('padding-active')
  prev.classList.toggle('active-icon')

  if (currentBox.classList.contains('open-accordion')) {
    curentContent.style.maxHeight = curentContent.scrollHeight + 'px'
  } else {
    curentContent.style.maxHeight = 0 
  }
}