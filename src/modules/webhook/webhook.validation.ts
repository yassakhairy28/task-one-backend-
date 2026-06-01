import joi from "joi";

export const receiveWebhookSchema = {
  body: joi.object({
    id: joi.string().required(),

    tenantId: joi.string().required(),

    type: joi
      .string()
      .valid("payment.success", "payment.failed", "message.received")
      .required(),

    data: joi.object().required(),
  }),
};
