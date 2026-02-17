import { Router } from "express";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { uploadSingle } from "../../middleware/upload.middleware.js";

const uploadController = new UploadController();

export const uploadRouter = Router();

uploadRouter.use(authMiddleware);

uploadRouter.post("/resume", uploadSingle, (req, res) => uploadController.uploadFile(req, res));
uploadRouter.post("/attachment", uploadSingle, (req, res) => uploadController.uploadFile(req, res));
