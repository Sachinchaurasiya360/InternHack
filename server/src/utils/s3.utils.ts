import { randomUUID } from "crypto";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

const AWS_REGION = process.env["AWS_REGION"] || "ap-south-1";
const AWS_ACCESS_KEY_ID = process.env["AWS_ACCESS_KEY_ID"];
const AWS_SECRET_ACCESS_KEY = process.env["AWS_SECRET_ACCESS_KEY"];
const AWS_S3_BUCKET = process.env["AWS_S3_BUCKET"];

if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_S3_BUCKET) {
  throw new Error(
    "S3 configuration incomplete: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_S3_BUCKET must all be set in environment variables.",
  );
}

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET = AWS_S3_BUCKET;
const REGION = AWS_REGION;

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
  // s3Client is cast to any due to a known TypeScript type mismatch/compatibility issue between @aws-sdk/client-s3 and @aws-sdk/s3-request-presigner.
  // See: https://github.com/aws/aws-sdk-js-v3/issues/4312
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


export interface UploadPolicy {
  allowedMimeTypes: string[];
  maxSize: number;
}

export const UPLOAD_POLICIES: Record<string, UploadPolicy> = {
  "resumes": {
    allowedMimeTypes: ["application/pdf"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
  "guest-resumes": {
    allowedMimeTypes: ["application/pdf"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
  "profile-pics": {
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
  "cover-images": {
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
  "company-logos": {
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
};

export const generatePresignedUploadUrl = async (fileKey: string, fileType: string, folder: string) => {
  const policy = UPLOAD_POLICIES[folder];
  if (!policy) {
    throw new Error(`Invalid or unauthorized upload folder: ${folder}`);
  }

  if (!policy.allowedMimeTypes.includes(fileType)) {
    throw new Error(`Invalid file type "${fileType}" for folder "${folder}". Allowed: ${policy.allowedMimeTypes.join(", ")}`);
  }

  // Use createPresignedPost to enforce strict file size limits (Denial of Wallet prevention)
  // s3Client is cast to any due to a known TypeScript type mismatch/compatibility issue between @aws-sdk/client-s3 and @aws-sdk/s3-presigned-post.
  // See: https://github.com/aws/aws-sdk-js-v3/issues/4312
  const { url, fields } = await createPresignedPost(s3Client as any, {
    Bucket: BUCKET,
    Key: fileKey,
    Conditions: [
      ["content-length-range", 0, policy.maxSize], // Limit file size based on server-side policy
      ["eq", "$Content-Type", fileType], // Enforces exact content type
    ],
    Fields: {
      "Content-Type": fileType,
    },
    Expires: 300, // URL expires in 5 minutes (300 seconds)
  });

  return { url, fields };
};