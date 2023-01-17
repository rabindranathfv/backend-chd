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
  console.log("🚀 ~ file: ej-203.js:16 ~ cambiarADolares", cambiarADolares);

  try {
    await cambiarMoneda("PESOS CHL", 20000);
  } catch (error) {
    console.log("🚀 ~ file: ej-203.js:21 ~ error de la PROMESA", error);
  }
};

hacerCambioAsincrono();
