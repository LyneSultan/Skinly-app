import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";
import { style } from "./style";

const AddvertisementPage = () => {
  const productName = useSearchParams(); // Retrieve the productName query parameter
  return (


    <View style={[base.default]}>
      <Text style={[typography.h1]}>Create Advertisement </Text>
      <Text>Add Advertisement for: {productName}</Text>
      <Input label="Advertisement Text" text="Write a catchy promotional message " />
      <View style={[style.uploadImage]}></View>
      <Text>Preview Advertisement</Text>
      <View style={[style.previewCard]}></View>
      <ButtonComponent text="Save" />
    </View>
  )
}
export default AddvertisementPage;
