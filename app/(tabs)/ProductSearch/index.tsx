import { base } from "@/style/base";
import { Image, Text, View } from "react-native";

const ProductSearch = () => {
  return (
    <View style={[base.default]}>
      <View style={[base.flex, base.row, base.spaceBetween]}>
        <Text>search for product by name</Text>

        <View><Image source={require('@/assets/images/search.png')} /></View>
      </View>
    </View>
  )
}
export default ProductSearch;
