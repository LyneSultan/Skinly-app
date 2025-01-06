import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  requirementCard: {
      marginVertical:20,
      maxHeight: 250,
      backgroundColor: colors.primary,
      shadowColor: '#000000',
      elevation: 5,
      ...base.borderRadius,
  },
  container: {
    padding: 15,
    gap: 15
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: "italic",
    lineHeight: 24,
  },

})
