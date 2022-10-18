/*
console.log(window);
        console.log(document);

        let texto = "Hola, soy tu amigo y docente digital... Jonathan Mircha";

        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto);
*/

/*console.log("*****************Elementos del Documento************");
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
//const $linkDOM = document.querySelector(".link-dom");

/*Establecer valor
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
*/

/*CSS
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
//Propiedades CSS dinámicas
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
//Establecer valores
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
//Acceder con notación del punto
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);
//Aplicar valores
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//Modificar valores
$html.style.setProperty("--dark-color", "000");

//Actualizar variables 
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
*/

/*Clases CSS 
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);

//Acceder al valor del atributo class
console.log($card.classList);

//Evaluar si un elemento tiene una clase en particular
console.log($card.classList.contains("rotate-45"));

//Agregar Clases
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

//Eliminar clases 
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

//Método en el cual si el elemento tiene la clase se la quita, si no la tiene la agrega
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); //valida a true

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); //valida a false, ya que al tener la clase, "toggle" se la quita

$card.classList.toggle("rotate-45");
//Reemplazar una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
//Agregar más de una clase
$card.classList.add("opacity-80", "sepia");
//Eliminar una más de una clase
$card.classList.remove("opacity-80", "sepia");

$card.classList.toggle("opacity-80", "sepia");
*/

/*DOM: Texto y HTML
const $whatIsDom = document.getElementById("que-es");

let text = ` 
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM-Document Object Model</i></b>) es un API para documentos HTML Y XML
    </p>
    <p>
    Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
    </p>
    <p>
    <mark>
    El DOM no es parte de la especificación de JavaScript, es una API para los navegadores 
    </mark>
    </p>
` 

/*Reemplazar texto
//$whatIsDom.innerText = text;
//Insertar solo texto
$whatIsDom.textContent = text;
//Contenido html
$whatIsDom.innerHTML = text;
//Reemplazar elemento del DOM por contenido elegido
$whatIsDom.outerHTML = text;
*/

/*DOM: Traversing: Recorriendo el DOM
//DOM Traversing enfocado a etiquetas html
const $cards = document.querySelector(".cards");

console.log($cards);
//hijos
console.log($cards.children);
//console.log($cards.childNodes);
console.log($cards.children[2]);
//Nodo padre
console.log($cards.parentElement);
console.log($cards.parentNode);

//Obtener el primer y último hijo
console.log($cards.firstChild);
console.log($cards.lastElementChild);
//Anterior hermano en el nodo
console.log($cards.previousSibling);
//Siguiente hermano en el nodo
console.log($cards.nextElementSibling);
console.log($cards.nextElementSibling);
//El selector más cercano
console.log($cards.closest("div"));
console.log($cards[3].closest("section"));
*/
//DOM: Creando Elementos y Fragmentos 
/*crear elemento en el dom
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    //nodos de texto
    $figcaptionText = document.createTextNode("Animals")
    //Capturar elemento padre
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");
    ;
    $img.setAttribute("src", "https://placeimg.com/200/200/animals");
    $img.setAttribute("alt", "Animals");
    $figure.classList.add("card");
    
//Incorporarlas al dom
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Agregar contenido dinámicamente
$figure.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul")
;

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["Africa", "América", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
 
//Por cada iteración le estas agregando nuevo contenido a la propiedad innerHTML
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEac((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/
//DOM: Templates HTML
/*Modelo a seguir en el cuál estructuras el contenido html que quieres que sea dinámico y también es una forma para interactual con el DOM

const $cards = document.querySelector(".cards"),
//Apunta al template y accede a su contenido
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment,
    $cardContent = [
        {
            title: "Tecnologia",
            img : "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img : "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img : "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img : "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img : "https://placeimg.com/200/200/nature",
        },
    ]
;

//Por cada elemento de "cardContent", agregar imagen y titulo
$cardContent.forEach(el => {
    $template.querySelector("img").setAttribbute("src", el.img);
    $template.querySelector("img").setAttribbute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //Clonar dicho nodo (su estructura), asignarle atributos y contenidos textual
    let $clone = document.importNode($template, true); //con el boolean en true clona el nodo

    //Agregar al fragmento el clon nodo
    $fragment.appendChild($clone);
})

//Agregar al elemento card el fragmento
$cards.appendChild($fragment);

*/
//De esta manera solo hacemos una inserción al DOM y no estamos interactuando con el a cada vez que recorre el for each las tarjetas*/

/*DOM:Modificando Elementos (Old Style)
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");
*/
//Reemplazar card 
//Como referencia nuestro nodo es el padre "card"
//replaceChild necesita de dos parametros: el nuevo nodo y el nodo a reemplazar
//Accedemos a los children de card mediante DOM traversing, en este caso accedemos a la tercer tarjeta
//$cards.replaceChild($newCard, $cards.children[2]);

