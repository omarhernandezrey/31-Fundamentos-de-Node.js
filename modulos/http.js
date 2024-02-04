// Importar el módulo http
const http = require('http');

// Función de enrutamiento para manejar las solicitudes
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    // Determinar la ruta solicitada y enviar la respuesta correspondiente
    switch (req.url) {
        case '/hola':
            res.writeHead(200, {'Content-Type': 'text/plain'}); // Encabezado HTTP con código 200 y tipo de contenido
            res.write('Hola que tal'); // Escribir el mensaje de respuesta
            res.end(); // Finalizar la respuesta
            break;
        
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'}); // Encabezado HTTP con código 404 y tipo de contenido
            res.write('Error 404: No sé qué quieres'); // Mensaje de error para ruta no encontrada
            res.end(); // Finalizar la respuesta
    }
}

// Crear un servidor HTTP que utilice la función de enrutamiento y escuche en el puerto 3000
http.createServer(router).listen(3000);

// Mensaje de consola para indicar que el servidor está escuchando en el puerto 3000
console.log("Escuchando HTTP en el puerto 3000");
