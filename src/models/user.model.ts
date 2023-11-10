import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  posts: [{ type: mongoose.Schema.ObjectId, ref: "POST" }],
  profile: { type: String },
  email: { type: String, require: true, unique: true },
  fullname: { type: String, require: true },
});

export const User = mongoose.model("user", userSchema);
