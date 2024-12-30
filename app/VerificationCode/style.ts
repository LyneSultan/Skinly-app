import { StyleSheet } from "react-native";

export const style = StyleSheet.create(
  {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    inputBox: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      textAlign: 'center',
      fontSize: 20,
      borderRadius: 10,
      marginHorizontal: 5,
      backgroundColor: '#f5f5f5',
    },
  }
)
