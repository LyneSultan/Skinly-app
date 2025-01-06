import { colors } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex:0.8,
    backgroundColor: colors.background,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  editButton: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  details: {
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
});
