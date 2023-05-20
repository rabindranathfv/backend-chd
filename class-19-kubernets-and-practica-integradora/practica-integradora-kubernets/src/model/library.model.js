import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const collection = "Library";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.plugin(mongoosePaginate);
const libraryModel = mongoose.model(collection, schema);
export default libraryModel;
