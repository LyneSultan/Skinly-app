import { PickImage } from '@/hooks/ImagePicker/pickImage';
import { TakePicture } from '@/hooks/ImagePicker/takePicture';
import { routes } from '@/routes/server.routes';
import { useState } from 'react';

export const useSkinPageLogic = () => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const { pickImage } = PickImage();
  const { takePicture } = TakePicture();
  const [loading, setLoading] = useState(false);

  const handlePickImage = async () => {
    const imageUri = await pickImage();

    if (imageUri) {
      sendImageToApi(imageUri);
    }
  }
  const handleTakePicture = async () => {
    const imageUri = await takePicture();
    if (imageUri) {
      sendImageToApi(imageUri);
    }
  }

  const sendImageToApi = async (imageUri: string | undefined) => {
    if (!imageUri) {
      console.error('No image URI to send');
      return;
    }
    try {
      setLoading(true);

      const localUri = imageUri;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename ?? '');
      const type = match ? `image/${match[1]}` : 'image';

      const formData = new FormData();
      formData.append('image', {
        uri: localUri,
        name: filename,
        type: type,
      } as any);

      const apiUrl = process.env.EXPO_PUBLIC_API_URL;
      console.log(apiUrl);
      const response = await fetch(apiUrl+routes.skinDetection, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const data = await response.json();
      setApiResponse(data);
      setLoading(false);
      console.log('API Response:', data);
    } catch (error) {
      setLoading(false);
      console.error('Error sending image:', error);
    }
  };

  return {
    handlePickImage,
    handleTakePicture,
    apiResponse,
    loading
  };
};
