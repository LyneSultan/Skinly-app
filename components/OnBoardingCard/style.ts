import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style= StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    ...base.borderRadius,
    gap: 30,
    minHeight:200,
    elevation: 4,
    padding: 40,
  },
  text: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
