import express, { NextFunction, Request, Response } from "express";
import router from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from "cors";

const url: string =
  "mongodb://admin:123456@mongodb:27017/todo-app?authSource=admin&retryWrites=true&w=majority";
const connectionString = process.env.MONGO_URL || url;

const app = express();

// Settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Database
mongoose.connect(connectionString);

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
