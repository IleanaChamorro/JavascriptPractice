import api from "./app/helpers/wp_api.js";
import {ajax} from "./app/helpers/ajax.js";
import {Title} from "./app/components/Title.js";
import {Loader} from "./app/components/Loader.js";

export function App(){
    const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Title());
    $root.appendChild(Loader());


    ajax({
        url:"no-valida",
        cbSuccess: () => {
            
        }
    })
}