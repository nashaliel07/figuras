document.getElementById("boton").addEventListener("click", function(){
  //De la variable nombre deseo obtener sus valores 
  var nombre = document.getElementById("nombre").value
  var edad = document.getElementById("edad").value

  document.getElementById("salida").innerHTML = "encantado de conocerte " + nombre + " que bueno que tengas " + edad + " años"
})