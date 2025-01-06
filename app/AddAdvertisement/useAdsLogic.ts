import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export const useAdsLogic = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { productName } = useLocalSearchParams();

  const handleSave = async () => {
    const token = await AsyncStorage.getItem("authToken");
    if (imageUri && token) {
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
      try {
        console.log(productName);
        console.log(`${process.env.EXPO_PUBLIC_API_URL}/advertisement/${productName}`);
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/advertisement/${productName}`, {
          method: 'POST',
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
        console.log(response);
      } catch (error: any) {
        console.log('Error uploading image:', error.message);
      }
    }

  }
  return {
    imageUri,
    handleSave,
    setImageUri
  }
}
