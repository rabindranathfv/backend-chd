import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import { setLogger } from "./utils/logger.js";
import { useLogger } from "./utils/logger-basic.js";
const app = express();

const PORT_APP = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(useLogger);
app.use(setLogger);

app.get("/", (req, res) => {
  req.logger.info("Petición GET recibida");
  res.send("¡Hola mundo!");
});

app.get("/warn", (req, res) => {
  req.logger.warn("Petición GET recibida en WARM 2");
  res.send("¡Hola mundo WARN!");
});

app.get("/error", (req, res) => {
  try {
    throw new Error("Error en GET HORRIBLE, NOS TUMBA LA API 2");
  } catch (error) {
    req.logger.error(`Petición GET recibida en ERROR ${error.message}`);
  }
  res.send("¡Hola mundo ERROR!");
});

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}, enviroment: ${process.env.NODE_ENV}`);
});
