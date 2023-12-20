const newsLetter = document.querySelector('.news-letter')
const newsLetterForm = document.querySelector('form.news-letter__content__form')
const thanksCard = document.querySelector('.thanks-card')

newsLetterForm.addEventListener('submit' , (e) => {
    e.preventDefault()
    const inputEmail = newsLetterForm.querySelector('input[name="email"]')
    const formControl = inputEmail.closest('.form-input')
    if (!validateEmail(inputEmail.value)) {
        formControl.classList.add('error')
        const msg = formControl.querySelector('.message')
        msg.innerHTML = "Valid email required"
    } else {
        newsLetter.style.display = 'none'
        thanksCard.style.display = 'flex'
        thanksCard.style.opacity = 1
    }
})

function validateEmail (email) {
    return email.match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
};