import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const db = process.env.DB_URL

const connectDB = () => {
    try {
        mongoose.connect(db)
        console.log('database is connected')
    } catch (error) {
        console.log(error, 'database not connected')
        process.exit(1)
    } 
}

export default connectDB;