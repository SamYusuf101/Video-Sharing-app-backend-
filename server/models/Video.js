import mongoose, { Mongoose } from "mongoose";

const VideoSchema = new Mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    tags: {
      type: [String],
      default: [],
    },

    likes: {
      type: [String],
      default: [],
    },

    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Video", UserSchema);