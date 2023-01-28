const fs = require("fs");
// PROMESAS con lectura de archivos
const promesaEscrituraArc = new Promise((resolve, reject) => {
  const content =
    "hola estoy usando promesas para escribir un archivo con Node";
  fs.writeFile("archivo_escrito_con_promesa.txt", content, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

promesaEscrituraArc
  .then(() => {
    console.log("escribiendo archivos usando una promesa");
  })
  .catch((err) => {
    console.log(
      "🚀 ~ file: ej-301.js:31 ~ promesaEscrituraArc.then ~ err",
      err
    );
  });

//  async/await con promesas y escritura de archivos
const escrituraAsync = async () => {
  try {
    await promesaEscrituraArc;
  } catch (error) {
    console.log("🚀 ~ file: ej-303.js:31 ~ escrituraAsync ~ error", error);
  }
};

escrituraAsync();
