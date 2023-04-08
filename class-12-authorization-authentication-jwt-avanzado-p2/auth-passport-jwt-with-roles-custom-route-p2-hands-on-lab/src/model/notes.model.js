const mongoose = require("mongoose");

const collection = "notas";

const schema = new mongoose.Schema({
  title: String,
  content: String,
});

const notesModel = mongoose.model(collection, schema);
module.exports = notesModel;
