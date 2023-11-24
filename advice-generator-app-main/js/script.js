const adviceId = document.querySelector('#advice-id')
const advice = document.querySelector('#advice')
const generateAdviceBtn = document.querySelector('.advice-card button')

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(result => result.json())
        .then(data => {
            adviceId.innerHTML = data?.slip.id
            advice.innerHTML = data?.slip.advice
        })
}

document.addEventListener('DOMContentLoaded', () => {
    generateAdvice()
})

generateAdviceBtn.addEventListener('click', () => {
    generateAdviceBtn.disabled = true
    generateAdvice()
    generateAdviceBtn.disabled = false
})