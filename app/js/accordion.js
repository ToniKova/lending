const accordion = document.querySelectorAll('.popular__accordion')
const wrapperAccordion = document.querySelector('.popular__acсordion-wrapper')


accordion.forEach(item =>  {
  item.addEventListener('click', popOpenAccordion)
})

function popOpenAccordion (event) {
  const currentBox = event.target.closest('.popular__accordion')
  const prev = event.target.closest('.popular__acсordion-wrapper')
  const curentContent = event.target.nextElementSibling
  // const accordioIcon = document.querySelectorAll('.popular__acсordion-icon')

  currentBox.classList.toggle('accordion-open')
  currentBox.classList.toggle('active-icon')
  prev.classList.toggle('active-padding')

  if (currentBox.classList.contains('accordion-open')) {
    curentContent.style.maxHeight = curentContent.scrollHeight + 'px'

  } else {
    curentContent.style.maxHeight = 0;
    curentContent.classList.remove('active')
  }
}


