import { routes } from "@/routes/server.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export const useAdsLogic = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { productName } = useLocalSearchParams<{ productName: string }>();

  const handleSave = async () => {
    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      console.log("No token found");
      return;
    }
    console.log(productName)
    console.log(imageUri)

    if (imageUri) {
      const localUri = imageUri;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename ?? '');
      const type = match ? `image/${match[1]}` : 'image';

      const formData = new FormData();
      formData.append('image', {
        uri: localUri,
        name: filename,
        type: type,
      } as unknown as File);
      console.log(productName)

      try {
        // const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/advertisement/${productName}`;
        const apiUrl = process.env.EXPO_PUBLIC_API_URL+routes.advertisement(productName);
        console.log("Saving to URL:", apiUrl);
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
        console.log("Response:", response);
      } catch (error: any) {
        console.error('Error uploading image:', error.message);
      }
    }
  };


  return {
    imageUri,
    handleSave,
    setImageUri,
  };
};
