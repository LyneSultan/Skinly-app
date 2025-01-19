import { colors } from '@/colors/colors';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  searchBar: {
    borderRadius: 40,
    backgroundColor: '#F0F0F0',
    elevation: 5,
  },
  notFoundText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  notFoundCard: { height: '100%', width: '100%' },
  notFoundImage:{ width: 250, height: 250 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
});
