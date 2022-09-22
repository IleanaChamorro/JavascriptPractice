console.log(window);
        console.log(document);

        let texto = "Hola, soy tu amigo y docente digital... Jonathan Mircha";

        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto);


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