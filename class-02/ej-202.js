// Promesas
const FACTOR_CAMBIO = 1.2;
let divisasAceptadas = ["$", "PESOS COL", "PESOS ARG"];

// TODO: Intentar indicar la moneda de salida
const cambiarMoneda = (divisa, monto) => {
  return new Promise((resolve, reject) => {
    if (!divisasAceptadas.includes(divisa)) {
      reject("no aceptamos esa divisa");
    } else if (monto <= 0) {
      reject("monto INVALIDO");
    } else {
      resolve(monto / FACTOR_CAMBIO);
    }
  });
};

const cambiarADolares = cambiarMoneda("PESOS COL", 10000)
  .then((res) => {
    console.log("🚀 ~ file: ej-202.js:17 ~ cambiarADolares ~ res", res); // EXITOSAMENTE
  })
  .catch((err) => {
    console.log("🚀 ~ file: ej-202.js:20 ~ cambiarADolares ~ err", err);
  });
const cambiarAEuros = cambiarMoneda("PESOS CHL", 20000)
  .then((res) => {
    console.log("🚀 ~ file: ej-202.js:24 ~ cambiarADolares ~ res", res);
  })
  .catch((err) => {
    console.log("🚀 ~ file: ej-202.js:27 ~ cambiarADolares ~ err", err); // SE RECHAZA LA PROMESA
  });
const cambiar0 = cambiarMoneda("$", -100)
  .then((res) => {
    console.log("🚀 ~ file: ej-202.js:34 ~ .then ~ res", res);
  })
  .catch((err) => {
    console.log("🚀 ~ file: ej-202.js:38 ~ err", err);
  });
