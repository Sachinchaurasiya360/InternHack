import api from "../lib/axios";

interface UploadProfileParams {
  file: File;
  folder: 'resumes' | 'profile-pics' | 'cover-images' | 'company-logos';
  endpoint?: '/profile-resume' | '/profile-pic' | '/cover-image';
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES: Record<UploadProfileParams['folder'], string[]> = {
  'resumes': ['application/pdf'],
  'profile-pics': ['image/jpeg', 'image/png', 'image/webp'],
  'cover-images': ['image/jpeg', 'image/png', 'image/webp'],
  'company-logos': ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
};

export const uploadGuestResume = async (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)} MB limit`);
  }
  if (file.type !== "application/pdf") {
    throw new Error("Invalid file type. Allowed: application/pdf");
  }

  const { data: presignData } = await api.post("/upload/guest-presigned-url", {
    fileName: file.name,
    fileType: file.type,
  });

  const { uploadUrl, uploadFields, fileUrl } = presignData as {
    uploadUrl: string;
    uploadFields: Record<string, string>;
    fileUrl: string;
  };

  const formData = new FormData();
  Object.entries(uploadFields).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.append("file", file);

  const s3UploadRes = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
  });

  if (!s3UploadRes.ok) {
    const bodyText = (await s3UploadRes.text()).slice(0, 500);
    throw new Error(`S3 upload failed: ${s3UploadRes.status} ${s3UploadRes.statusText} ${bodyText}`);
  }

  return { fileUrl };
};

export const uploadDirectToS3 = async ({ file, folder, endpoint }: UploadProfileParams) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)} MB limit`);
  }
  const allowedTypes = ALLOWED_TYPES[folder];
  if (allowedTypes && !allowedTypes.includes(file.type)) {
    throw new Error(`Invalid file type. Allowed: ${allowedTypes.join(', ')}`);
  }

  try {
    // Get pre-signed URL from backend (uses Bearer token via api instance)
    const { data: presignData } = await api.post('/upload/presigned-url', {
      fileName: file.name,
      fileType: file.type,
      folder,
    });

    const { uploadUrl, uploadFields, fileUrl } = presignData as { uploadUrl: string; uploadFields: Record<string, string>; fileUrl: string };

    const formData = new FormData();
    Object.entries(uploadFields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("file", file); // file MUST be the last field appended

    // Upload directly to S3 via POST — no auth headers on pre-signed requests
    const s3UploadRes = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!s3UploadRes.ok) {
      const bodyText = (await s3UploadRes.text()).slice(0, 500);
      throw new Error(`S3 upload failed: ${s3UploadRes.status} ${s3UploadRes.statusText} ${bodyText}`);
    }

    if (endpoint) {
      // Tell backend to persist the new URL (uses Bearer token via api instance)
      const { data: result } = await api.post(`/upload${endpoint}`, {
        fileUrl,
        originalName: file.name,
        size: file.size,
        mimeType: file.type,
      });
      return result;
    }

    return { fileUrl };
  } catch (error) {
    console.error('Upload Error:', error);
    throw error;
  }
};
