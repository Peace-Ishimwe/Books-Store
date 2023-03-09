import { addUser, loginValidate } from "../controllers/controller.js";
import express  from "express";
const route = express.Router()

route.post('/v1/api/signup', addUser)
route.post('/v1/api/login' , loginValidate)

export default route