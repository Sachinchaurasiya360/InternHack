import type { Request, Response } from "express";
import path from "path";
import { uploadToS3, deleteFromS3, getS3KeyFromUrl } from "../../utils/s3.utils.js";
import { prisma } from "../../database/db.js";

const MAX_RESUMES = 2;

function buildS3Key(folder: string, userId: number, originalName: string): string {
  const ext = path.extname(originalName);
  const safeName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e7)}`;
  return `${folder}/${userId}/${safeName}-${uniqueSuffix}${ext}`;
}

export class UploadController {
  /** Generic file upload to S3 (used by ATS etc.) */
  async uploadFile(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const userId = req.user?.id ?? 0;
      const key = buildS3Key("uploads", userId, req.file.originalname);
      const url = await uploadToS3(req.file.buffer, key, req.file.mimetype);

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

  /** Upload profile picture to S3, delete old one if it was on S3 */
  async uploadProfilePic(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      if (!req.file) return res.status(400).json({ message: "No image uploaded" });

      const userId = req.user.id;

      // Get current profile pic to delete old S3 file
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { profilePic: true } });
      const oldKey = current?.profilePic ? getS3KeyFromUrl(current.profilePic) : null;

      // Upload new pic
      const key = buildS3Key("profile-pics", userId, req.file.originalname);
      const url = await uploadToS3(req.file.buffer, key, req.file.mimetype);

      // Update user
      const user = await prisma.user.update({
        where: { id: userId },
        data: { profilePic: url },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      // Delete old S3 file (after successful update)
      if (oldKey) {
        deleteFromS3(oldKey).catch((err) => console.error("Failed to delete old profile pic:", err));
      }

      return res.status(200).json({ message: "Profile picture updated", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Upload resume to S3, max 2 per student */
  async uploadProfileResume(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      if (!req.file) return res.status(400).json({ message: "No file uploaded" });

      const userId = req.user.id;

      const current = await prisma.user.findUnique({ where: { id: userId }, select: { resumes: true } });
      if (current && current.resumes.length >= MAX_RESUMES) {
        return res.status(400).json({ message: `Maximum ${MAX_RESUMES} resumes allowed. Delete one before uploading a new one.` });
      }

      const key = buildS3Key("resumes", userId, req.file.originalname);
      const url = await uploadToS3(req.file.buffer, key, req.file.mimetype);

      const user = await prisma.user.update({
        where: { id: userId },
        data: { resumes: { push: url } },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      return res.status(200).json({ message: "Resume uploaded", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Delete a resume from S3 and user profile */
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

      // Remove from array
      const updatedResumes = current.resumes.filter((r) => r !== url);
      const user = await prisma.user.update({
        where: { id: userId },
        data: { resumes: updatedResumes },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      // Delete from S3
      const s3Key = getS3KeyFromUrl(url);
      if (s3Key) {
        deleteFromS3(s3Key).catch((err) => console.error("Failed to delete resume from S3:", err));
      }

      return res.status(200).json({ message: "Resume deleted", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
