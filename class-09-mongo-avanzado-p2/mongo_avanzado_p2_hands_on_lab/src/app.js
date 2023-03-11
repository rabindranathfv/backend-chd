const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const viewsRoutes = require("./routes/views.routes");
const studentsRoutes = require("./routes/students.routes");

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoStudentDBV2";

const app = express();
const connection = mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:18 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/views", viewsRoutes);
app.use("/api/students", studentsRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
