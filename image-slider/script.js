const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

// Tombol
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

// Counter
let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX('+ (-size * counter) +'px)'

// Event utk tombol
nextBtn.addEventListener('click', function () {
    
    carouselSlide.style.transition = "transform 0.5s ease-in"
    counter++
    carouselSlide.style.transform = 'translateX('+ (-size * counter) +'px)'
})

prevBtn.addEventListener('click', function () {
    
    carouselSlide.style.transition = "transform 0.5s ease-in"
    counter--
    carouselSlide.style.transform = 'translateX('+ (-size * counter) +'px)'
})

carouselSlide.addEventListener('transitionend', function () {
    if (carouselImages[counter].id === 'lastSlide') {
        prevBtn.style.display = 'none'
    } else {
        prevBtn.style.display = 'block'
    }
    if (carouselImages[counter].id === 'firstSlide') {
        nextBtn.style.display = 'none'
    } else {
        nextBtn.style.display = 'block'
    }
})

// Tombol hilangnya
