function mudarSlide(slideIndex) {
    const slides = document.querySelectorAll('.carrossel-slides .slide');
    const radios = document.querySelectorAll('input[type="radio"]');

    slides.forEach((slide, index) => {
        if (index === slideIndex - 1) {
            slide.style.display = 'block';
            radios[index].checked = true;
        } else {
            slide.style.display = 'none';
        }
    });
}