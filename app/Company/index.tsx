import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { style } from "./style";
import { useCompanyLogic } from "./useCompanyLogic";

const Company = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { page, nextHandle, previousHandle, data } = useCompanyLogic();

  return (
    <ScrollView>
      <View style={[base.default]}>
        <View style={[base.gap]}>
          <Text style={[typography.h1]}>Promote your products to users effectively</Text>
          <Searchbar
            value={searchQuery}
            onChangeText={(text) => { setSearchQuery(text) }}
            placeholder="Enter the product name"
            style={{ backgroundColor: colors.primary }} />

          <Text style={typography.h2}>Products</Text>

          <View>
            <View style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]}>
              {data.length > 0 ? (
                data.map((product, index) => (
                  <Link href={`/AddAdvertisement?${product.name}`} style={[style.productsContainer]} key={index}>

                    <View style={[style.productCard]} >
                      <Image
                        source={{ uri: product.image }}
                        style={[style.productImage, base.borderRadius]}
                      />
                      <Text style={[style.text]} numberOfLines={2} ellipsizeMode="tail">
                        {product.name}
                      </Text>
                    </View>
                  </Link>
                )
                )) : (
                <Text>Loading products...</Text>
              )}
            </View>
            <View style={[base.flex, base.row, base.spaceAround]}>
              <TouchableOpacity onPress={previousHandle}>
                <Text>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={nextHandle}>
                <Text >Next</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Company;
