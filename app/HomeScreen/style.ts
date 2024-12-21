import { colors } from '@/colors/colors';
import { base } from '@/style/base';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  scanContainer: {
    padding:10,
    height:45,
    backgroundColor: colors.rose,
    ...base.borderRadius,
  },
  productCard: {
    width:"45%"
  },
  text: {
    width: "100%",
    fontSize: 12
  },
  productImage: {
    width: "100%",
    height: 150,
  }
});
