import { randomUUID } from "crypto";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env["AWS_REGION"] || "ap-south-1",
  credentials: {
    accessKeyId: process.env["AWS_ACCESS_KEY_ID"] || "",
    secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] || "",
  },
});

const BUCKET = process.env["AWS_S3_BUCKET"] || "";
const REGION = process.env["AWS_REGION"] || "ap-south-1";

function getBucketUrl(): string {
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com`;
}

export function createUniqueS3Key(folder: string, userId: string, fileName: string): string {
  const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
  const uniqueId = randomUUID();
  return `${folder}/${String(userId)}/${uniqueId}-${cleanFileName}`;
}

export async function uploadToS3(
  buffer: Buffer,
  key: string,
  contentType: string,
): Promise<string> {
  await s3Client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    }),
  );
  return `${getBucketUrl()}/${key}`;
}

async function getSignedS3Url(key: string, expiresIn = 3600): Promise<string> {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: key });
  return getSignedUrl(s3Client as any, command, { expiresIn });
}

export async function deleteFromS3(key: string): Promise<void> {
  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    }),
  );
}

export async function getBufferFromS3(key: string): Promise<Buffer> {
  const response = await s3Client.send(
    new GetObjectCommand({
      Bucket: BUCKET,
      Key: key,
    }),
  );
  return Buffer.from(await response.Body!.transformToByteArray());
}

export function getS3KeyFromUrl(url: string): string | null {
  const prefix = `${getBucketUrl()}/`;
  if (url.startsWith(prefix)) {
    return url.slice(prefix.length);
  }
  return null;
}

/** Convert a raw S3 URL to a pre-signed URL. Non-S3 URLs are returned as-is. */
export async function signUrl(url: string, expiresIn = 3600): Promise<string> {
  const key = getS3KeyFromUrl(url);
  if (!key) return url;
  return getSignedS3Url(key, expiresIn);
}

/** Sign every URL in a string array (e.g. user.resumes). */
export async function signUrls(urls: string[], expiresIn = 3600): Promise<string[]> {
  return Promise.all(urls.map((u) => signUrl(u, expiresIn)));
}


import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export const generatePresignedUploadUrl = async (fileKey: string, fileType: string, maxSizeLimit = 10485760) => {
  const bucketName = process.env.AWS_S3_BUCKET || process.env.AWS_BUCKET_NAME || "";
  
  // Use createPresignedPost to enforce strict file size limits (Denial of Wallet prevention)
  const { url, fields } = await createPresignedPost(s3Client as any, {
    Bucket: bucketName,
    Key: fileKey,
    Conditions: [
      ["content-length-range", 0, maxSizeLimit], // Limit file size (default 10MB)
      ["eq", "$Content-Type", fileType], // Enforces exact content type
    ],
    Fields: {
      "Content-Type": fileType,
    },
    Expires: 300, // URL expires in 5 minutes (300 seconds)
  });

  return { url, fields };
};