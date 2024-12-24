import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requirementCard: {
    minHeight:250,
    backgroundColor: colors.primary,
    padding: 20,
    shadowColor: '#000000',
    elevation: 5,
    ...base.borderRadius,
    marginVertical:20
  }
});
