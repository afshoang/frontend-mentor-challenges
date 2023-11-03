// get all faq card
const allFaqCard = document.querySelectorAll('.accordion-faq .faq-card')

allFaqCard.forEach((faqCard, index) => {
    faqCard.addEventListener('click', function handleClickFaqCard(e) {
        // close old faq is opening first
        allFaqCard.forEach((ele, idx) => {
            if (index !== idx) ele.classList.remove('active')
        })
        // open this faq
        faqCard.classList.toggle('active')
    })
})