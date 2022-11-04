/*RECOMENDACIONES MEDICAS (html)

2- pedir el nombre, apellido, dni y peso de la persona
Mostrar en la pantalla sus datos y mostrar que subira 5kg al consumir en este mes comida chatarra. */

// var nombre = prompt("Escribe tu nombre: ")
// var apellido = prompt("Escribe tu apellido: ")
// var dni = prompt("Escribe tu DNI: ")
// var peso = parseInt(prompt("Escribe tu peso: "))


// //imprimir el resultado
// document.write(`Hola ${nombre} ${apellido}, tu DNI es ${dni}  y tu peso es ${peso}kg pero si un mes comes chatarra pesaras ${peso+5}kg`)


/* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

 let figura= prompt("Elija de que figura sacaremos el area 1) triangulo\n 2) rectangulo\n 3) circulo\n")
    //primero ponemos variavles
    let base;
    let altura;
    let radio;
``
   switch(figura)   {
        case "1":
            altura = parseInt(prompt("Altura: "))
            base = parseInt(prompt("Base: "))
            document.write( `El area de triangulo es ${base*altura/2} cm` )
        break
        case "2":
            altura = parseInt(prompt("Altura: "))
            base = parseInt(prompt("Base: "))
            document.write( `El area de rectangulo es ${base*altura} cm` )
        case "3":
            radio = parseInt(prompt("Radio: "))
            document.write(`el area del circulo es ${Math.PI*Math.pow(radio,2)} cm`)
        break

        default:
            document.write("Esta opcion no es valida");

   }
    // var resultado
    // if(figura == 1)
    //     {
    //         var altura = parseInt(prompt("Altura: "));
    //         var base = parseInt(prompt("Base: "));
    //         resultado = base * altura / 2;
    //     }
    //     else if(figura == 2)    
    //     {
    //         var altura = parseInt(prompt("Altura: "));
    //         var base = parseInt(prompt("Base: "));
    //         resultado = base * altura
    //     }
    //     else if(figura == 3)

    //     {
    //         var radio = parseInt(prompt("Radio: "));
    //         var pi = 3.14
    //         resultado = pi * radio * radio;
    //     }
    // resultado = parseInt(resultado)
    // if(figura == 1)
    // {
    //     document.write( "El area de triangulo es " + resultado );
    // }
    // else if(figura == 2)    
    // {
    //     document.write( "El area de rectangulo es " + resultado );
    // }
    // else if(figura == 3)
    // {
    //     document.write( "El area de circulo es " + resultado );
    // }
