// Promesas
const FACTOR_CAMBIO = 1.2;
let divisasAceptadas = ["$", "PESOS COL", "PESOS ARG"];

const cambiarMoneda = (divisa, monto) => {
  return new Promise((resolve, reject) => {
    if (!divisasAceptadas.includes(divisa)) {
      reject("no aceptamos esa divisa");
    } else {
      resolve(monto / FACTOR_CAMBIO);
    }
  });
};

const hacerCambioAsincrono = async () => {
  const cambiarADolares = await cambiarMoneda("PESOS COL", 10000);
  console.log("🚀 ~ file: ej-203.js:17 ~ cambiarADolares", cambiarADolares);

  try {
    const cambiarADolares2 = await cambiarMoneda("PESOS COL", 10000);
    console.log("🚀 ~ file: ej-203.js:21 ~ cambiarADolares2", cambiarADolares2);
    await cambiarMoneda("PESOS CHL", 20000); // esta PROMESA FALLA
    const cambiarAEuros = await cambiarMoneda("PESOS ARG", 20000);
    console.log(
      "🚀 ~ file: ej-203.js:21 ~ cambiarAEuros AQUI AQUI!",
      cambiarAEuros
    );
  } catch (error) {
    console.log("🚀 ~ file: ej-203.js:29 ~ error de la PROMESA", error);
  }
  console.log("SALI DEL CATCH************");
};

hacerCambioAsincrono();
