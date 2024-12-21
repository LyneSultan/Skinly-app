import { base } from '@/style/base';
import { StyleSheet } from 'react-native';
import { colors } from './../../../colors/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    ...base.borderRadius,
  },
});
