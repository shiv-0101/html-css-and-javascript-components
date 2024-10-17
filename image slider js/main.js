const slides = document.querySelectorAll('.slide')
let currentSlide = 0

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

prevBtn.addEventListener('click', function(){
    slides[currentSlide].style.display = 'none'
    currentSlide--
    if (currentSlide < 0){
        currentSlide = slides.length - 1
    }
    slides[currentSlide].style.display = 'block'
})

nextBtn.addEventListener('click', function(){
    slides[currentSlide].style.display = 'none'
    currentSlide++
    if (currentSlide >= slides.length){
        currentSlide = 0
    }
    slides[currentSlide].style.display = 'block'
})