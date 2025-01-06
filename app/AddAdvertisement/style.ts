import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create(
  {
    previewCard: {
      backgroundColor: colors.rose,
      ...base.borderRadius,
      shadowColor: '#000',
      elevation: 5,
      width: "100%", height: 200
    },
    uploadCard: {
      ...base.borderRadius,
      backgroundColor: colors.secondary ,
      padding: 15,
      shadowColor: '#000',
      elevation: 5,
      minHeight: 150,
      marginVertical:10,
    },
    productName: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.primary
    },
    uploadText: {
      flexShrink: 1,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff'
    },
    uploadImage: { width: 50, height: 50, resizeMode: 'contain' },
    previewImage: {
      width: "100%",
      height: 200,
      borderRadius: 20
    }
  }
)
