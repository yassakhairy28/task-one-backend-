import type { Request, Response } from "express";
import webhookService from "./webhook.service.js";
import { asyncHandler } from "../../middleware/error.handler.middleware.js";

export const receiveWebhook = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await webhookService.receiveEvent(req.body);

    res.status(201).json({
      success: true,
      message: "Event saved successfully",
    });
  },
);
