import type { Request, Response } from "express";
import { randomUUID } from "crypto";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { createUniqueS3Key, deleteFromS3, getS3KeyFromUrl, signUrl, signUrls, generatePresignedUploadUrl } from "../../utils/s3.utils.js";
import { hashGuestIp, guestResumeKeyPrefix } from "../../utils/guest-ip.utils.js";
import { prisma } from "../../database/db.js";
import { createLogger } from "../../utils/logger.js";
import { cacheDel, cacheDelPattern } from "../../utils/cache.js";

const logger = createLogger("UploadController");

const MAX_RESUMES = 2;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB — must match s3.utils.ts UPLOAD_POLICIES

/**
 * Server-side allowlist of permitted MIME types for presigned URL generation.
 * Scoped to the four upload targets the application actually uses:
 * resumes (PDF), profile-pics, cover-images, and company-logos (images + SVG).
 * Executables, scripts, HTML, and other dangerous types are excluded.
 */
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

/**
 * SVG is an XSS risk when served from S3, so it is excluded from the general
 * allowlist. The company-logos folder intentionally permits SVG because the
 * existing per-folder policy in s3.utils.ts already allows it there.
 */
const SVG_ALLOWED_FOLDERS = new Set(["company-logos"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, "../../../uploads");

function getExpectedS3UrlPrefix(): string {
  const bucketName = process.env.AWS_S3_BUCKET || process.env.AWS_BUCKET_NAME || "";
  const region = process.env.AWS_REGION || "ap-south-1";
  return `https://${bucketName}.s3.${region}.amazonaws.com/`;
}

function isValidS3FileUrl(url: unknown, userId?: number): url is string {
  if (typeof url !== "string" || !url.startsWith(getExpectedS3UrlPrefix())) {
    return false;
  }
  
  if (userId !== undefined) {
    const key = getS3KeyFromUrl(url);
    if (!key) return false;
    
    // Key format is <folder>/<userId>/<uuid>-<filename>
    const parts = key.split('/');
    if (parts.length < 3 || parts[1] !== String(userId)) {
      return false;
    }
  }
  
  return true;
}

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
  /** Public guest upload — no auth; files scoped to guest-resumes/{ipHash}/ */
  async getGuestPresignedUrl(req: Request, res: Response) {
    try {
      const { fileName, fileType } = req.body as { fileName?: string; fileType?: string };
      if (!fileName || !fileType) {
        return res.status(400).json({ message: "fileName and fileType are required" });
      }
      if (fileType !== "application/pdf") {
        return res.status(400).json({ message: "Only PDF resumes are allowed for guest uploads" });
      }

      const ipHash = hashGuestIp(req);
      const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
      const fileKey = `${guestResumeKeyPrefix(ipHash)}${randomUUID()}-${cleanFileName}`;

      let presignedData;
      try {
        presignedData = await generatePresignedUploadUrl(fileKey, fileType, "guest-resumes");
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to generate upload URL";
        logger.error("Guest presigned URL generation failed:", err);
        return res.status(msg.startsWith("Invalid") ? 400 : 500).json({ message: msg });
      }

      const { url: uploadUrl, fields: uploadFields } = presignedData;
      const bucketName = process.env.AWS_S3_BUCKET || process.env.AWS_BUCKET_NAME || "";
      const region = process.env.AWS_REGION || "ap-south-1";
      const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileKey}`;

      return res.status(200).json({ uploadUrl, uploadFields, fileKey, fileUrl });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  /** * NEW: Generate Pre-signed URL for direct client-to-S3 uploads 
   */
  async getPresignedUrl(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const { fileName, fileType, folder } = req.body;
      if (!fileName || !fileType || !folder) {
        return res.status(400).json({ message: "fileName, fileType, and folder are required" });
      }

      const isSvgForLogoFolder =
        fileType === "image/svg+xml" && SVG_ALLOWED_FOLDERS.has(folder as string);
      if (!ALLOWED_MIME_TYPES.has(fileType as string) && !isSvgForLogoFolder) {
        return res.status(400).json({ message: "File type not allowed." });
      }

      const fileKey = createUniqueS3Key(folder, String(req.user.id), fileName);
      
      let presignedData;
      try {
        presignedData = await generatePresignedUploadUrl(fileKey, fileType, folder);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to generate upload URL";
        const isClientError =
          msg.startsWith("Invalid or unauthorized upload folder") ||
          msg.startsWith("Invalid file type");

        if (isClientError) {
          return res.status(400).json({ message: msg });
        }

        logger.error("Presigned URL generation failed:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      const { url: uploadUrl, fields: uploadFields } = presignedData;
      const bucketName = process.env.AWS_S3_BUCKET || process.env.AWS_BUCKET_NAME || "";
      const region = process.env.AWS_REGION || "ap-south-1";
      const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileKey}`;

      return res.status(200).json({ uploadUrl, uploadFields, fileKey, fileUrl });
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
      if (!isValidS3FileUrl(fileUrl, req.user.id)) {
        return res.status(400).json({ message: "Invalid fileUrl origin or ownership" });
      }

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { profilePic: true } });

      const user = await prisma.user.update({
        where: { id: userId },
        data: { profilePic: fileUrl },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true, profileSlug: true },
      });

      if (current?.profilePic) deleteFile(current.profilePic);

      // Bust cached profiles so public viewers see the new avatar immediately.
      await Promise.all([
        cacheDel(`profile:me:${userId}`),
        cacheDelPattern(`profile:public:${userId}:`),
        user.profileSlug ? cacheDelPattern(`profile:public:${(user as any).profileSlug}:`) : Promise.resolve(),
      ]);

      if (user.profilePic) (user as Record<string, unknown>).profilePic = await signUrl(user.profilePic);
      if (user.coverImage) (user as Record<string, unknown>).coverImage = await signUrl(user.coverImage);
      if (user.resumes.length > 0) (user as Record<string, unknown>).resumes = await signUrls(user.resumes);

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
      if (!isValidS3FileUrl(fileUrl, req.user.id)) {
        return res.status(400).json({ message: "Invalid fileUrl origin or ownership" });
      }

      const userId = req.user.id;
      const current = await prisma.user.findUnique({ where: { id: userId }, select: { coverImage: true } });

      const user = await prisma.user.update({
        where: { id: userId },
        data: { coverImage: fileUrl },
        select: { id: true, name: true, email: true, role: true, contactNo: true, profilePic: true, coverImage: true, resumes: true, company: true, designation: true, createdAt: true, profileSlug: true },
      });

      if (current?.coverImage) deleteFile(current.coverImage);

      // Bust cached profiles so public viewers see the new cover image immediately.
      await Promise.all([
        cacheDel(`profile:me:${userId}`),
        cacheDelPattern(`profile:public:${userId}:`),
        (user as any).profileSlug ? cacheDelPattern(`profile:public:${(user as any).profileSlug}:`) : Promise.resolve(),
      ]);

      if (user.profilePic) (user as Record<string, unknown>).profilePic = await signUrl(user.profilePic);
      if (user.coverImage) (user as Record<string, unknown>).coverImage = await signUrl(user.coverImage);
      if (user.resumes.length > 0) (user as Record<string, unknown>).resumes = await signUrls(user.resumes);

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
      if (!isValidS3FileUrl(fileUrl, req.user.id)) {
        return res.status(400).json({ message: "Invalid fileUrl origin or ownership" });
      }
      if (typeof size === "number" && size > MAX_FILE_SIZE) {
        return res.status(400).json({ message: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)} MB limit` });
      }

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

      // Bust cached profiles so public viewers see the latest resume list.
      await Promise.all([
        cacheDel(`profile:me:${userId}`),
        cacheDelPattern(`profile:public:${userId}:`),
      ]);

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
      if (!isValidS3FileUrl(rawUrl, req.user.id)) {
        return res.status(400).json({ message: "Resume URL must be from authorized S3 bucket" });
      }

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

      // Bust cached profiles so public viewers no longer see the deleted resume.
      await Promise.all([
        cacheDel(`profile:me:${userId}`),
        cacheDelPattern(`profile:public:${userId}:`),
      ]);

      return res.status(200).json({ message: "Resume deleted", user: { ...user, resumes: signedResumes } });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}