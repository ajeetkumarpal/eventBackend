import mongoose from "mongoose"
import { MONGODB_URL } from "./serverConfig.js"

const connectDB=async()=>{
    try {
      await  mongoose.connect(MONGODB_URL);
      console.log("database connected");
    } catch (error) {
        console.log("error in database",error);
      process.exit(1);
    }
}
export default connectDB;