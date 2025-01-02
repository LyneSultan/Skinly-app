import { base } from '@/style/base';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { style } from './style';
import { useProductLogic } from './useProductLogic';

const ProductSearch = () => {
  const { productDetails, searchQuery, setSearchQuery, productLink } = useProductLogic();

  return (
    <ScrollView style={[base.default]}>
      <View style={[base.gap]}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => { setSearchQuery(text) }}
          style={style.searchBar} />

        {productDetails.length === 0 ? (
          <View style={[base.flex, base.alignCenter, base.justifyCenter]}>
            <Text style={style.notFoundText}>No products found</Text>
          </View>)
          : (
            <View style={[base.flex, base.row, base.spaceAround, base.wrap]}>
              {productDetails.map((item, index) => (
                <View style={[style.productContainer, base.flex, base.column, base.gap]} key={index}>
                  <View>
                    <Image
                      source={{ uri: item.product.image }}
                      style={[style.productImage, base.borderRadius]}
                    />
                  </View>
                  <View style={[base.flex, base.row, base.gap, { maxWidth: '50%', }]}>
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
                      <Text>{item.product.price.split(' ')[0]}</Text>
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
      </View>
    </ScrollView>
  );

};

export default ProductSearch;
