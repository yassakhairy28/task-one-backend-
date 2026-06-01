import express from "express";
import { connectDatabase } from "./DB/DB_Connection.js";

const appController = async (app: express.Application): Promise<void> => {
  app.use(express.json()); // Middleware to parse JSON bodies

  await connectDatabase(); // Connect to the database

  app.get("/", (req, res) => res.send("Welcome to the Task One Backend API!"));
};

export default appController;
