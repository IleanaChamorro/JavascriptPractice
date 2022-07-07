//Importar un módulo 
import saludar, { Saludar, PI, usuario} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo modulo.js")

console.log(PI, usuario);

//console.log(aritmetica.sumar(3,4));
console.log(calculos.sumar(5,6));
saludar();
let saludo = new Saludar();
saludo;