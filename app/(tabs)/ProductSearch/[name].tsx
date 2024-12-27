import { colors } from '@/colors/colors';
import { base } from '@/style/base';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { style } from './style';
import { ProductDetails, useProductLogic } from './useProductLogic';

const ProductSearch = () => {
  const { name } = useLocalSearchParams();
  const { getProduct, productLink } = useProductLogic();
  const [productDetails, setProductDetails] = useState<ProductDetails[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = await getProduct(searchQuery || name);
        setProductDetails(details);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [searchQuery, name]);


  return (
    <ScrollView style={[base.flex, base.column, base.default]}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onChangeText={(text) => { setSearchQuery(text) }}
        style={{ backgroundColor: colors.primary }} />

      {productDetails.length === 0 ? (
        <View style={[base.flex, base.alignCenter, base.justifyCenter, { height: 200 }]}>
          <Text style={{ color: colors.primary, fontSize: 16 }}>No products found</Text>
        </View>)
        : (
          <View style={[base.flex, base.row, base.spaceAround, base.wrap, base.gap]}>
            {productDetails.map((item, index) => (
              <View style={[style.productContainer, base.flex, base.column, base.gap, base.justifyCenter]} >
                <View>
                  <Image
                    source={{ uri: item.product.image }}
                    style={[style.productImage, base.borderRadius]}
                  />
                </View>
                <View style={[base.flex, base.row, base.spaceBetween]}>
                  <View>
                    <Image
                      source={{ uri: item.company_logo }}
                      style={[style.logo, base.borderRadius]}
                    />
                  </View>
                  <View>
                    <Text>{item.companyName}</Text>
                  </View>
                  <View>
                    <Text>{item.product.price}</Text>
                  </View>
                </View>

                <Text>{item.product.name}</Text>

                <TouchableOpacity onPress={() => productLink(item.product.link)} style={base.alignCenter}>
                  <Text>Learn more</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
    </ScrollView>
  );

};

export default ProductSearch;
