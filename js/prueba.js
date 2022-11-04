//Lanza una alerta
// alert("hola mundo")

//que aparezac una mensaje en la pantalla
// document.write("vienvenidos a la clase de java")
// console.log("la clase de java")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/

var nombre = prompt("Escribe tu nombre: ")
var edad = parseInt(prompt("Escribe tu edad: "))


// imprimir el resultado
document.write(`hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad+1} años`)
