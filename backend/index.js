import app from "./app.js";
import bodyParser from "body-parser";
import connectDatabase from "./db/Database.js";
import { v2 as cloudinary } from "cloudinary";

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log("server listening at", address);
});

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
