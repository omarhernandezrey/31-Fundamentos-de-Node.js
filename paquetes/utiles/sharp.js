// Importar el módulo 'sharp'
const sharp = require("sharp");

// Utilizar el método 'resize' para redimensionar la imagen a un ancho de 80 píxeles,
// manteniendo la relación de aspecto original
// Utilizar el método 'grayscale' para convertir la imagen a escala de grises
// Utilizar el método 'toFile' para guardar la imagen procesada en el archivo 'resized.png'
sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');
