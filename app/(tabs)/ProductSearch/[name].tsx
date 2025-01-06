import ProductCard from '@/components/ProductCard';
import { base } from '@/style/base';
import { ScrollView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { style } from './style';
import { useProductLogic } from './useProductLogic';

const ProductSearch = () => {
  const { productDetails, searchQuery, setSearchQuery, productLink, similarProducts } = useProductLogic();

  return (
    <ScrollView style={[base.default]}>
      <View style={[base.gap]}>
        <Searchbar placeholder="Search" value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} style={style.searchBar} />

        {!productDetails ? (
          <View style={[base.flex, base.alignCenter, base.justifyCenter]}>
            <Text style={style.notFoundText}>No products found</Text>
          </View>
        ) : (
          <View>
            <Text>Product across multiple platforms</Text>
            <View style={[base.flex, base.row, base.spaceAround, base.wrap]}>
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
            <Text>Similar Products</Text>
            <View style={[base.flex, base.row, base.spaceAround, base.wrap]}>
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
    </ScrollView>
  );
};

export default ProductSearch;
