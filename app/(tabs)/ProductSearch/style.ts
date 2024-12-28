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
    backgroundColor: colors.secondary,
    width: "47%",
    height:300,
    padding: 20,
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
