import { boolean } from "joi";
import mongoose from "mongoose";
import shortid from "shortid";

const id  = shortid.generate()

const signupSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    unique: true,
  },
  country:{
    type: String,
    required: true,
  },
  imageLink:{
    type: String,
    required: true,
  },
  language:{
    type: String,
    required: true,
  },
  link:{
    type: String,
    required: true,
  },
  pages:{
    type: Number,
    required: true,
  },
  title:{
    type: String,
    required: true
  },
  year:{
    type: Number,
    required: true,
  }
} , {
    collection: "books"
});

const Books = mongoose.model('Books' , signupSchema , "books")
export default Books