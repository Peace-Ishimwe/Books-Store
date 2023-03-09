import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import morgan from "morgan"
app.use(morgan('tiny'))
import cors from "cors"
app.use(cors())
import connectDB from "./database/dbConnect.js"
connectDB()
app.use(express.json())
import route from "./routes/routes.js"
app.use('/' , route)
import swaggerUi from "swagger-ui-express"
import swaggerJson from "./swagger.json"assert { type: 'json' };
app.use('/swagger' , swaggerUi.serve , swaggerUi.setup(swaggerJson))
app.listen(process.env.PORT , ()=>{
    console.log(`Listenning on port ${process.env.PORT}`);
})