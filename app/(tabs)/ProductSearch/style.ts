import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  searchBar: {
    padding: 10,
    height:45,
    backgroundColor: colors.rose,
    ...base.borderRadius
  }
})
