import hamburgerMenu from "../dom/script.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import { moveBall, shortcuts } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
import scrollTopButton from "../dom/boton_scroll.js";
import darkTheme from "../dom/tema_oscuro.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Nov 13, 2023 00:00:00", "Feliz Cumpleaños 🤓🤓");
    scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e , ".ball", ".stage");
})
darkTheme(".dark-theme-btn", "dark-mode");