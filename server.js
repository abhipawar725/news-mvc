import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDatabase.js";
import userRouter from "./routes/user.routes.js";

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", userRouter)

connectDB()
app.listen(port, () => console.log(`server is connected on ${port}`))