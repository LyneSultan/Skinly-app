import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useSearchParams } from "expo-router/build/hooks";
import { Image, Text, View } from "react-native";
import { style } from "./style";

const AddvertisementPage = () => {
  const productName = useSearchParams(); // Retrieve the productName query parameter
  return (


    <View style={[base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>Create Advertisement</Text>
        <Text>Add Advertisement for: {productName}</Text>
        <Input label="Advertisement Text" text="Write a catchy promotional message" />

        <View style={[style.uploadImage, base.flex, base.row, base.alignCenter, base.spaceAround]}>
          <Text style={{ flexShrink: 1, paddingRight: 10 }}>Upload an image to showcase your product</Text>
          <Image
            source={require('@/assets/images/upload.png')}
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
          />
        </View>

        <Text style={{ marginTop: 20 }}>Preview Advertisement</Text>
        <View style={[style.previewCard, base.flex, base.row, base.alignCenter, base.spaceAround]}>
          <Image
            source={require('@/assets/images/upload.png')}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
          <Text style={{ flexShrink: 1, paddingRight: 10 }}>Upload an image to showcase your product</Text>

        </View>

        <ButtonComponent text="Save" />
      </View>
    </View>

  )
}
export default AddvertisementPage;
