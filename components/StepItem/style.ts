import { colors } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  stepContainer: {
    backgroundColor: "#E3B6C5",
    borderRadius: 30,
    padding: 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.rose

  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  stepDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: "#fff"
  }
});
