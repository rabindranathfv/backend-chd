import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { collection as collectionBussiness } from "./bussiness.model.js";
import { collection as collectionUser } from "./user.model.js";

export const collection = "Orders";

const schema = new mongoose.Schema({
  number: Number,
  bussiness: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: collectionBussiness,
  },
  users: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: collectionUser,
  },
  products: [],
  totalPrice: Number,
});

schema.plugin(mongoosePaginate);
const orderModel = mongoose.model(collection, schema);
export default orderModel;
