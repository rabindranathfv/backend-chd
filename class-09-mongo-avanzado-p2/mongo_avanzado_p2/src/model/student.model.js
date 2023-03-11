const mongoose = require("mongoose");

const collectionName = "Estudiantes";

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
});

const studentsModel = mongoose.model(collectionName, studentSchema);
module.exports = studentsModel;
