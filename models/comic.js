import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comic = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: false },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, required: false }
  },
  { timestamps: true }
)

export default mongoose.model("comics", Comic);