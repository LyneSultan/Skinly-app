
import { colors } from '@/colors/colors';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

  container: {
    gap: 20,
    width:"100%"
  },
  loginImage: {
    width: "90%", height: 120
  },
  loginForm: {
    gap:10
  },
  forgetPassword: {
    alignSelf:"flex-end"
  },
  login: {
    color: colors.primary,
  },
  errorText: {
    color:colors.error
  },


})
