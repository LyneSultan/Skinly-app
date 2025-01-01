import ButtonComponent from "@/components/base/Button";
import { PickImage } from "@/hooks/ImagePicker/pickImage";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSearchParams } from "expo-router/build/hooks";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

const AddvertisementPage = () => {
  const { pickImage } = PickImage();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const productName = useSearchParams();

  const handlePickImage = async () => {
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
      const formattedProductName = (productName as string)?.replace(/\+/g, '%20');
      console.log(formattedProductName);
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/ /${formattedProductName}`, {
          method: 'POST',
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
        console.log(response);
      } catch (error: any) {
        Alert.alert('Error uploading image:', error.message);
      }
    }

  }

  return (
    <View style={[base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>Create Advertisement</Text>
        <Text>Add Advertisement for: {productName}</Text>

        <View style={[style.uploadImage, base.flex, base.row, base.alignCenter, base.spaceAround]}>
          <Text style={{ flexShrink: 1, paddingRight: 10 }}>Upload an image to showcase your product</Text>
          <TouchableOpacity onPress={async () => {
            const imageUri = await pickImage();
            if (imageUri) {
              setImageUri(imageUri);
            }
          }}>
            <Image
              source={require('@/assets/images/upload.png')}
              style={{ width: 50, height: 50, resizeMode: 'contain' }}
            />
          </TouchableOpacity>

        </View>
        <Text style={{ marginTop: 20 }}>Preview Advertisement</Text>

        {imageUri ? (
          <View style={base.gap}>
            <View style={[style.previewCard, base.flex, base.row, base.alignCenter, base.spaceAround]}>

              <Image
                source={{ uri: imageUri }}
                style={{ width: 200, height: 200 }} />
            </View>
            <ButtonComponent text="Save" onPress={handlePickImage} />
          </View>
        ) : (
          <Text>hi</Text>
        )}
      </View>
    </View>

  )
}
export default AddvertisementPage;
