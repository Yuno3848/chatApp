import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});
export const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("connected to database");
  } catch (error) {
    console.log("Error while connecting to database...", error);
  }
};
