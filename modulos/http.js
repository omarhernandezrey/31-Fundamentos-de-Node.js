// Importar el módulo http
const http = require('http');

// Función de enrutamiento para manejar las solicitudes
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    // Determinar la ruta solicitada y enviar la respuesta correspondiente
    switch (req.url) {
        case '/hola':
            let saludo =  hola()
            res.write(saludo)
            res.end();
            break;
        
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'}); // Encabezado HTTP con código 404 y tipo de contenido
            res.write('Error 404: No sé qué quieres'); // Mensaje de error para ruta no encontrada
            res.end(); // Finalizar la respuesta
    }
}

function hola() {
    return 'Hola que tal'
}

// Crear un servidor HTTP que utilice la función de enrutamiento y escuche en el puerto 3000
http.createServer(router).listen(3000);

// Mensaje de consola para indicar que el servidor está escuchando en el puerto 3000
console.log("Escuchando HTTP en el puerto 3000");
