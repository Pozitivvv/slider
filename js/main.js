const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');
let timer;
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrenSlide = ind => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrenSlide(index);
    } else {
        index++;
        prepareCurrenSlide(index);
    }
    autoSlider();
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrenSlide(index);
    } else {
        index--;
        prepareCurrenSlide(index);
    }
};


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrenSlide(index);
    });
});

const autoSlider = () => {
    timer = setTimeout(nextSlide, 5000);
};

autoSlider();


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);