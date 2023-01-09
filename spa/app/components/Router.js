import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import PostCard from "./PostCard.js";

export function Router(){
    const d = document,
    w = window,
    $main = d.getElementById("main");
    ;

    let { hash } = location;
    console.log(hash);
    $main.innerHTML = null;

    //Al estar en el home
    if(!hash || hash === "#/"){
        ajax({
            url: api.main,
            cbSuccess: (main) => {
                //console.log(main);
                let html;
                main.forEach((post) => (html += PostCard(post)));
                //d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        })
    }else if(hash.includes("#/search")){
        $main.innerHTML = "<h2>Sección del Buscador</h2>";
        //d.querySelector(".loader").style.display = "none";
    }else if(hash === "#/contacto"){
        $main.innerHTML = "<h2>Sección de Contacto</h2>";
        //d.querySelector(".loader").style.display = "none";
    }else{
        $main.innerHTML = "<h2>Aquí cargará el contenido de el Post previamente seleccionado</h2>"
        //d.querySelector(".loader").style.display = "none";
    }
}