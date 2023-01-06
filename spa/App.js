import api from "./app/helpers/wp_api.js";
import {ajax} from "./app/helpers/ajax.js";
import { Header } from "./app/components/Header.js";
import {Loader} from "./app/components/Loader.js";
import { Posts } from "./app/components/Posts.js";
import { PostCard } from "./app/components/PostCard.js";

export function App(){
    const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            console.log(posts);
            let html;
            posts.forEach(post => html += PostCard(post));
            d.querySelector(".loader").style.display = "none";
            d.getElementById("posts").innerHTML = html;
        }
    })
}