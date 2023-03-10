import mongoose from "mongoose";
import shortid from "shortid";

const id  = shortid.generate()

const signupSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  bookname: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  }
} , {
    collection: "books"
});

const Books = mongoose.model('Books' , signupSchema , "books")
export default Books