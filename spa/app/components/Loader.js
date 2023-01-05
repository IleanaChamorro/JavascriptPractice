export function Loader(){
    const $loader = document.createElement("img");
    $loader.src="app/assets/icons8-loading-sign-24.png";
    $loader.alt = "Cargando...";
    $loader.classList.add("loader");
    return $loader;
}