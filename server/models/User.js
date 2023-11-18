import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    picturePath: String,
    name: {
      type: String,
    },
    ssid: String,
    bio: String,
    phone: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: String,
    githubId: String,
    linkedinId: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
