/* 1- ¿Cómo implementarías un límite de 5 intentos para que los clientes adivinen el número secreto? */
/* 
let numeroSecreto = Math.floor(Math.random() * 10);
//Math.floor(): Elimina los decimales y solo muestra el número entero sin redondear.
//Math.random(): Muestra un número decimal random o aleatorio que vas desde el 0 hasta menos que 1.
for (let intentos = 0; intentos < 5; intentos++) {
    let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
    if (intento == numeroSecreto) {
        alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
        break;
    }
}
*/
/* Otra Forma */
/* 
let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
    let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
    intentos++;
    if (intento == numeroSecreto) {
        alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
        break;
    }
}
*/

/* 2- Refactorizando */
/* 
let palabraPersona = "";
if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
} 
*/
/* Solución */
/* 
let cantidadPersonas = 1;
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";
alert(`El resultado es: ${palabraPersona}`);
console.log("El resultado es: " + palabraPersona); 
*/

/* 3- Números aleatorios */
/* Para generar un número entre 1 y 3, podemos usar el código:  */
/* 
let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;
alert(`El número aleatorio es: ${numeroAleatorio1a3}`);
console.log("El número aleatorio es: " + numeroAleatorio1a3);
*/

/* 4- Desafío: Hora de practicar */
/* 4.1- Crea un programa que utilice console.log para mostrar un mensaje de bienvenida. */
console.log("¡Hola Bienvenido!");

/* 4.2- Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador. */
/* 
let nombre = "Enrique Torres";
console.log(`¡Hola, ${nombre}!`); 
*/

/* 4.3- Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!". */
let nombre = "Enrique Torres";
alert(`¡Hola, ${nombre}!`);
console.log(`¡Hola, ${nombre}!`);

/* 4.4- Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador. */
let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`El lenguaje de programación que más te gusta es: ${respuesta}`);

/* 4.5- Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola. */
/* 
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} + ${valor2} es igual a: ${resultado}`); 
*/

/* 4.6- Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola. */
let valor1 = 12;
let valor2 = 5;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a: ${resultado}`);

/* 4.7- Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. */
let edad = prompt('Ingrese su edad:');
if (edad >= 18){
    console.log('Usted es mayor de edad');
} else {
    console.log('Usted es menor de edad');
}

/* 4.8- Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente. */
/* 
let numero = parseFloat(prompt("Ingrese un número:"));
if (numero > 0){
    alert("El número ingresado es positivo")
} else {
    if (numero == 0) {
        alert("El número ingresado es cero")
    } else {
        alert("El número ingresado es negativo")
    }
} 
*/

/* 4.9- Utiliza un bucle while para mostrar los números del 1 al 10 en la consola. */
let numero = 1;
while (numero <= 10) {
  alert(`El número es: ${numero}`);
  console.log("El número es: " + numero);
  numero = numero + 1;
}

/* 4.10- Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 12 y muestra "Aprobado" o "Reprobado" en la consola. */
let nota = 11;
if (nota >= 12) {
    console.log("El estudiante está Aprobado");
} else {
    console.log("El estudiante está Reprobado");
}

/* 4.11- Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola. */
/* 
let numeroAleatorio = Math.random();
console.log("El número aleatorio es: " + numeroAleatorio); 
*/

/* 4.12- Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola. */
/* 
let numeroAleatorio = parseInt((Math.random() * 10)) + 1;
console.log("El número aleatorio es: " + numeroAleatorio); 
*/

/* 4.13- Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */
let numeroAleatorio = parseInt((Math.random() * 1000)) + 1;
console.log("El número aleatorio es: " + numeroAleatorio);
