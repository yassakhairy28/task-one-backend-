import { Schema, model } from "mongoose";

const deadLetterSchema = new Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const DeadLetterEventModel = model("DeadLetterEvent", deadLetterSchema);
