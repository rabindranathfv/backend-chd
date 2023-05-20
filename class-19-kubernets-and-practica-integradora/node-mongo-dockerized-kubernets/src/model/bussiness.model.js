import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const collection = "Bussiness";

const schema = new mongoose.Schema({
  name: String,
  products: [],
});

schema.plugin(mongoosePaginate);
const bussinessModel = mongoose.model(collection, schema);
export default bussinessModel;
