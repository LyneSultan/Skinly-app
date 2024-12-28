import { routes } from '@/routes/server.routes';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export const useOcrLogic = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      sendImageToApi(result.assets[0].uri)

    }
  };
  const takePicture = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      sendImageToApi(result.assets[0].uri)
    }
  };

  const sendImageToApi = async (imageUri: string | null) => {
    if (!imageUri) {
      console.error('No image URI to send');
      return;
    }
    try {
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

      const response = await fetch(apiUrl+routes.ocr, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      const data = await response.json();
      setApiResponse(data );
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error sending image:', error);
    }
  };

  return {
    pickImage,
    takePicture
  };
};
