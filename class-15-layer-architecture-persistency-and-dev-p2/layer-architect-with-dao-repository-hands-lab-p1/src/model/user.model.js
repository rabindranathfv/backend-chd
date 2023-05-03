import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { collection as collectionBussiness } from "./bussiness.model.js";

export const collection = "Users";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: collectionBussiness,
    },
  ],
});

schema.plugin(mongoosePaginate);
const userModel = mongoose.model(collection, schema);
export default userModel;
