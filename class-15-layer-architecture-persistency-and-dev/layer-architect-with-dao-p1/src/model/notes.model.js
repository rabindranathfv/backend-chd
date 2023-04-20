const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const collection = "notas";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

schema.plugin(mongoosePaginate);
const notesModel = mongoose.model(collection, schema);
module.exports = notesModel;
