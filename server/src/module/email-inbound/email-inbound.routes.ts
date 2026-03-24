import { Router } from "express";
import { handleInboundEmail } from "./email-inbound.controller.js";

export const emailInboundRouter = Router();

// Resend sends POST to this endpoint when an email is received
emailInboundRouter.post("/webhook", handleInboundEmail);
