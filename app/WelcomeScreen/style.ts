import { colors } from "@/colors/colors";
import { typography } from "@/style/typography";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  background: {
    flex: 1,
  },
  title: {
    marginVertical: 40,
    fontSize:42,
    ...typography.bold,
    color:colors.primary
  }
});
