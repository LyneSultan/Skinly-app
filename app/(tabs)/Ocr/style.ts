import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  requirementCard: {
      marginVertical:20,
      width:'100%',
      ...base.borderRadius,
  },
  container: {
    width:'100%',
    padding: 15,
    gap: 15
  },
  response: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: "italic",
    lineHeight: 24,
  },

})
