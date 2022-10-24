/*
function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    
}

//click asociado al documento
document.addEventListener("click", (e) => {
    console.log("Click en",e.target);

    //si el object que origina el evento click en el document, ejecutar flujoEventos
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital...Jonathan Mircha");

        e.preventDefault();
    };
});

/*
$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital...Jonathan Mircha");
    
    e.preventDefault();
    e.stopPropagation();
});
*/

//BOM: Browser Object Model
//Serie de métodos y objetos que cuelgan directamente de window
/*
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("********Evento Resize ********");
    console.log(window.innerWidth); //Tamaño del ancho del viewport de nuestra ventana
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(e);
});

//control desplazamiento scroll

window.addEventListener("scroll", e => {
    console.clear();
    console.log("****** Evento Scroll *******");
    console.log(window.scrollY);
    console.log(window.scrollX);
    console.log(e);
})

window.addEventListener("load", e => {
    console.log("****** Evento Scroll *******");
    console.log(window.scrollY);
    console.log(window.scrollX);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", e => {
    console.clear();
    console.log("********* Evento DOMContentLoaded ******");
    console.log(window.screenY);
    console.log(window.screenX);
    console.log(e);
})
*/

//BOM: Métodos
//window.alert("Alerta");
//window.confirm("Confirmación");
//window.propmt("Aviso")

//Todo lo que cuelga de window, directamente mandar la alerta, confirmación o aviso

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana")
;

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", e => {
    //Se cierra la ventana ejecutada
    //window.close();
    ventana.close();
});
$btnImprimir.addEventListener("click", e => {
    window.print();
});