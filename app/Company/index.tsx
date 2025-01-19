import { colors } from "@/colors/colors";
import AdvertisementCard from "@/components/AddvertisementCard";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Link, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppContext from "../context/userContext";
import { style } from "./style";
import { useCompanyLogic } from "./useCompanyLogic";


const Company = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { page, nextHandle, previousHandle, data, count, } = useCompanyLogic();
  const context = useContext(AppContext);

  const router = useRouter();
  const { user, setUser } = context;

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={[base.default]}>
        <View style={[base.gap]}>
          <Text style={[typography.h1]}>Hello, {user?.name}</Text>
          <Text style={[typography.h1]}>Promote your products to users effectively</Text>

          <AdvertisementCard count={count} />

          <Searchbar
            value={searchQuery}
            placeholder="Enter the product name"
            style={{ backgroundColor: colors.rose }}
          />

          <View>
            <View style={[base.flex, base.row, base.wrap, base.alignCenter, base.spaceAround]}>
              {data.length > 0 ? (
                data.map((product, index) => {
                  const name = encodeURIComponent(product.name);
                  return (
                    <Link href={`/AddAdvertisement?productName=${name}`} style={[style.productsContainer]} key={index}>
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
                  );
                })
              ) : (
                <Text>No products found</Text>
              )}
            </View>

            <View style={style.paginationContainer}>
              <TouchableOpacity onPress={previousHandle} style={style.button}>
                <Icon name="arrow-back-ios" size={24} color="black" />
                <Text style={style.buttonText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={nextHandle} style={style.button}>
                <Text style={style.buttonText}>Next</Text>
                <Icon name="arrow-forward-ios" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Company;
