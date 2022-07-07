//Exportación
export const PI = Math.PI;


//Solamente se exporta lo que se indica 
export let usuario = "Ile";
let password = "qwerty";

//Importación por defecto
export default function saludar(){
    console.log("Hola módulos +ES6")
}

export class Saludar{
    constructor(){
        console.log("Hola Clases +ES6")
    }
}