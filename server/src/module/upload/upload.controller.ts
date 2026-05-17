import type { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { deleteFromS3, getS3KeyFromUrl, signUrls, generatePresignedUploadUrl } from "../../utils/s3.utils.js";
import { prisma } from "../../database/db.js";
import crypto from "crypto";

const MAX_RESUMES = 2;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, "../../../uploads");

/** Delete a file - keeps local fallback support just in case users have legacy local files */
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
  
  /** * NEW: Generate Pre-signed URL for direct client-to-S3 uploads 
   */
  async getPresignedUrl(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const { fileName, fileType, folder = "uploads" } = req.body;
      if (!fileName || !fileType) {
        return res.status(400).json({ message: "fileName and fileType are required" });
      }

      const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
      const uniqueId = crypto.randomUUID();
      const fileKey = `${folder}/${req.user.id}/${uniqueId}-${cleanFileName}`;

      const uploadUrl = await generatePresignedUploadUrl(fileKey, fileType);
      const fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

      return res.status(200).json({ uploadUrl, fileKey, fileUrl });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Save profile picture URL (Called AFTER frontend uploads to S3) */
  async uploadProfilePic(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      
      const { fileUrl } = req.body;
      if (!fileUrl) return res.status(400).json({ message: "fileUrl is required" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { profilePic: true } });

      const user = await prisma.user.update({
        where: { id: userId },
        data: { profilePic: fileUrl },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      if (current?.profilePic) deleteFile(current.profilePic);

      return res.status(200).json({ message: "Profile picture updated", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Save cover image URL (Called AFTER frontend uploads to S3) */
  async uploadCoverImage(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      
      const { fileUrl } = req.body;
      if (!fileUrl) return res.status(400).json({ message: "fileUrl is required" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { coverImage: true } });

      const user = await prisma.user.update({
        where: { id: userId },
        data: { coverImage: fileUrl },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      if (current?.coverImage) deleteFile(current.coverImage);

      return res.status(200).json({ message: "Cover image updated", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** Save resume URL (Called AFTER frontend uploads to S3) */
  async uploadProfileResume(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      
      const { fileUrl, originalName, size, mimeType } = req.body;
      if (!fileUrl) return res.status(400).json({ message: "fileUrl is required" });

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { resumes: true } });

      let updatedResumes = current?.resumes ?? [];
      if (updatedResumes.length >= MAX_RESUMES) {
        const oldest = updatedResumes[0]!;
        deleteFile(oldest);
        updatedResumes = [...updatedResumes.slice(1), fileUrl];
      } else {
        updatedResumes = [...updatedResumes, fileUrl];
      }

      const user = await prisma.user.update({
        where: { id: userId },
        data: { resumes: updatedResumes },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, resumes: true, company: true, designation: true, createdAt: true },
      });

      const signedResumes = await signUrls(user.resumes);
      return res.status(200).json({
        message: "Resume updated",
        user: { ...user, resumes: signedResumes },
        file: { url: fileUrl, originalName, size, mimeType },
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

      const { url: rawUrl } = req.body as { url?: string };
      if (!rawUrl) return res.status(400).json({ message: "Resume URL is required" });

      const url = rawUrl.split("?")[0]!;
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
      const signedResumes = await signUrls(user.resumes);
      
      return res.status(200).json({ message: "Resume deleted", user: { ...user, resumes: signedResumes } });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}