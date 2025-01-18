import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { Image, StyleSheet, Text, View } from "react-native";

const AdvertisementCard = ({ count }: { count: { productsCount: number } }) => {
  return (
    <View style={[base.flex, base.row, styles.card]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}><Text style={styles.count}>{count}</Text> products available in Skinly </Text>
      </View>
      <Image
        source={require('@/assets/images/products.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    elevation: 5,
    minHeight: 120,
    maxWidth: "100%",
  },
  count: { fontSize: 40 },
  image: {
    width: 100,
    height: 100,
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
    color: '#ffff',
  },
});

export default AdvertisementCard;
