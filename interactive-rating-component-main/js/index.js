const ratingsCardForm = document.querySelector('.card form')
const thanksCard = document.querySelector('.card.thank--you')

ratingsCardForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const ratingValue = ratingsCardForm.querySelector('input[name="rating"]:checked')?.value
    const ratingCard = ratingsCardForm.closest('.card')
    thanksCard.querySelector('.rating--selected span').innerHTML = ratingValue
    ratingCard.classList.add('card--hidden')
    thanksCard.classList.remove('card--hidden')
})