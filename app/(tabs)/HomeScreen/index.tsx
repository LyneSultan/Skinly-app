import AdvertisementCard from "@/components/AddvertisementCard";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useHomeLogic } from "./useHomeLogic";


const HomeScreen = () => {
  const { fetchData, setData, data, handleViewMore, page, setPage } = useHomeLogic();
  const router = useRouter();

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
      <View style={[base.flex, base.default]}>
        <View style={[base.gap]}>
          <Text style={[typography.h1]}>Hello,</Text>
          <Text style={[typography.h2]}> Let’s take care of your skin!</Text>

          <AdvertisementCard />

          <View style={[style.scanContainer, base.flex, base.row, base.spaceBetween, base.alignCenter]}>
            <Image source={require('@/assets/images/scan-logo.png')} />
            <Text style={base.whiteText}>Scan your face with AI</Text>
            <Link href={'/SkinScan'}>
              <Image source={require('@/assets/images/arrow.png')} />
            </Link>
          </View>

          <Text style={typography.h2}>Products</Text>

          <View >
            {data.length > 0 ? (

              data.map((d) => (
                <View style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]} >
                  {d.products?.map((product) => (
                    <Link
                      key={product.name}
                      href={`/ProductSearch/${encodeURIComponent(product.name)}`}
                      style={[style.productsContainer]}>
                      <View style={[style.productCard]}>
                        <Image
                          source={{ uri: product.image }}
                          style={[style.productImage, base.borderRadius]}
                        />
                        <Text style={[style.text]} numberOfLines={2} ellipsizeMode="tail">
                          {product.name}
                        </Text>
                      </View>
                    </Link>
                  ))}

                </View>
              ))
            ) : (<Text>Loading products...</Text>)}

          </View>
        </View>

        <View>
          <TouchableOpacity style={base.alignCenter}
            onPress={async () => {
              const current = page + 1;
              setPage(current);
              const products = await handleViewMore(current);
              setData((prev) => [...prev, ...products]);
            }} >
            <Text >View More</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView >
  );
};

export default HomeScreen;

