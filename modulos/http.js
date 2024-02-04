const http = require('http');

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Hola que tal');
            res.end();
            break;
        
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: No sé qué quieres');
            res.end();
    }
}

http.createServer(router).listen(3000);

console.log("Escuchando HTTP en el puerto 3000");
