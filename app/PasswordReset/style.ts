import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  image: {
    width: '90%',
    height: 300,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black color for subtitle
    marginBottom: 20, // Space between subtitle and other elements
    textAlign: 'center', // Center the text for better alignment
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
