const fs = require('fs');
const prettier = require('prettier');

// Ruta al archivo JSON que deseas formatear y convertir en objetos anidados
const rutaArchivoJSON = 'result.json';

// Ruta y nombre de archivo para guardar el resultado formateado
// const rutaArchivoSalida = 'formato.json';

// Lee el contenido del archivo JSON
fs.readFile(rutaArchivoJSON, 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo JSON:', error);
    return;
  }

  try {
    // Parsea el contenido JSON en un objeto
    const json = JSON.parse(data);

    // Convierte el objeto en una cadena formateada
    const jsonFormateado = prettier.format(JSON.stringify(json), {
      parser: 'json',
    });

    // Guarda el resultado formateado en un archivo
    fs.writeFile('formateado.json', jsonFormateado, 'utf8', (error) => {
      if (error) {
        console.error('Error al guardar el archivo formateado:', error);
        return;
      }

      console.log(`Archivo JSON formateado guardado en: ${rutaArchivoSalida}`);
    });
  } catch (error) {
    console.error('Error al formatear el archivo JSON:', error);
  }
});
