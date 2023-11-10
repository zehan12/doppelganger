import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postText: { type: String, required: true },
    likes: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postSchema);
