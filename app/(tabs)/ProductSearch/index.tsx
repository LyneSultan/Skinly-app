import { base } from "@/style/base";
import { Image, Text, View } from "react-native";
import { style } from "./style";

const ProductSearch = () => {
  return (
    <View style={[base.default, base.gap]}>

      <View style={[style.searchBar, base.flex, base.row, base.spaceBetween]}>
        <Text>Search for product by name</Text>
        <View><Image source={require('@/assets/images/search.png')} /></View>
      </View>

      <View>
        <Text>Product name</Text>
      </View>

      <View>
        <View style={[base.flex, base.row]}>
          <View>
            <Image
              source={{ uri: "https://cdn.shopify.com/s/files/1/2488/5102/products/Cicalphate_580x.jpg?v=1591268381 " }}
              style={[style.productImage, base.borderRadius]}
            />
          </View>
          <View>
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFp5ldaRoJHuCaQQraX1G-Y6_lXSLNtGBtpA&s" }}
              style={[style.logo, base.borderRadius]}
            />
          </View>



        </View>
      </View>

    </View>
  )
}
export default ProductSearch;
