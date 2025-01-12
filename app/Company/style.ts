import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: 'black',
  },
});
