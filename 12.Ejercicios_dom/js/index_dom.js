import hamburgerMenu from "../dom/script.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import { moveBall, shortcuts } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Nov 13, 2022 03:32:19", "Feliz Cumpleaños 🤓🤓");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e , ".ball", ".stage");
})