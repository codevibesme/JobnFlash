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
     
    },
    password: {
      type: String,
    
    },

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
