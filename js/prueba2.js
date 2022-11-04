
// document.write("<div style = 'background-color:yellow'> hola </div>")

// document.getElementById("prueba1").innerHTML="A JAVASCRIPT";

/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

let numero = parseInt(prompt("Escribe un numero si el numero es par o impar "));

//bucle for --> Repeticion de instrucciones de acuerdo al nro.
for(let i=1;i<=numero;i++){
  // Comprobamos si es par SI lo dividimos entre 2 será 0
  //El operador módulo (% ) calcula el resto de una operación de división.
  if(i%2 == 0){
    document.write(`${i} - es par<br>`)
  }
  else{
    document.write(`${i} - es impar<br>`)
  }


}


