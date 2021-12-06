// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//

window.addEventListener('load', () => {
    let left = document.querySelector('.btn-left');
    let right = document.querySelector('.btn-right');

    let slide = document.querySelector('.carusel__slide');
    const images = document.querySelectorAll('.carusel__slide img');

    let count = 0;
    const stepSize = images[0].clientWidth;

    slide.style.transform = 'translateX(' + `${-stepSize * count}px`;
    right.addEventListener('click', () => {
        count >= images.length - 1 ? count = -1 : null;


        slide.classList.add('transformAnimation');
        count++;
        slide.style.transform = 'translateX(' + `${-stepSize * count}px`;

    })

    left.addEventListener('click', () => {
        if (count <= 0) count = images.length;


        slide.classList.add('transformAnimation');
        count--;
        slide.style.transform = 'translateX(' + `${-stepSize * count}px`;

    })
})

