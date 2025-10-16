import express, { NextFunction, Request, Response } from "express";
import router from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from "cors";

const user: string = "admin";
const password: string = "123456";
const connectionString = `mongodb://${user}:${password}@mongodb:27017/todo-app?authSource=admin&retryWrites=true&w=majority`;

const app = express();

// Settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Database
mongoose.connect(connectionString);

// Routes
app.use("/tasks", router);

export default app;
