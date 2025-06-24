import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    rquired: true,
    enum: ["male", "female", "others"],
  },
  profilePic: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: "",
      localPath: "",
    },
  },
});
export const User = mongoose.model("User", userSchema);
