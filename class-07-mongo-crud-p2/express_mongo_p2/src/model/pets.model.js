const mongoose = require("mongoose");

const collectionName = "Mascotas";

const petSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
});

const petsModel = mongoose.model(collectionName, petSchema);
module.exports = petsModel;