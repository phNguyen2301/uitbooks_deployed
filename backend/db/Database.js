import mongoose from "mongoose";

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://ie213-6:ie213-6@ie213-6.ji3lp.mongodb.net/MERN?retryWrites=true&w=majority"
    );
    console.log("Connect success");
  } catch (error) {
    console.log("Connect failure!!");
  }
  mongoose.connect(
    "mongodb+srv://ie213-6:ie213-6@ie213-6.ji3lp.mongodb.net/MERN?retryWrites=true&w=majority"
  );
}

export default connectDatabase;
