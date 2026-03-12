import type { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { uploadToS3, deleteFromS3, getS3KeyFromUrl } from "../../utils/s3.utils.js";
import { prisma } from "../../database/db.js";
import { validateOrReject } from "../../utils/file-validation.utils.js";

const MAX_RESUMES = 2;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, "../../../uploads");

function buildS3Key(folder: string, userId: number, originalName: string): string {
  const ext = path.extname(originalName);
  const safeName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e7)}`;
  return `${folder}/${userId}/${safeName}-${uniqueSuffix}${ext}`;
}

/** Save file locally as fallback when S3 is unavailable */
function saveLocally(buffer: Buffer, folder: string, userId: number, originalName: string): string {
  const ext = path.extname(originalName);
  const safeName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e7)}`;
  const relDir = path.join(folder, String(userId));
  const absDir = path.join(UPLOADS_DIR, relDir);

  fs.mkdirSync(absDir, { recursive: true });

  const filename = `${safeName}-${uniqueSuffix}${ext}`;
  fs.writeFileSync(path.join(absDir, filename), buffer);

  return `/uploads/${relDir}/${filename}`.replace(/\\/g, "/");
}

/** Read file from disk (multer disk storage) and clean up temp file */
function readAndCleanup(filePath: string): Buffer {
  const buffer = fs.readFileSync(filePath);
  fs.unlink(filePath, () => {});
  return buffer;
}

/** Try S3 first, fall back to local storage */
async function uploadWithFallback(buffer: Buffer, folder: string, userId: number, originalName: string, mimeType: string): Promise<string> {
  const key = buildS3Key(folder, userId, originalName);
  try {
    const url = await uploadToS3(buffer, key, mimeType);
    return url;
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[S3] Upload failed, falling back to local:", error.message);
    return saveLocally(buffer, folder, userId, originalName);
  }
}

/** Delete a file - handles both S3 URLs and local paths */
function deleteFile(url: string): void {
  const s3Key = getS3KeyFromUrl(url);
  if (s3Key) {
    deleteFromS3(s3Key).catch((err) => console.error("Failed to delete from S3:", err));
  } else if (url.startsWith("/uploads/")) {
    const absPath = path.join(UPLOADS_DIR, "..", url);
    fs.unlink(absPath, (err) => { if (err) console.error("Failed to delete local file:", err); });
  }
}

export class UploadController {
  /** Generic file upload - S3 with local fallback (used by ATS etc.) */
  async uploadFile(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const userId = req.user.id;

      // Validate actual file content matches claimed MIME type
      await validateOrReject(
        req.file.path,
        ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/webp", "text/plain"],
        "File content does not match allowed file types",
      );

      const buffer = readAndCleanup(req.file.path);
      const url = await uploadWithFallback(buffer, "uploads", userId, req.file.originalname, req.file.mimetype);

      return res.status(200).json({
        message: "File uploaded successfully",
        file: {
          url,
          originalName: req.file.originalname,
          size: req.file.size,
          mimeType: req.file.mimetype,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Upload profile picture - S3 with local fallback */
  async uploadProfilePic(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      if (!req.file) return res.status(400).json({ message: "No image uploaded" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { profilePic: true } });

      await validateOrReject(req.file.path, ["image/jpeg", "image/png", "image/webp"], "File content is not a valid image");

      const buffer = readAndCleanup(req.file.path);
      const url = await uploadWithFallback(buffer, "profile-pics", userId, req.file.originalname, req.file.mimetype);

      const user = await prisma.user.update({
        where: { id: userId },
        data: { profilePic: url },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      if (current?.profilePic) {
        deleteFile(current.profilePic);
      }

      return res.status(200).json({ message: "Profile picture updated", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Upload cover/banner image - S3 with local fallback */
  async uploadCoverImage(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      if (!req.file) return res.status(400).json({ message: "No image uploaded" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { coverImage: true } });

      await validateOrReject(req.file.path, ["image/jpeg", "image/png", "image/webp"], "File content is not a valid image");

      const buffer = readAndCleanup(req.file.path);
      const url = await uploadWithFallback(buffer, "cover-images", userId, req.file.originalname, req.file.mimetype);

      const user = await prisma.user.update({
        where: { id: userId },
        data: { coverImage: url },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      if (current?.coverImage) {
        deleteFile(current.coverImage);
      }

      return res.status(200).json({ message: "Cover image updated", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Upload resume - S3 with local fallback, max 2 per student */
  async uploadProfileResume(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      if (!req.file) return res.status(400).json({ message: "No file uploaded" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { resumes: true } });

      await validateOrReject(
        req.file.path,
        ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        "File content is not a valid resume document",
      );

      const buffer = readAndCleanup(req.file.path);
      const url = await uploadWithFallback(buffer, "resumes", userId, req.file.originalname, req.file.mimetype);

      // If at max, delete the oldest resume to make room
      let updatedResumes = current?.resumes ?? [];
      if (updatedResumes.length >= MAX_RESUMES) {
        const oldest = updatedResumes[0]!;
        deleteFile(oldest);
        updatedResumes = [...updatedResumes.slice(1), url];
      } else {
        updatedResumes = [...updatedResumes, url];
      }

      const user = await prisma.user.update({
        where: { id: userId },
        data: { resumes: updatedResumes },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      return res.status(200).json({
        message: "Resume uploaded",
        user,
        file: { url, originalName: req.file.originalname, size: req.file.size, mimeType: req.file.mimetype },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Delete a resume from S3/local and user profile */
  async deleteProfileResume(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const { url } = req.body as { url?: string };
      if (!url) return res.status(400).json({ message: "Resume URL is required" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { resumes: true } });

      if (!current || !current.resumes.includes(url)) {
        return res.status(404).json({ message: "Resume not found" });
      }

      const updatedResumes = current.resumes.filter((r) => r !== url);
      const user = await prisma.user.update({
        where: { id: userId },
        data: { resumes: updatedResumes },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      deleteFile(url);

      return res.status(200).json({ message: "Resume deleted", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
