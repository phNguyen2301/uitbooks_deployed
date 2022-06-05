import mongoose from "mongoose";
import dotenv from "dotenv";

async function connectDatabase() {
  dotenv.config();
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connect success");
  } catch (error) {
    console.log("Connect failure!!");
  }
  mongoose.connect(process.env.DB_URI);
}

export default connectDatabase;
