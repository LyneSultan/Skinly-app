import { base } from '@/style/base';
import { StyleSheet } from 'react-native';
import { colors } from './../../../colors/colors';

export const styles = StyleSheet.create({
  outline: {
    borderWidth: 3,
    ...base.borderRadius,
  },

});
export const theme= {
  primary: colors.secondary,
  outline: colors.secondary,
  background: colors.background
}
