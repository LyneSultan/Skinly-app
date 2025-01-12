import { colors } from '@/colors/colors';
import ProductCard from '@/components/ProductCard';
import { base } from '@/style/base';
import { Image, ScrollView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { style } from './style';
import { useProductLogic } from './useProductLogic';

const ProductSearch = () => {
  const { productDetails, searchQuery, setSearchQuery, productLink, similarProducts } = useProductLogic();

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={[base.default,]}>

        <View style={[base.gap, base.flex, base.column]}>
          <Searchbar placeholder="Search" value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)} style={style.searchBar} />

          {!productDetails ? (
            <View style={[base.flex, base.row, { height: '100%', width: '100%' }]}>
              <View style={[base.alignCenter, base.justifyCenter, { height: '100%', width: '100%' }]}>
                <Image source={require('@/assets/images/notFound.png')} style={{ width: 250, height: 250 }} />
                <Text style={style.notFoundText}>No products found</Text>
              </View>
            </View>
          ) : (
            <View>
              <Text style={style.title}>Product Across Multiple Platforms</Text>

              <View style={[base.flex, base.row, base.gap, base.wrap]}>
                {productDetails.map((item, index) => (
                  <ProductCard
                    key={index} product={item.product}
                    company={{ name: item.companyName, logo: item.company_logo }}
                    onLinkPress={productLink} />
                ))}
              </View>
            </View>
          )}

          {similarProducts && similarProducts.length > 0 && (
            <View>
              <Text style={style.title}>Similar Products</Text>
              <View style={[base.flex, base.row, base.gap, base.wrap]}>
                {similarProducts.map((item, index) => (
                  <ProductCard
                    key={index} product={item.product}
                    company={{ name: item.companyName, logo: item.company_logo }}
                    onLinkPress={productLink} />
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductSearch;
