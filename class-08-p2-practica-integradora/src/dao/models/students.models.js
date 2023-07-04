const mongoose = require("mongoose");

const studentCollection = "Students";

const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
  },
  grade: {
    type: Number,
  },
  courses: {
    type: Array,
    default: [],
  },
});

const studentModel = mongoose.model(studentCollection, studentsSchema);
module.exports = studentModel;
