import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PagerView from 'react-native-pager-view';
import { style } from "./style";
import { useHomeLogic } from "./useHomeLogic";

const HomeScreen = () => {
  const { data, ads, viewMore } = useHomeLogic();

  return (
    <ScrollView>
      <View style={[base.flex, base.default]}>
        <View style={[base.gap]}>
          <Text style={[typography.h1]}>Hello,</Text>
          <Text style={[typography.h2]}> Let’s take care of your skin!</Text>

          {ads.length > 0 && (
            <PagerView style={style.carousel} initialPage={0}>
              {ads.map((ad, index) => (
                <Image key={index}
                  source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${ad}` }}
                  style={[style.carousel, base.borderRadius]} />
              ))}
            </PagerView>
          )}

          <View style={[style.scanContainer, base.flex, base.row, base.spaceBetween, base.alignCenter]}>
            <Image source={require('@/assets/images/scan-logo.png')} />
            <Text style={base.whiteText}>Scan your face with AI</Text>
            <Link href={'/SkinScan'}>
              <Image source={require('@/assets/images/arrow.png')} />
            </Link>
          </View>

          <Text style={typography.h2}>Products</Text>

          {data.length > 0 ? (
            data.map((d, index) => (
              <View key={index} style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]}>
                {d.products?.map((product, productIndex) => (
                  <Link key={productIndex} href={`/ProductSearch/${product.name}`} style={[style.productsContainer]}>
                    <View style={[style.productCard]}>
                      <Image source={{ uri: product.image }} style={[style.productImage, base.borderRadius]} />
                      <Text style={[style.text]} numberOfLines={2} ellipsizeMode="tail">
                        {product.name}
                      </Text>
                    </View>
                  </Link>
                ))}
              </View>
            ))
          ) : (<Text>Loading products...</Text>)}

          <TouchableOpacity style={base.alignCenter} onPress={viewMore} >
            <Text>View More</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView >
  );
};

export default HomeScreen;
