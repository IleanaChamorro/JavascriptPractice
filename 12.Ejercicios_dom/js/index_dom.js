import hamburgerMenu from "../dom/script.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import { moveBall, shortcuts } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
import scrollTopButton from "../dom/boton_scroll.js";
import darkTheme from "../dom/tema_oscuro.js";
import responsiveMedia from "../dom/objeto_responsive.js";
import responsiveTester from "../dom/prueba_responsive.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Nov 13, 2023 00:00:00", "Feliz Cumpleaños 🤓🤓");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia("gmaps", 
    "(min-width: 1024px)", 
    `<a href="https://goo.gl/maps/oCM5CFtk2zuCzAXL6" target="_blank" rel="noopener">Ver Mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889453!2d-58.383759084232906!3d-34.60373446500708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1668818092655!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e , ".ball", ".stage");
})
darkTheme(".dark-theme-btn", "dark-mode");