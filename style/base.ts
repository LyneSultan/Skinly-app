import { StyleSheet } from 'react-native';

export const base = StyleSheet.create({
  default: {
    height: "100%",
    width: "90%",
    marginTop: 20,
  },
  flex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: "column"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  spaceBetween: {
    justifyContent:"space-between"
  },
  wrap: {
    flexWrap: 'wrap',
  },
  background: {
    backgroundColor: 'black',
  },
  borderRadius: {
    borderRadius: 20,
  },
  maxWidth: {
    maxWidth:"90%",
  }
});
