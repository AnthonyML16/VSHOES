/* Dark mode */
let darkmode = document.querySelector('#darkmode');

function cambiarLogo() {
    /* document.getElementById("logo").src = "img/isotipo_white.png"; */
    const imagenes = document.querySelectorAll(".logo_iso");
    for (const imagen of imagenes) {
        imagen.src = "img/isotipo_white.png";
    }
}

function cambiarLogoOriginal() {
    /* document.getElementById("logo").src = "img/isotipo_white.png"; */
    const imagenes = document.querySelectorAll(".logo_iso");
    for (const imagen of imagenes) {
        imagen.src = "img/isotipo_black.png";
    }
}

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        cambiarLogo();
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        cambiarLogoOriginal();
    }
}

/* Menu */
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

/* Responsive */
const windowWidth = window.innerWidth;

/* Swipper */
if (windowWidth < 480) {
    var swiper = new Swiper(".nuevos-modelos", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
} else if (windowWidth < 769) {
    var swiper = new Swiper(".nuevos-modelos", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
} else {
    var swiper = new Swiper(".nuevos-modelos", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}