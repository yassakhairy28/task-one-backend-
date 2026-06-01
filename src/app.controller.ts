import express from "express";
import { connectDatabase } from "./DB/DB_Connection.js";
import {
  globalErrorHandler,
  notFoundHanlder,
} from "./middleware/error.handler.middleware.js";
import webhookRouter from "./modules/webhook/webhook.controller.js";

const appController = async (app: express.Application): Promise<void> => {
  app.use(express.json()); // Middleware to parse JSON bodies

  await connectDatabase(); // Connect to the database

  // Routes
  app.use("/webhooks", webhookRouter);

  app.get("/", (req, res) => res.send("Welcome to the Task One Backend API!"));

  // Error handling
  app.all("/*dummy", notFoundHanlder); // Handle all unmatched routes
  app.use(globalErrorHandler); // Global error handler middleware
};

export default appController;
