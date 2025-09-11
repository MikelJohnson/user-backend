import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  passHash: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);
