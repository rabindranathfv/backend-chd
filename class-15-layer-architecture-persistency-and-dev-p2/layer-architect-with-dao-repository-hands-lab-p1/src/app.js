import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import usersRoutes from "./routes/user.routes.js";
import bussinesRoutes from "./routes/bussines.routes.js";
import ordersRoutes from "./routes/orders.routes.js";

const app = express();

const PORT_APP = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "layerArchitectureDBHandsLab";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const connection = mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:18 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

app.use("/api/users", usersRoutes);
app.use("/api/bussiness", bussinesRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}`);
});
