import { readFile, unlink } from "fs/promises";

/** Validate file content matches expected MIME types by checking magic bytes */
export async function validateFileContent(
  filePath: string,
  allowedMimes: string[],
): Promise<{ valid: boolean; detectedMime: string | undefined }> {
  const buffer = await readFile(filePath);
  // Dynamic import for file-type package (CJS module)
  const fileType = await import("file-type");
  const fromBuffer = (fileType as unknown as { default?: { fromBuffer: typeof fileType.fromBuffer } }).default?.fromBuffer ?? fileType.fromBuffer;
  const result = await fromBuffer(buffer);
  const detectedMime = result?.mime;

  // PDF magic bytes: %PDF - file-type detects this as application/pdf
  // Word .docx is application/zip internally, but detected as
  // application/vnd.openxmlformats-officedocument.wordprocessingml.document
  // .doc is application/x-cfbf or application/msword
  // For text/plain files, file-type returns undefined (no magic bytes)
  if (!detectedMime) {
    // file-type can't detect plain text, .doc (old format), etc.
    // Allow if MIME list includes text/plain or the original mimetype was allowed
    return { valid: allowedMimes.includes("text/plain"), detectedMime: undefined };
  }

  // Map detected MIME to allowed MIME (some formats have aliases)
  const mimeAliases: Record<string, string[]> = {
    "application/x-cfbf": ["application/msword"],
    "application/zip": [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  };

  const effectiveMimes = [detectedMime, ...(mimeAliases[detectedMime] ?? [])];
  const valid = effectiveMimes.some((m) => allowedMimes.includes(m));

  return { valid, detectedMime };
}

/** Validate and clean up if invalid */
export async function validateOrReject(
  filePath: string,
  allowedMimes: string[],
  friendlyError: string,
): Promise<void> {
  const { valid } = await validateFileContent(filePath, allowedMimes);
  if (!valid) {
    await unlink(filePath).catch(() => {});
    throw new Error(friendlyError);
  }
}
