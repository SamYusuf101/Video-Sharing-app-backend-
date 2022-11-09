import mongoose, { Mongoose } from "mongoose";

const CommentsSchema = new Mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },

    videorId: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Comments", UserSchema);
