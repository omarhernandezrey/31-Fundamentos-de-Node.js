// Imprime un mensaje en la consola como un registro de información general.
console.log('Algo'); // Algo

// Imprime un mensaje en la consola como un registro de información.
console.info('Algo'); // Algo

// Imprime un mensaje de error en la consola.
console.error('Algo'); // Algo

// Imprime un mensaje de advertencia en la consola.
console.warn('Algo'); // Algo

// Imprime una representación en forma de tabla de una matriz de objetos en la consola.
var tabla = [
    {
        a: 1,
        b: 'Hola',
    },
    {
        a: 2,
        b: 'Otra letra'
    }
]
console.log(tabla);
/*
┌─────────┬───┬────────────┐
│ (index) │ a │     b      │
├─────────┼───┼────────────┤
│    0    │ 1 │ 'Hola'     │
│    1    │ 2 │ 'Otra letra' │
└─────────┴───┴────────────┘
*/

// Inicia un grupo de mensajes de registro en la consola.
console.group('Conversacion: ');
console.log('Hola');
console.log('como estas ');
console.log('Omar');
// Finaliza el grupo de mensajes de registro en la consola.
console.groupEnd('Conver');
/*
Conversacion:
Hola
como estas
Omar
*/

console.log('Conversacion: ');
console.log('Otras cosas de otra funcion');

// Define una función que imprime mensajes de registro en la consola y llama a otra función dentro de ella.
function funcion1() {
    console.group('funcion1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien es de la 1');
    console.log('Esto tambien es de la 1');
    funcion2(); // Llama a la función funcion2 dentro de funcion1.
    console.groupEnd('Hemos vuelto a la 1');
    console.groupEnd('funtion 1');
}

// Define otra función que imprime mensajes de registro en la consola.
function funcion2() {
    console.group('funcion2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion2');
}

// Llama a la función funcion1.
funcion1();
/*
funcion1
Esto es de la funcion 1
Esto tambien es de la 1
Esto tambien es de la 1
funcion2
Ahora estamos en la funcion 2
Hemos vuelto a la 1
*/

// Cuenta el número de veces que se ha llamado a console.count con la etiqueta especificada.
console.count('Veces'); // Veces: 1
console.count('Veces'); // Veces: 2
console.count('Veces'); // Veces: 3
console.count('Veces'); // Veces: 4
console.count('Veces'); // Veces: 5
console.count('Veces'); // Veces: 6
// Reinicia el contador para la etiqueta especificada.
console.countReset('Veces');
// Cuenta el número de veces que se ha llamado a console.count después de reiniciar el contador.
console.count('Veces'); // Veces: 1
