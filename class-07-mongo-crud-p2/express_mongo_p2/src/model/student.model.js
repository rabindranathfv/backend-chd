const mongoose = require("mongoose");

const collectionName = "Estudiantes";

const studentSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
});

const studentsModel = mongoose.model(collectionName, studentSchema);
module.exports = studentsModel;
