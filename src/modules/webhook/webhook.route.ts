import { Router } from "express";
import { receiveWebhook } from "./webhook.controller.js";

const webhookRouter = Router();

webhookRouter.post("/", receiveWebhook);

export default webhookRouter;
