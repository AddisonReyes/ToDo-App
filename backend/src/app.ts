import express, { NextFunction, Request, Response } from "express";
import router from "./routes/tasks.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const env = process.env.NODE_ENV || "dev";
const connectionString =
  env === "prod" ? process.env.MONGO_URL_PROD : process.env.MONGO_URL_DEV;
const app = express();

console.log(env, connectionString);

// Settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Database
if (connectionString) {
  mongoose.connect(connectionString);
}

// Routes
app.use("/tasks", router);

// Client errors
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "404 - Not Found", status: 404 });
});

// Server errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ error: err.message, status: 500 });
});

export default app;
