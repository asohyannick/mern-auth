import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
// routes
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import { StatusCodes } from "http-status-codes";
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
// security packages
app.use(cors());
// middleware packages
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
// db config
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected successfully!");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.listen(PORT, function (req, res) {
  console.log(`Server is running on port ${PORT}...`);
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
// custom middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal  Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
