import { colors } from "@/colors/colors";
import { typography } from "@/style/typography";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  title: {
        fontSize:42,
        ...typography.bold,
        color:colors.primary
      },
    loginImage: {
      width: 60, height: 60
    },
  container: {
    width: "100%",
    gap: 10,
  },
  registerForm: {
    gap:4
  },
  register: {
    color:colors.primary
  },
  error: {
    color:colors.error
  }

})


