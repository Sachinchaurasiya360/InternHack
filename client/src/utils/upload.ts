interface UploadProfileParams {
  file: File;
  folder: 'resumes' | 'profile-pics' | 'cover-images';
  endpoint: '/profile-resume' | '/profile-pic' | '/cover-image';
  authToken: string;
}

export const uploadDirectToS3 = async ({ file, folder, endpoint, authToken }: UploadProfileParams) => {
  try {
    // Get the Pre-signed URL from your backend
    const presignRes = await fetch(`${import.meta.env.VITE_API_URL}/api/upload/presigned-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        fileName: file.name,
        fileType: file.type,
        folder: folder
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
      body: file, // The actual raw file goes right into the body
    });

    if (!s3UploadRes.ok) throw new Error('Failed to upload file to S3');

   
    // Tell your backend to save the new file URL
    const updateRes = await fetch(`${import.meta.env.VITE_API_URL}/api/upload${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        fileUrl: fileUrl,
        originalName: file.name,
        size: file.size,
        mimeType: file.type
      }),
    });

    if (!updateRes.ok) throw new Error('Failed to save file to profile');
    
    const result = await updateRes.json();
    return result;

  } catch (error) {
    console.error('Upload Error:', error);
    throw error;
  }
};