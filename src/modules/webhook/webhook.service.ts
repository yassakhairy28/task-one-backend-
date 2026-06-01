import type { Request, Response } from "express";
import { EventModel } from "../../models/event.model.js";
import type { WebhookEvent } from "../../types/webhook-event.types.js";

class WebhookService {
  receiveEvent = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    await EventModel.create({
      eventId: data.id,
      tenantId: data.tenantId,
      type: data.type,
      payload: data,
    });
    res.status(200).json({ message: "Event received successfully" });
  };
}

export default new WebhookService();
