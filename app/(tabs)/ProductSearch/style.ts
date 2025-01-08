import { colors } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  searchBar: {
    borderRadius:40,
    backgroundColor: colors.primary
  },
  notFoundText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight:'bold'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
})
