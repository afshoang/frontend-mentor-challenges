
const nav = document.querySelector('nav.header__nav')
const btnNavToggler = document.querySelector('button.nav-toggler')
const overlay = document.querySelector('.overlay')

btnNavToggler.addEventListener('click', (e) => {
    e.stopPropagation()
    const isToggled = btnNavToggler.getAttribute('aria-expanded')
    if (isToggled === 'true') {
        nav.classList.remove('active')
        overlay.classList.remove('show')
    } else {
        nav.classList.add('active')
        overlay.classList.add('show')
    }
    btnNavToggler.setAttribute('aria-expanded', isToggled === 'false' ? "true" : 'false')
})

// Handle click outside box
window.addEventListener('click', (e) => {
    console.log(nav.contains(e.target));
    // nav active and click outiside => close nav and removee overlay
    if (!nav.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active')
        overlay.classList.remove('show')
        btnNavToggler.setAttribute('aria-expanded', 'false')
    }
})