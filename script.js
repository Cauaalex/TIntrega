window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const header = document.querySelector("header");
const hero = document.querySelector(".hero-conteudo");

window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > 50 && window.scrollY < heroBottom) {
        // Está sobre o Hero/imagem azul
        header.classList.add("scrolled");
        header.classList.remove("white-section");

    } else if (window.scrollY >= heroBottom) {
        // Saiu da imagem e entrou no fundo branco
        header.classList.remove("scrolled");
        header.classList.add("white-section");

    } else {
        // Está no topo
        header.classList.remove("scrolled");
        header.classList.remove("white-section");
    }
});