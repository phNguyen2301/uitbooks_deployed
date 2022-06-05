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
  cloud_name: "uitbooks",
  api_key: "219363929757447",
  api_secret: "0HFALAjLFYVwKv1JiXfBHJoTs3E",
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const { PORT = 5000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;
app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log("server listening at", PORT);
});

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
