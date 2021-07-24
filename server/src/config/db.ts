import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const URI: any = process.env.mongoURI;

export default async () => {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};
