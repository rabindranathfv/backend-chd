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

const cambiarADolares = cambiarMoneda("PESOS COL", 10000)
  .then((res) => {
    console.log("🚀 ~ file: ej-202.js:16 ~ cambiarADolares ~ res", res);
  })
  .catch((err) => {
    console.log("🚀 ~ file: ej-202.js:18 ~ cambiarADolares ~ err", err);
  });
const cambiarAEuros = cambiarMoneda("PESOS CHL", 20000)
  .then((res) => {
    console.log("🚀 ~ file: ej-202.js:16 ~ cambiarADolares ~ res", res);
  })
  .catch((err) => {
    console.log("🚀 ~ file: ej-202.js:18 ~ cambiarADolares ~ err", err);
  });
