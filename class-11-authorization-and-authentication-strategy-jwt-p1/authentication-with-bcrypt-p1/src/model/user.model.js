const mongoose = require("mongoose");

const collection = "Usuarios";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
});

const userModel = mongoose.model(collection, schema);
module.exports = userModel;
