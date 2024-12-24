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
  productImage: {
    width: 150,
    height:150,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius:40
  }
})
