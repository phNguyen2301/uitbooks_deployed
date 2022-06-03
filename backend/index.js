import app from "./app.js";
import bodyParser from "body-parser";
import connectDatabase from "./db/Database.js";

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

connectDatabase();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const { PORT = 5000 } = 5000;
app.listen(PORT, () => {
  console.log("server listening at", PORT);
});

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
