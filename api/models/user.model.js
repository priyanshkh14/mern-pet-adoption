import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
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
    avatar: {
      type: String,
      default: "https://d339b5nop2tkmp.cloudfront.net/assets/listing/large_default-f37c3b2ddc539b7721ffdbd4c88987add89f2ef0fd77a71d0d44a6cf3104916e.png"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;