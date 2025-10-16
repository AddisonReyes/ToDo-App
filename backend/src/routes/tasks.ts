import express, { NextFunction, Request, Response } from "express";
import Task, { ITask } from "../models/task.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newTask: ITask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedTask);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).json({ message: "Task deleted successfully." });
});

export default router;
