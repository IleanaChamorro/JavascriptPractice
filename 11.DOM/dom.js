/*
console.log(window);
        console.log(document);

        let texto = "Hola, soy tu amigo y docente digital... Jonathan Mircha";

        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto);
*/

console.log("*****************Elementos del Documento************");
console.log(window.document);
console.log(document);
//obtener head
console.log(document.head);
console.log(document.body);
//obtener etiqueta html
console.log(document.documentElement);
//Tipo de documento
console.log(document.doctype);
//Acceder juego de caracteres del documento
console.log(document.charset);
console.log(document.title);
//Devolver links
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</h2>")


//Recursos Nodo: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
//Diferentes Tipos de Nodos: elements, text y comments
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//recibe un parámetro un selector valido de css
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"))


//Atributos
//Maneras de mandarlos a llamar y establecer valores 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
//valor atributo href del enlace
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Establecer valores a atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-Arg");
console.log(document.documentElement.lang);

//Guardar en variables elementos del DOM
//Al crear variables que hacen referencia al elementos del html se anteponen un "$"
const $linkDOM = document.querySelector(".link-dom");

//Establecer valor
$linkDOM.setAttribute("target", "_blank");
//Establecer que no haya dependencia entre la ventana que abrimos y la ventana origen
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));

//Borrar Elementos
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
//Obtener Data Attributes
console.log($linkDOM.getAttribute("data-description"));
//Todos los data-attributes los guarda a manera de un mapa/coleccion Javascript, llamado "dataset"
console.log($linkDOM.dataset);
//Modificar data-attribute
console.log($linkDOM.dataset.description);
//Establecer nuevos valores
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);
//Validar atributos
console.log($linkDOM.hasAttribute("data-id"));
//Eliminar Atributos
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));