import mongoose from "mongoose";
import shortid from "shortid";

const id  = shortid.generate()

const signupSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
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
  tel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  }
} , {
    collection: "users"
});

const User = mongoose.model('Signup' , signupSchema , "users")
export default User