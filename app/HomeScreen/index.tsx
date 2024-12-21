import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { style } from "./style";
import fetchData, { DataItem } from "./useHomeLogic";

const HomeScreen = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <View style={[base.flex, base.column, base.alignCenter]}>
      <View style={[base.default, base.gap]}>
        <Text style={[typography.h1]}>Hello,</Text>
        <Text>Let’s take care of your skin!</Text>

        <View style={[base.flex, base.row, base.spaceBetween, style.scanContainer, base.alignCenter]}>
          <Image source={require('@/assets/images/scan-logo.png')} />
          <Text>Scan your face with AI</Text>
          <Image source={require('@/assets/images/arrow.png')} />
        </View>

        <Text>Products</Text>
        {data.length > 0 ? (
          data.map((d) => (
            <View style={[base.flex, base.row, base.wrap, base.spaceAround]} key={d._id}>
              {d.products.length > 0 ? (
                d.products.map((product, productIndex) => (
                  <View key={productIndex} style={[base.gap, style.productCard]}>
                    <Image
                      source={{ uri: product.image }}
                      style={[style.productImage, base.borderRadius]} />
                    <Text
                      style={[style.text]}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {product.title}
                    </Text>
                  </View>
                ))
              ) : (
                <Text></Text>
              )}
            </View>
          ))
        ) : (
          <Text>Loading products...</Text>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
