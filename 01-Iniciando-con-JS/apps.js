/* 1- Alert y Prompt */
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida');

/* 2- Cambiando el valor de las variables */
alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');
let numeroSecreto = 4;
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 

/* 3- ¿Dónde esta el error? */
let contraseniaDelSistema = "contraseniaPrueba!";
let contrasenia = prompt("Ingrese la contraseña del sistema:");
if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}

/* 4- Desafío: hora de practicar */
/* 4.1- Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!". */
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

/* 4.2- Declara una variable llamada nombre y asígnale el valor "Luna". */
let nombre1 = "luna";

/* 4.3- Crea una variable llamada edad y asígnale el valor 25. */
let edad1 = 25;

/* 4.4- Establece una variable numeroDeVentas y asígnale el valor 50. */
let numeroDeVentas = 50;

/* 4.5- Establece una variable saldoDisponible y asígnale el valor 1000. */
let saldoDisponible = 1000;

/* 4.6- Muestra una alerta con el texto "¡Error! Completa todos los campos". */
alert("¡Error! Completa todos los campos");

/* 4.7- Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError. */
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

/* 4.8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre. */
let nombre2 = prompt("¿Cuál es tu nombre?");

/* 4.9- Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad. */
let edad2 = prompt("¿Cuál es tu edad?");

/* 4.10- Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". */
let edad3 = prompt("¿Cuál es tu edad?");
if (edad3 >= 18){
    alert("¡Puedes obtener tu licencia de conducir!")
}
