/* 31 Configurar las variables de entorno en Node.js */

// Definición de la variable saludo con el valor 'hola'
let saludo = 'hola';
// Imprime el valor de la variable saludo en la consola
console.log(saludo); // hola

// Asignación de valores a las variables nombre y web usando variables de entorno de Node.js
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

// Imprime un saludo usando la variable nombre en la consola
console.log('Hola ' + nombre); // Hola Sin nombre
// Imprime la dirección web usando la variable web en la consola
console.log('Mi web es ' + web); // Mi web es No tengo web
console.log('Hola');