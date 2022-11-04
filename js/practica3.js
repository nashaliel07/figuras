/* 
5 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let color = ["azul","amarrillo","rojo","verde","rosa"]

//LoweCase--> el texto estara interpretado en minuscula si este se escribe con mayuscula lo conbierte
let cliente = prompt("Estimado cliente\n Escriba a qui su color que desea comprar: ").toLocaleLowerCase();

//Comprobamos que existe
//indexOf=para comparar entre user y la listta predeterminada
if(color.indexOf(cliente) !== -1) {
  document.write(`Tu color se encuentra disponible, puedes hacer el pedido`)
}
else{
  document.write(`Lastimosamente no tenemos ese color, te interesa otro producto`)
}

//fondo imagenes hacer que se vea bonita 
