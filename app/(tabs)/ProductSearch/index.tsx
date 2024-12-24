import { base } from "@/style/base";
import { Image, Text, View } from "react-native";
import { style } from "./style";

const ProductSearch = () => {
  return (
    <View style={[base.default]}>
      <View style={[style.searchBar, base.flex, base.row, base.spaceBetween]}>
        <Text>Search for product by name</Text>

        <View><Image source={require('@/assets/images/search.png')} /></View>
      </View>
    </View>
  )
}
export default ProductSearch;
