export function Loader(){
    const $loader = document.createElement("img");
    $loader.src="app/assets/Rolling-1s-200px.svg";
    $loader.alt = "Cargando...";
    $loader.classList.add("loader");
    return $loader;
}