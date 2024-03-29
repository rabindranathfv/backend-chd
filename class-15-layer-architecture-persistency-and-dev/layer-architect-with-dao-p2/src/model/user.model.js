const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const collection = "Usuarios";

const roleType = {
  USER: "USER",
  ADMIN: "ADMIN",
  PUBLIC: "PUBLIC",
};

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
  role: {
    type: String,
    enum: Object.values(roleType),
  },
});

schema.plugin(mongoosePaginate);

const userModel = mongoose.model(collection, schema);
module.exports = userModel;
