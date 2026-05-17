interface UploadProfileParams {
  file: File;
  folder: 'resumes' | 'profile-pics' | 'cover-images' | 'company-logos';
  endpoint?: '/profile-resume' | '/profile-pic' | '/cover-image';
}

export const uploadDirectToS3 = async ({ file, folder, endpoint }: UploadProfileParams) => {
  try {
    const apiUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000";

    // Get the Pre-signed URL from your backend
    const presignRes = await fetch(`${apiUrl}/api/upload/presigned-url`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName: file.name,
        fileType: file.type,
        folder: folder,
      }),
    });

    if (!presignRes.ok) throw new Error('Failed to get upload URL');
    const { uploadUrl, fileUrl } = await presignRes.json();

    // Upload the file DIRECTLY to AWS S3
    const s3UploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!s3UploadRes.ok) {
      const bodyText = await s3UploadRes.text();
      throw new Error(`S3 upload failed: ${s3UploadRes.status} ${s3UploadRes.statusText} ${bodyText}`);
    }

    if (endpoint) {
      // Tell your backend to save the new file URL
      const updateRes = await fetch(`${apiUrl}/api/upload${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileUrl: fileUrl,
          originalName: file.name,
          size: file.size,
          mimeType: file.type,
        }),
      });

      if (!updateRes.ok) throw new Error('Failed to save file to profile');
      const result = await updateRes.json();
      return result;
    }

    return { fileUrl };
  } catch (error) {
    console.error('Upload Error:', error);
    throw error;
  }
};