const express = require("express");
const { fork } = require("child_process");

const PORT = 5000;
const API_BASE_PATH = "/api";

const app = express();

app.use(express.json()); // transforme el body y lo podamos usar en req.body
app.use(express.urlencoded({ extended: true })); // procesar req.body y los req.query

let visitas = 0;

app.get("/", (req, res) => {
  visitas++;
  res.send(`Cantidad de visitas: ${visitas}`);
});

app.get("/calculo-bloq", (req, res) => {
  let suma = 0;
  for (let i = 0; i <= 5e9; i++) {
    suma += i;
  }
  res.send(`Resultado de la suma: ${suma}`);
});

app.get("/calculo-nobloq", (req, res) => {
  console.log("visitas usando Process Child+++++++", visitas);
  const child = fork("calculo.js");
  child.on("message", (resultado) => {
    res.send(`Resultado de la suma: ${resultado}`);
  });
});

app.listen(PORT, () => {
  console.log(`API RUNNING`);
});
