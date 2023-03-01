const moment = require("moment");

const fechaNac = moment("1990-12-14");
const fechaHoy = moment();
const diffEdad = fechaHoy.diff(fechaNac, "years");
const diffDias = fechaHoy.diff(fechaNac, "days");
console.log("🚀 ~ file: index.js:7 ~ diffDias", diffDias);
console.log("🚀 ~ file: index.js:6 ~ diffEdad", diffEdad);
