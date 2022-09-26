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