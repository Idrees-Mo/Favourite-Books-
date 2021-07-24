import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  photo_url: { type: String },
});

export default mongoose.model("Author", authorSchema);
