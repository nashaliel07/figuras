//Identificadores--> _
// let _valor1 = 10;
// let $valor2 = 30;
// let nombreInstituto = "Certus";

// let resultado = _valor1 + $valor2;

// document.getElementById("resultado").innerHTML- "El resultado es: " + resultado;

// document.getElementById("mensaje").innerHTML-"Bienvenido a "+ nombreInstituto;


/* 
6 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

let palabra = prompt("Escibre una palabra");

//Desde que numero iniciara el conteo
let consonates = 0;
let vocales = 0;

for(let letra of palabra){
  if(letra == "a" || letra == "e" || letra == "i" || letra == "o"|| letra == "u") vocales++
  else consonates++
}

document.write(`La palabra que escribiste ${vocales} vocales, tiene ${consonates} consonantes y tiene en total ${palabra.length} letras.`)