import { Router, type Request, type Response } from "express";
import webhookService from "./webhook.service.js";
import { asyncHandler } from "../../middleware/error.handler.middleware.js";
import { validate } from "../../middleware/validation.middleware.js";
import * as webhookValiadtion from "./webhook.validation.js";

const webhookRouter = Router();

webhookRouter.post(
  "/",
  validate(webhookValiadtion.receiveWebhookSchema),
  asyncHandler(webhookService.receiveEvent),
);

export default webhookRouter;
