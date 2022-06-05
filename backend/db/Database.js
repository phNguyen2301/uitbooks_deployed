import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });
async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connect success");
  } catch (error) {
    console.log("Connect failure!!");
  }
  mongoose.connect(process.env.DB_URI);
}

export default connectDatabase;
