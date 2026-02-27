window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const logo = document.querySelector('.logo-animada');

window.addEventListener('scroll', () => {
    const posicaoLogo = logo.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicaoLogo < alturaTela - 100) {
        logo.classList.add('visivel');
    }
});

const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.querySelector('.seta.esquerda');
const setaDireita = document.querySelector('.seta.direita');
let index = 0;

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[i].classList.add('ativo');
}

setaDireita.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

setaEsquerda.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});