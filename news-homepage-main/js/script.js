const openNavbarMobileBtn = document.querySelector('svg.icon-menu')
const closeNavbarMobileBtn = document.querySelector('.nav-mobile svg')
const navBarMobile = document.querySelector('.nav-mobile')
const overlay = document.querySelector('.overlay')

openNavbarMobileBtn.addEventListener('click', () => {
    navBarMobile.classList.add('active')
    overlay.classList.add('active')
})

navBarMobile.addEventListener('click', () => {
    navBarMobile.classList.remove('active')
    overlay.classList.remove('active')
})


