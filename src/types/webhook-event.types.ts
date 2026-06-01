export enum EventStatus {
  pending = "pending",
  processing = "processing",
  completed = "completed",
  failed = "failed",
  dlq = "dlq",
}

export interface PaymentSuccessEvent {
  id: string;
  tenantId: string;
  type: "payment.success";

  data: {
    amount: number;
    currency: string;
  };
}

export interface PaymentFailedEvent {
  id: string;
  tenantId: string;
  type: "payment.failed";

  data: {
    reason: string;
  };
}

export interface MessageReceivedEvent {
  id: string;
  tenantId: string;
  type: "message.received";

  data: {
    sender: string;
    text: string;
  };
}

export type WebhookEvent =
  | PaymentSuccessEvent
  | PaymentFailedEvent
  | MessageReceivedEvent;
