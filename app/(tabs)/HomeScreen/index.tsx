import AppContext from "@/app/context/userContext";
import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link } from "expo-router";
import { useContext, useEffect } from "react";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PagerView from 'react-native-pager-view';
import { style } from "./style";
import { useHomeLogic } from "./useHomeLogic";

const HomeScreen = () => {
  const { data, ads, viewMore, adsIndex, handleAdsChange } = useHomeLogic();
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useContext must be used within an AppProvider");
  }

  const { user, setUser } = context;
  useEffect(() => console.log(user));

  return (
    <ScrollView>
      <View style={{ backgroundColor: colors.background }}>

        <View style={[base.flex, base.default]}>
          <View style={[base.gap]}>
            <Text style={[typography.h1]}>Hello, {user?.name}</Text>
            <Text style={[typography.h2]}> Smart Care for Every Skin Type</Text>

            <View style={style.container}>
              {ads?.length > 0 && (
                <View style={{ width: '100%' }}>
                  <PagerView style={style.carousel} initialPage={0} onPageSelected={handleAdsChange} >
                    {ads.map((ad, index) => {
                      const [productName, advertisement] = ad.split(': ');
                      return (
                        <TouchableOpacity key={index} onPress={() => Linking.openURL(productName).catch((err) => console.error('Error opening URL', err))}>
                          <Image
                            source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${advertisement}` }}
                            style={[style.image, base.borderRadius]}
                          />
                        </TouchableOpacity>
                      )
                    })}
                  </PagerView>

                  <View style={[base.flex, base.row, style.dotsContainer, base.justifyCenter, base.alignCenter]}>
                    {ads.map((_, index) => (
                      <View key={index}
                        style={[style.dot, index === adsIndex ? style.activeDot : style.inactiveDot,]} />
                    ))}
                  </View>
                </View>

              )}
            </View>

            <View style={[style.scanContainer, base.flex, base.row, base.spaceBetween, base.alignCenter]}>
              <Image source={require('@/assets/images/scan-logo.png')} />
              <Text style={base.whiteText}>Scan your face with AI</Text>
              <Link href={'/SkinScan'}>
                <Image source={require('@/assets/images/arrow.png')} />
              </Link>
            </View>

            <Text style={typography.h2}>Products</Text>
            <View>
              {data.length > 0 ? (
                data.map((d, index) => (
                  <View key={index} style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]}>
                    {d.products?.map((product, productIndex) => (
                      <Link key={productIndex} href={`/ProductSearch/${encodeURIComponent(product.name)}`} style={[style.productsContainer]}>
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
            </View>
            <TouchableOpacity style={[base.alignCenter]} onPress={viewMore}>
              <Text style={style.viewMore} > View More </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </ScrollView >
  );
};

export default HomeScreen;

