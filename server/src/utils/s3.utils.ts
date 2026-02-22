import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env["AWS_REGION"] ?? "ap-south-1",
  credentials: {
    accessKeyId: process.env["AWS_ACCESS_KEY_ID"] ?? "",
    secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] ?? "",
  },
});

const BUCKET = process.env["AWS_S3_BUCKET"] ?? "";
const REGION = process.env["AWS_REGION"] ?? "ap-south-1";

function getBucketUrl(): string {
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com`;
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
