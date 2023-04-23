import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Productos";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
});

schema.plugin(mongoosePaginate);
const productModel = mongoose.model(collection, schema);
export default productModel;
