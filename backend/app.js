import express from "express";
import cors from "cors";
import books from "./routes/books.js";
import ErrorHandler from "./middleware/error.js";
import user from "./routes/user.js";
import order from "./routes/order.js";
import payment from "./routes/payment.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import path from "path";
import fs from "fs";

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/v2", books);
app.use("/api/v2", user);
app.use("/api/v2", order);
app.use("/api/v2", payment);
const __dir = path.resolve();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dir, "frontend/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dir + "/frontend/build/index.html"));
});
app.use(ErrorHandler);

export default app;
