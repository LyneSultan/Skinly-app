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
    marginVertical:20,
    minHeight:250,
    backgroundColor: colors.primary,
    padding: '8%',
    shadowColor: '#000000',
    elevation: 5,
    ...base.borderRadius,
    gap: '15%'
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
  },
  skinTypeImage: {
     width: 60, height: 60, resizeMode: 'contain'
  }
});
