import { Schema, model } from "mongoose";
import { EventStatus } from "../types/webhook-event.types.js";

const eventSchema = new Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
    },

    tenantId: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(EventStatus),
      default: EventStatus.pending,
    },

    attempts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const EventModel = model("Event", eventSchema);
