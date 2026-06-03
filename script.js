window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 400) {
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

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards .card");
    const btn = document.getElementById("toggleCards");

    let expanded = false;

    function atualizarCards() {
        const limite = window.innerWidth <= 900 ? 4 : 8;

        cards.forEach((card, index) => {
            if (!expanded && index >= limite) {
                card.classList.add("hidden-card");
            } else {
                card.classList.remove("hidden-card");
            }
        });

        btn.textContent = expanded ? "Mostrar menos" : "Mostrar mais";
    }

    atualizarCards();

    btn.addEventListener("click", () => {
        expanded = !expanded;
        atualizarCards();
    });

    window.addEventListener("resize", atualizarCards);
});
