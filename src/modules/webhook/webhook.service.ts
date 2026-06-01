import { EventModel } from "../../models/event.model.js";
import type { WebhookEvent } from "../../types/webhook-event.types.js";

class WebhookService {
  async receiveEvent(event: WebhookEvent): Promise<void> {
    await EventModel.create({
      eventId: event.id,
      tenantId: event.tenantId,
      type: event.type,
      payload: event,
    });
  }
}

export default new WebhookService();
