import express, { NextFunction, Request, Response } from "express";
import router from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Database
mongoose.connect("mongodb://localhost:27017/todo-app");

// Routes
app.use("/tasks", router);

export default app;
