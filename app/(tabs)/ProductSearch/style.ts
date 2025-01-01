import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  searchBar: {
    padding: 10,
    height:45,
    backgroundColor: colors.rose,
    ...base.borderRadius
  },
  productContainer: {
    backgroundColor: colors.rose,
    marginBottom:10,
    padding: 10,
    width: "47%",
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
  }
})
