import { base } from "@/style/base";
import { Image, StyleSheet, Text, View } from "react-native";

const AdvertisementCard = () => {
  return (
    <View style={[base.flex, base.row, styles.card]}>
      <Image
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/2488/5102/products/avene-cleanance-cleansing-gel-400ml_2_1_580x.jpg?v=1709109161'
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Find The Right Cream for Your Skin </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    maxWidth: "100%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AdvertisementCard;
