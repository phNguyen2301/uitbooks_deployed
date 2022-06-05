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
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

const __dir = path.resolve();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UIT BOOK API",
      version: "1.0.0",
      description: "All Apis For UIT BOOK Project",
    },
    // components: {
    //   securitySchemes: {
    //     jwt: {
    //       type: "http",
    //       scheme: "bearer",
    //       in: "header",
    //       bearerFormat: "JWT",
    //     },
    //   },
    // },
    // security: [
    //   {
    //     jwt: ["123"],
    //   },
    // ],
    // servers: [
    //   {
    //     url: '',
    //   },
    // ],
  },

  apis: [path.join(__dir, "backend/routes/*.js")],
};

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

const specs = swaggerJsDoc(options);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dir, "frontend/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dir + "/frontend/build/index.html"));
});
app.use(ErrorHandler);

export default app;
