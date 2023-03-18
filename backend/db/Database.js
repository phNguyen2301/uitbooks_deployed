import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './backend/.env' });
async function connectDatabase() {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log('Connect success');
  } catch (error) {
    console.log('Connect failure!!');
  }
}

export default connectDatabase;
