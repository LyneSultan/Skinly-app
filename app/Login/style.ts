import { colors } from '@/colors/colors';
import { typography } from '@/style/typography';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    gap: 20,
    width: '100%',
  },
  title: {
    marginVertical: 20,
    fontSize: 42,
    ...typography.bold,
    color: colors.primary,
  },
  loginImage: {
    width: 60,
    height: 60,
  },
  loginForm: {
    gap: 10,
  },
  forgetPassword: {
    alignSelf: 'flex-end',
  },
  login: {
    color: colors.primary,
  },
  errorText: {
    color: colors.error,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 8,
  },
  showPasswordText: {
    marginLeft: 8,
  },
});
