import { colors } from '@/colors/colors';
import { base } from '@/style/base';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { useRecommendLogic } from './useRecomendLogic';

const Recommendation = () => {
  const { skinType,data} = useRecommendLogic();

  return (
    <ScrollView style={[{ backgroundColor: colors.background },]}>

      <View style={[styles.container, base.default]}>

      <Text style={styles.header}>Your Skin Type: {skinType}</Text>

      {data &&
        <>
        <Text style={styles.subHeader}>General Tips For You:</Text>

          <FlatList
            data={data.tips}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text style={styles.tip}>• {item.tip}</Text>}
            scrollEnabled={false}
        />


          <Text style={styles.subHeader}>Recommended Products:</Text>
          <FlatList
            data={data.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image source={{ uri: item.image_url }} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productReason}>{item.reason}</Text>
                </View>
                </View>
            )}
            scrollEnabled={false}
          />


        </>}
      </View>


    </ScrollView>
  );
};

export default Recommendation;
