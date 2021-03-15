// alert('JS is loaded')

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0
//right button navigation
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})
//left button navigation
leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0 ){
        activeSlide = slides.length -1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

//function that sets background image for active slide picture

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

//changes background image
function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}
