// <--------- INTRO ---------->

const intro = document.querySelector('#intro');

window.addEventListener('load', () => {
    const main = document.querySelector('#main');
    setTimeout(() => {
        intro.style.opacity = '0';
        window.location.href = '#home';
        main.style.display = 'unset';
    }, 3000)
    setTimeout(() => main.style.opacity = '1', 3050);
});

// <--------- RESIZE ---------->

window.addEventListener('resize', () => {
    window.location.href = window.location.hash;
});

// <--------- LOAD ---------->

window.addEventListener('load', () => {
    setTimeout(() => intro.style.display = 'none', 3000);
})

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id === hash) {
            section.style.display = 'flex';
            section.style.animation = 'anime-page .25s';
        } else {
            section.style.display = 'none';
        }
    });
});

// <--------- SLIDE ---------->

const arrowLeft = document.querySelector('.btn-arrow-left');
const arrowRight = document.querySelector('.btn-arrow-right');

const slides = ['#codes', '#codes-slide-two', '#codes-slide-tree', '#codes-slide-four'];
let sinal = 0;

window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (slides.includes(hash)) {
        if (hash === '#codes') {
            arrowRight.style.display = 'flex';
            arrowLeft.style.display = 'none';
        } else if (sinal === slides.length - 1) {
            arrowLeft.style.display = 'flex';
            arrowRight.style.display = 'none';
        } else {
            arrowLeft.style.display = 'flex';
            arrowRight.style.display = 'flex';
        }
    } else {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
    }
});

arrowLeft.addEventListener('click', () => {
    sinal = Math.max(sinal - 1, 0);
    location.hash = slides[sinal];
});

arrowRight.addEventListener('click', () => {
    sinal = Math.min(sinal + 1, slides.length - 1);
    location.hash = slides[sinal];
});

// <--------- HELLO ---------->

let turno = null;

const hello = () => {
    const msg = document.querySelector('span.msg');
    msg.textContent = `${turno}, seja bem-vindo(a)!`;
    msg.style.display = 'block';
    msg.style.animation = 'msg 5s ease-in-out';
    setTimeout(() => msg.style.display = 'none', 5000);
}

window.addEventListener('DOMContentLoaded', () => {
    const data = new Date();
    const hora = data.getHours();

    if (hora >= 0 && hora < 12) turno = 'Bom dia';
    else if (hora >= 12 && hora < 18) turno = 'Boa tarde';
    else turno = 'Boa noite';

    setTimeout(() => hello(), 4000);
});