import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useCompanyLogic } from "./useCompanyLogic";

const Company = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchData, setData, data } = useCompanyLogic();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);


  return (
    <View style={[base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>Promote your products to users effectively</Text>
        <Searchbar
          value={searchQuery}
          onChangeText={(text) => { setSearchQuery(text) }}
          placeholder="Enter the product name"
          style={{ backgroundColor: colors.primary }} />


        <Text style={typography.h2}>Products</Text>

        <View >
          {data.length > 0 ? (
            data.map((product) => (
              <View style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]} >

                <View >
                  <Image
                    source={{ uri: product.image }}

                  />
                  <Text numberOfLines={2} ellipsizeMode="tail">
                    {product.name}
                  </Text>
                </View>
              </View>
            ))
          ) : (<Text>Loading products...</Text>)}
        </View>

      </View>
    </View>
  )
}
export default Company;
