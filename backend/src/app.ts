import express, { NextFunction, Request, Response } from "express";
import taskRoutes from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the server!");
});

export default app;
