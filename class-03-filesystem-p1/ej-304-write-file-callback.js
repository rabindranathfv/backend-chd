const fs = require("fs");

// leer fichero de manera asincrónica con callbacks
// TODO: RECORDATORIO process.cwd puede generar problemas ya que se asocia con la ruta de una terminal.
// Si necesitas ayuda explora el modulo "path" de nodejs
fs.readFile(`${process.cwd()}/class-03/prueba.txt`, "utf-8", (err, content) => {
  if (err) {
    console.log("🚀 ~ file: ej-301.js:6 ~ fs.readFile ~ err", err);
  }
  console.log("IMPRIMIENDO EL CONTENIDO DEL ARCHIVO", content);
});

// escribiendo fichero de manera asincrónica con callbacks
fs.writeFile(
  `${process.cwd()}/class-03/prueba3.txt`,
  `escribiendo en un archivo usando callback en NODEJS el dia ${new Date().toLocaleDateString()} en formato mes/dia/ano`,
  (err) => {
    if (err) {
      console.log("🚀 ~ file: ej-301.js:6 ~ fs.readFile ~ err", err);
    }
  }
);
