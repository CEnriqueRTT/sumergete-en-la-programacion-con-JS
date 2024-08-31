/* 1- DTRAN */
let edad = prompt("Ingrese su edad:");
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

/* 2- Cambiando el mensaje alert */
/* alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');
let numeroSecreto = 4;
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era: ' + numeroSecreto + ', pero elegiste: ' + intento);
}
console.log(intento  == numeroSecreto); */

/* 3- Trabajando con condicionales */
/* Introducir un número por teclado, muestre un mensaje en la consola que indique si el número es positivo, negativo o cero. */
/* const numero = prompt("Ingrese un número");
if (numero > 0) {
    console.log("El número es positivo")
}
if (numero == 0) {
    console.log("El número es cero")
}
if (numero < 0) {
    console.log("El número es negativo")
} */

/* 4- Haga lo que hicimos en aula: console.log */
alert('Bienvenido al juego del número secreto');
// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log(`Valor de intento: ${intento}`); //Interpolación
let numeroSecreto = 4;
// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto); //concatenación con ","
if (intento == numeroSecreto) {
    alert(`Adivinaste el número secreto: ${numeroSecreto}`); //Interpolación
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto: ' + numeroSecreto); //Concatenación con "+"
    alert('El número secreto era: ' + numeroSecreto); //Concatenación con "+"
}

/* 5- Desafío: hora de practicar */
/* 5.1- Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */
let dia = prompt("¿Qué día es?");
if ((dia == "Sábado") || (dia == "Domingo")){
    alert("¡Buen fin de semana!")
} else {
    alert("¡Buena semana!")
}

/* 5.2- Verifica si un número ingresado por el usuario es positivo, cero o negativo. Muestra una alerta informativa. */
let numero = prompt("Ingrese un número");
if (numero > 0){
    alert("El número ingresado es positivo")
} else if (numero == 0) {
    alert("El número ingresado es cero")
} else {
    alert("El número ingresado es negativo")
}

/* 5.3- Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar". */
let puntaje = prompt ("¿Cúal es tu puntaje obtenido?");
if (puntaje >= 100){
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intentalo nuevamente para ganar")
}

/* 5.4- Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo. */
let saldo = 1500.75;
let mensaje = `Estimado usuario, su saldo actual es de: $${saldo.toFixed(3)}.`; //Crear el mensaje utilizando un template string (Interpolación)
console.log(mensaje);

/* 5.5- Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre. */
let nombre = prompt("Ingrese tu nombre");
alert(`Bienvenido su nombre es: ${nombre}`)
