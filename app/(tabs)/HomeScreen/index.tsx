import AdvertisementCard from "@/components/AddvertisementCard";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useHomeLogic } from "./useHomeLogic";


const HomeScreen = () => {
  const { fetchData, setData, data, handleViewMore, page, setPage } = useHomeLogic();

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
    <ScrollView>
      <View style={[base.flex, base.alignCenter, base.default]}>
        <View style={[base.gap]}>
          <Text style={[typography.h1]}>Hello,</Text>
          <Text>Let’s take care of your skin!</Text>

          <AdvertisementCard />

          <View style={[base.flex, base.row, base.spaceBetween, style.scanContainer, base.alignCenter]}>
            <Image source={require('@/assets/images/scan-logo.png')} />
            <Text>Scan your face with AI</Text>
            <Link href={'/SkinScan'}>
              <Image source={require('@/assets/images/arrow.png')} />
            </Link>
          </View>

          <Text>Products</Text>

          <View style={style.productsContainer}>
            {data.length > 0 ? (
              data.map((d) => (
                <View style={[base.flex, base.row, base.wrap, base.spaceAround, base.gap]}>
                  {d.products?.map((product) => (

                    <View style={[base.gap, style.productCard]} key={product.name}>
                      <Image source={{ uri: product.image }} style={[style.productImage, base.borderRadius]} />

                      <Text style={[style.text]} numberOfLines={2} ellipsizeMode="tail">
                        {product.name}
                      </Text>
                    </View>

                  ))}
                </View>
              ))
            ) : (<Text>Loading products...</Text>)}

          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={async () => {
              const current = page + 1;
              setPage(current);
              const products = await handleViewMore(current);
              setData((prev) => [...prev, ...products]);
            }} >
            <Text>View More</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView >
  );
};

export default HomeScreen;

