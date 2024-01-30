// Imprimimos en pantalla el objeto Global
console.log(global);

// Vemos como funciona el módulo global setInterval
setInterval(() => {
  console.log("Hola");
}, 3000);

// Usando el módulo global clearInterval
let i = 0;
const interval = setInterval(() => {
  console.log("Hola");
  if (i >= 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

// Usando el módulo global setImmediate

setImmediate(() => {
  console.log("Hola");
});

// importar módulos
require();

// acceder al proceso
console.log(process);

// acceder al directorio
console.log(__dirname);

// Acceder al fichero de globales
console.log(__filename);

// crear una variable global
/* si puedes no usar una variable global es mucho mejor */
global.myVariable = 3;
console.log(myVariable);
