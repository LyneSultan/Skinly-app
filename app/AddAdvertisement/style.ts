import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create(
  {
    previewCard: {
      backgroundColor: colors.rose,
      ...base.borderRadius,
      padding: 15,
      shadowColor: '#000',
      elevation: 5,

    },
    uploadImage: {
      ...base.borderRadius,
      backgroundColor: colors.secondary ,
      padding: 15,
      shadowColor: '#000',
      elevation: 5,
    },
  }
)
