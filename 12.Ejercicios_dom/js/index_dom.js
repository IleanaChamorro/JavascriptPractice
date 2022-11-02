import hamburgerMenu from "../dom/script.js";
import { digitalClock, alarm } from "../dom/reloj.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
});