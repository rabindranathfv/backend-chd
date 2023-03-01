const fs = require("fs");
const path = require("path");

// leer fichero/archivo de forma sincrona
try {
  const rutaArchivo = path.join(__dirname, "prueba2.txt");
  const contenidoArchivo = fs.readFileSync(rutaArchivo, "utf-8");
  console.log("🚀 ~ file: ej-301.js:13 ~ archivo", contenidoArchivo);
} catch (error) {
  console.log("🚀 ~ file: ej-301.js:16 ~ error", error);
}
