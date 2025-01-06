import { colors } from '@/colors/colors';
import { base } from '@/style/base';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  scanContainer: {
    padding:10,
    height:45,
    backgroundColor: colors.primary,
    ...base.borderRadius,
    ...base.gap,
  },
  productsContainer: {
    width: "45%",
    marginBottom:12,

  },
  productCard: {
    gap:7,
    width: "100%",
  },
  text: {
    width: "100%",
    fontSize: 12
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  carousel: {
    width: '100%',
    height: 230
  },
  viewMore: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  }
});
