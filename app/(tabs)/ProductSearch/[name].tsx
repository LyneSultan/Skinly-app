import { base } from '@/style/base';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
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

      </View>
    </ScrollView>
  );
}

export default ProductSearch;
