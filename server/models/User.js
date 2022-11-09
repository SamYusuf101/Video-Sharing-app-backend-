import mongoose, { Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },

    subscribers: {
      type: Number,
      default: 0,
    },

    subscribedUsers: {
      type: [String],
    },
  },
  { timeStamps: true }
);

export default mongoose.model("User", UserSchema);
