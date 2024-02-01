const fs = require('fs');

// Función para leer un archivo
function read(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // Llamar al callback con los datos del archivo convertidos a string
    cb(data.toString());
  });
}

// Función para escribir en un archivo
function write(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    // Manejo de errores al escribir en el archivo
    if (err) {
      console.log('No he podido escribirlo', err);
    } else {
      // Indicar que se escribió correctamente en el archivo
      console.log('Se ha escrito correctamente');
    }
    // Llamar al callback sin errores
    cb();
  });
}

// Función para borrar un archivo
function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// Escribir en un archivo
write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', () => {
  console.log('Archivo creado exitosamente');
});

// read(__dirname + '/archivo.txt', console.log);
// borrar(__dirname + '/archivo1.txt', console.log);
