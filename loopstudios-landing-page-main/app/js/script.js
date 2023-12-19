const header = document.querySelector('#header')
const headerToggleBtn = document.querySelector('.header__toggle')
const headerCloseBtn = document.querySelector('.header__close')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

headerToggleBtn.addEventListener('click', () => {
    header.classList.add('active')
})
headerCloseBtn.addEventListener('click', () => {
    header.classList.remove('active')
})