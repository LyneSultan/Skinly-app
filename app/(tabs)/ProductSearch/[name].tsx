import { base } from '@/style/base';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style } from './style';
import { ProductDetails, useProductLogic } from './useProductLogic';

const ProductSearch = () => {
  const { name } = useLocalSearchParams();
  const { getProduct } = useProductLogic();
  const [productDetails, setProductDetails] = useState<ProductDetails[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = await getProduct();
        setProductDetails(details);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, []);

  return (
    <ScrollView style={[base.flex, base.column, base.default]}>
      <View style={[base.flex, base.row, base.spaceAround]}>

        {productDetails.map((item) => (
          <View style={[style.productContainer, base.flex, base.column, base.gap, base.justifyCenter]}>
            <View>
              <Image
                source={{ uri: item.product.image }}
                style={[style.productImage, base.borderRadius]}
              />
            </View>
            <View style={[base.flex, base.row, base.spaceAround]}>
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

          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default ProductSearch;