//Eliminar elementos
//$cards.removeChild($cards.lastElementChild);

//Insertar tarjeta antes de un nodo que tomemos como referencia 

//InsertBefore necesita dos elementos: el nuevo nodo y el nodo de referencia (no lo reemplaza, simplemente toma como referencia ese nodo hijo y va a insertar el nuevo antes que ese)
//$cards.insertBefore($newCard, $cards.firstElementChild);

//Clonar elementos
//document.body.appendChild($cloneCards);

//DOM:Modificando Elementos (Cool Style)
/*
.insertAdjacent...
//Similar appendChild, insertBefore
.insertAdjacentElement(position, el)
//Similar innerHTML
.insertAdjacentHTML(position, html)
//Similar textContent
.insertAdjacentText(position, text)

Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

//Agregar car
$newCard.insertAdjacentHTML("beforeend", $contentCard);
//Agregar figC
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);
//Crear nuevo elemento
/*$cards.insertAdjacentElement("beforebegin", $newCard);

$cards.insertAdjacentElement("afterbegin", $newCard);
$cards.insertAdjacentElement("afterend", $newCard);
$cards.insertAdjacentElement("beforend", $newCard);
*/
/*
//primer hijo
$cards.prepend($newCard);
//ultimo hijo
$cards.append($newCard);
//hermano anterior
$cards.before($newCard);
//hermano posterior
$cards.after($newCard);

//DOM: Manejadores de Eventos
function holaMundo(){
    //Cuando una función se convierte en un manejador de evento
    alert("Hola Mundo");
    console.log(event);
}

//evento semantico
const $eventoSemantico = document.getElementById("evento-semantico");

//Ejecutar esta función como evento semántico
$eventoSemantico.onclick = holaMundo;

//Las limitantes que tienen los eventos semanticos es que una vez que esta definido el evento semantico solamente va a poder ejecutar una función

//Evento semantico con funcion anonima

//Toda función que se convierte en manejador de eventos no puede recibir parámetros, el único parámetro que recibe es el evento en sí
$eventoSemantico.onclick = function(e){
    alert("Hola Mundo Manejador de Eventos Semánticos");
    console.log(e);
    console.log(event);
}


//Evento Múltiple => Ejecutar varias funciones que se hayan definido en distintos manejadores al mismo evento
const $eventoMultiple = document.getElementById("evento-multiple")

//Declarar un evento múltiple
//recibe dos parámetros: el evento y la función a ejecutar
$eventoMultiple.addEventListener("click", holaMundo);
console.log($eventoMultiple);

//Evento Múltiple declarado con función anónima
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiple");
    console.log(e);
    //tipo de evento
    console.log(e.type);
    //evento que lo origina
    console.log(e.target);
});

//DOM: Eventos con Parámetros y Remover Eventos
function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

//$eventoMultiple.addEventListener("click", saludar);

/*La solución antes de las arrow functions era crear una funcion anonima la cual iba a ser la manejadora de eventos y ejecutarla inmediatamente
$eventoMultiple.addEventListener("click", function(){
    saludar()
});
*/
/*
//Saludar ya no es la función manejadora del evento, por lo cual forzosamente si hay que poner los parentesís
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Ileana");
});

//Eliminar eventos de un elemento
const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = () => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}
//RemoverEventListener necesita de dos parámetros: evento a remover y la funcion manejadora asociada a ese evento
$eventoRemover.addEventListener("dblclick", removerDobleClick);

//Para remover un evento está tiene que estar guardada en una función(declarada o expresada)
*/

//DOM: Flujo de Eventos (Burbuja y Captura)
//Como se va propagando el evento, una vez que el evento se origina tiene una propagación a lo largo del arbol del DOM, por defecto esa propagación se va dando desde el evento más interno al más externo esta fase es llamada "BURBUJA" 

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e){
    //this en este caso hace referencia al div en cuestión
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}
//asignar listener de manera dinámica
$divsEventos.forEach(div => {
    //Fase de burbuja
    //div.addEventListener("click", flujoEventos, false);
    //div.addEventListener("click", flujoEventos, false);
    //Fase de captura
    //div.addEventListener("click", flujoEventos, true);
    div.addEventListener("click", flujoEventos, {
        //hace referencia a la fase en la que se encuentra
        capture: false,
        //Hace referencia a que el evento se va a ejecutar una sola vez
        once: true,
    });
});

//Los tres elementos tienen asignado el evento click por lo cual podemos ver la propagación del evento

//Fase Captura: Desde el más externo al más interno 
//Esta fase se puede omitir si delegas los eventos a un evento padre más externo  