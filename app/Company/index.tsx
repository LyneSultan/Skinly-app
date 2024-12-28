import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { style } from "./style";
import { useCompanyLogic } from "./useCompanyLogic";

const Company = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchData, setData, page, setPage, data } = useCompanyLogic();
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(page);
        const fetchedData = await fetchData(page);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [page]);

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
                data.map((product) => (
                  <Link href={'/AddAdvertisement'} style={[style.productsContainer]}>

                    <View key={product.name} style={[style.productCard]} >
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
            <TouchableOpacity style={base.alignCenter}
              onPress={async () => {
                const current = page + 1;
                setPage(current);
              }} >
              <Text >View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Company;
