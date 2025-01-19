const button = document.querySelector('.about-me-btn')
const popupCard = document.querySelector('.popup-card')

const close =  document.querySelector('.close')

button.addEventListener('click', ()=>{
    popupCard.classList.add('popup-card-show')
})

close.addEventListener('click', ()=>{
    popupCard.classList.remove('popup-card-show')
})
