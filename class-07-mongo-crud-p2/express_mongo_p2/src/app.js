const express = require("express");
const mongoose = require("mongoose");
const displayRoutes = require("express-routemap");
const studentsRoute = require("./routes/students.routes");
const petsRoutes = require("./routes/pets.routes");

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "baseCRUD";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then((conn) => {
    console.log("🚀 ~ CONNECTION OK ");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

app.use("/api/students", studentsRoute);
app.use("/api/pets", petsRoutes);

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT}`);
});
