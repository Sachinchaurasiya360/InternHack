import api from "../lib/axios";

interface UploadProfileParams {
  file: File;
  folder: 'resumes' | 'profile-pics' | 'cover-images' | 'company-logos';
  endpoint?: '/profile-resume' | '/profile-pic' | '/cover-image';
}

export const uploadDirectToS3 = async ({ file, folder, endpoint }: UploadProfileParams) => {
  try {
    // Get pre-signed URL from backend (uses Bearer token via api instance)
    const { data: presignData } = await api.post('/upload/presigned-url', {
      fileName: file.name,
      fileType: file.type,
      folder,
    });

    const { uploadUrl, fileUrl } = presignData as { uploadUrl: string; fileUrl: string };

    // Upload directly to S3 — no auth headers on pre-signed requests
    const s3UploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
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
