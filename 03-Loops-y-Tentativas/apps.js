/* 1- Contador 1 */
/* 
let contador = 1;
while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
} 
*/

/* 2- Bucle infinito */
/* 
let cantNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantNumeros;
while(contador > 0){
  let numero = parseInt(prompt('Digíte el número:'));
  //suma = suma + numero;
  suma += numero;
}
let promedio = suma / cantNumeros;
console.log(promedio);  
*/
/* Solución */
/* 
let cantNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantNumeros;
while(contador > 0){
  let numero = parseInt(prompt('Digíte el número:'));
  //suma = suma + numero;
  suma += numero;
  contador = contador - 1;
}
let promedio = suma / cantNumeros;
console.log("El promedio es: " + promedio); 
*/

/* 3- Desafío hora de practicar */
/* 3.1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número. */
/* 
let contador = 1;
while (contador <= 10) {
  alert(`El contador es: ${contador}`);
  console.log("El contador es: " + contador);
  contador = contador + 1;
} 
*/
/* Otra forma */
/* 
let contador = 1;
let resultado = '';
while (contador <= 10) {
  resultado += contador + ' ';
  alert(`El contador es: ${contador}`);
  console.log(resultado);  // Muestra: "1 2 3 4 5 6 7 8 9 10 "
  console.log(resultado.trim());  // Muestra: "1 2 3 4 5 6 7 8 9 10"
  contador++;
} 
*/

/* 3.2- Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. */
/* 
let contador = 10;
while (contador >= 0) {
  alert(`El contador es: ${contador}`);
  console.log("El contador es: " + contador);
  contador = contador - 1;
} 
*/

/* 3.3- Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta cero utilizando un bucle 'while' en la consola del navegador. */
/* 
let contador = prompt("Ingresa un número para la cuenta regresiva:");
while (contador >= 0) {
  alert(`El número es: ${contador}`);
  console.log("El número es: " + contador);
  contador--;
}
*/

/* 3.4- Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */
let numero = prompt('Ingrese un número para la cuenta progresiva:');
let contador = 1;
while (contador <= numero) {
  alert(`El contador es: ${contador}`);
  console.log("El contador es: " + contador);
  contador = contador + 1;
}

/* 4- Para saber más: operadores lógicos */
/* 4.1- AND (&&) */
let edad = 25;
let tieneLicencia = true;
// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

/* 4.2- OR (||) */
let tieneManzana = false; 
let tieneBanana = true;
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}
