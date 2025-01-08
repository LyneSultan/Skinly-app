import { PickImage } from '@/hooks/ImagePicker/pickImage';
import { TakePicture } from '@/hooks/ImagePicker/takePicture';
import { routes } from '@/routes/server.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const useOcrLogic = () => {
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const { pickImage } = PickImage();
  const { takePicture } = TakePicture();

  const handlePickImage = async () => {
    const imageUri = await pickImage();

    console.log("here",imageUri);

    if (imageUri) {
      sendToApi(imageUri);
    }
  }
  const handleTakePicture = async () => {
    const imageUri = await takePicture();
    console.log("here",imageUri);
    if (imageUri) {
      sendToApi(imageUri);
    }
  }

  const sendToApi = async (imageUri: string | undefined) => {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      console.log("No token found");
      return;
    }
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
        console.log(imageUri);

        const response = await fetch(apiUrl+routes.ocr, {
          method: 'POST',
          headers: {
            'Authorization':token,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
        const data = await response.json();
        setLoading(false);
        console.log('API Response:', data);
        setApiResponse(data);
      } catch (error) {
        setLoading(false);
        console.error('Error sending image:', error);
      }
    };


  return {
    apiResponse,
    handlePickImage,
    handleTakePicture,
    setLoading,
    loading
  };
};
