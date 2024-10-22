// Importará el módulo fs para manejar el archivo de visitas
const fs = require('fs');
const path = require('path');

// Define la ruta del archivo donde almacenaremos las visitas
const visitasPath = path.resolve(__dirname, 'visitas.txt');

// Función para manejar las solicitudes
exports.handler = async (event, context) => {
  // Leem el archivo de visitas
  let visitas = 0;
  if (fs.existsSync(visitasPath)) {
    visitas = parseInt(fs.readFileSync(visitasPath, 'utf-8'));
  }

  // Incrementa el contador
  visitas++;

  // Guarda el nuevo valor en el archivo
  fs.writeFileSync(visitasPath, visitas.toString());

  // Devuelve la cantidad de visitas en la respuesta
  return {
    statusCode: 200,
    body: JSON.stringify({ visitas }),
  };
};
