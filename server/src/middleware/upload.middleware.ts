import multer from "multer";
import os from "os";
import path from "path";

// Use OS temp directory for disk storage — files are streamed to disk
// instead of being held entirely in memory, preventing OOM on concurrent uploads.
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, os.tmpdir());
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const safeName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    cb(null, `${safeName}-${Date.now()}-${Math.round(Math.random() * 1e7)}${ext}`);
  },
});

const resumeFilter = (_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and Word documents are allowed"));
  }
};

const imageFilter = (_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and WebP images are allowed"));
  }
};

const anyFileFilter = (_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "text/plain",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed"));
  }
};

export const uploadResume = multer({
  storage,
  fileFilter: resumeFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("file");

export const uploadImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
}).single("file");

export const uploadSingle = multer({
  storage,
  fileFilter: anyFileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("file");
