import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  searchBar: {
    borderRadius:40,
    backgroundColor: colors.primary
  },
  productContainer: {
    marginBottom:10,
    width: "47%",
    padding:5,
    ...base.borderRadius
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius:40
  },
  notFoundText: {
     color: colors.primary, fontSize: 16
  }
})
