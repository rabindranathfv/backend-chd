const express = require("express");
const mongoose = require("mongoose");
const studentsRoute = require("./routes/students.routes");

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoStudentDB";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:18 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

app.use("/api/students", studentsRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
