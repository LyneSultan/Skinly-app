import { colors } from '@/colors/colors';
import { base } from '@/style/base';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  productContainer: {
    backgroundColor:colors.primary,
    width: '47%',
    padding: 10,
    position: 'relative',
    minHeight: 300,
    borderWidth: 3, // Optional for clean look
    borderColor: colors.background,
    ...base.borderRadius,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 40,
  },
  productName: {
    color:colors.background,
    marginBottom: 15,
    lineHeight: 20
  },
  arrowIcon: { borderRadius: 20, padding: 5 },
  arrowContainer: {
    position: 'absolute', // Places the arrow outside the card
    top: -20, // Adjust this to move the arrow above the card
    right: -33, // Adjust this to align the arrow with the card's edge
    backgroundColor: colors.background, // Circle background
    borderRadius: 15,
    padding: 3,
    width: 55,
    borderTopColor:colors.background, // Top border color
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderLeftColor: colors.background, // Top border color
    borderBottomLeftRadius: 1,

    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
