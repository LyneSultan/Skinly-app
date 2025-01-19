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
    padding:35,
    shadowColor: '#000000',
    elevation: 5,
    ...base.borderRadius,
    gap: 35
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
  },
  skinTypeImage: {
     width: 60, height: 60, resizeMode: 'contain'
  },
  suggestionBox: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  reason: {
    fontSize: 14,
    color: '#555',
  },
});
