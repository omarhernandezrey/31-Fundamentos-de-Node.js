// Importar el módulo 'bcrypt'
const bcrypt = require('bcrypt');
// Definir la contraseña original
const password = '1234Segura';

// Generar el hash de la contraseña utilizando bcrypt
bcrypt.hash(password, 5, function(err, hash){
    // Imprimir el hash resultante
    console.log('Hash de la contraseña original:', hash);
    
    // Comparar la contraseña original con un hash
    bcrypt.compare('password', hash, function(err, res){
        // Imprimir el resultado de la comparación
        console.log('Comparación de la contraseña con el hash:', res);
    });
});
