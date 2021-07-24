import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  cover_url: { type: String },
  authId: { type: String },
});

export default mongoose.model("Book", bookSchema);
