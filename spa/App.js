import { Header } from "./app/components/Header.js";
import {Loader} from "./app/components/Loader.js";
import { Main } from "./app/components/Main.js";
import { Router } from "./app/components/Router.js";

export function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Main());
    Router();
}