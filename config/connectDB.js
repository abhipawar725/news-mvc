import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const db = process.env.MONGO_URL

const connectDB = () => {
    try {
        mongoose.connect(db)
        console.log("database is conncted")
    } catch (error) {
        console.log("database connection is failed")
        process.exit(1)        
    }
}

export default connectDB;