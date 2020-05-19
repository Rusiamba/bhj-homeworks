const next = document.querySelector('.slider__arrow_next'),
      prev = document.querySelector('.slider__arrow_prev'),
      slides = document.querySelectorAll('.slider__items'),
      slideItem = document.querySelectorAll('.slider__item');


let index = 0;

const activeSlide = n => {
    console.log(n);
    for (slide of slideItem) {
        slide.classList.remove('active');
    }
    slideItem[n].classList.add('active');
}

const nextSlide = () => {
    if(index === slideItem.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index === 0) {
        index = slideItem.length - 1
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
