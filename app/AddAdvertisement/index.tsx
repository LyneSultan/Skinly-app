import ButtonComponent from "@/components/base/Button";
import { PickImage } from "@/hooks/ImagePicker/pickImage";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useAdsLogic } from "./useAdsLogic";

const AddvertisementPage = () => {
  const { pickImage } = PickImage();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { productName } = useLocalSearchParams();

  const { handleSave } = useAdsLogic();
  return (
    <View style={[base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1, typography.bold]}> Create Advertisement</Text>

        <Text style={style.productName}>{productName}</Text>

        <View style={[style.uploadCard, base.flex, base.row, base.alignCenter, base.spaceAround]}>
          <Text style={style.uploadText}>Upload an image to showcase your product</Text>
          <TouchableOpacity onPress={async () => {
            const imageUri = await pickImage();
            if (imageUri) {
              setImageUri(imageUri);
            }
          }}>
            <Image source={require('@/assets/images/upload.png')} style={style.uploadImage} />
          </TouchableOpacity>

        </View>
        <Text style={[typography.h2]}>Preview Advertisement</Text>

        {imageUri ? (
          <View style={base.gap}>
            <View style={[style.previewCard, base.flex, base.row, base.alignCenter, base.spaceAround]}>
              <Image source={{ uri: imageUri }} style={style.previewImage} />
            </View>
            <ButtonComponent text="Save" onPress={handleSave} />
          </View>
        ) : (
          <View style={[style.previewCard, base.flex, base.row, base.alignCenter, base.spaceAround]}></View>
        )}
      </View>
    </View >

  )
}
export default AddvertisementPage;
