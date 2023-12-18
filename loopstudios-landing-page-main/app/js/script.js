const header = document.querySelector('#header')
const headerToggleBtn = document.querySelector('.header__toggle')
const headerCloseBtn = document.querySelector('.header__close')

headerToggleBtn.addEventListener('click', () => {
    header.classList.add('active')
})
headerCloseBtn.addEventListener('click', () => {
    header.classList.remove('active')
})