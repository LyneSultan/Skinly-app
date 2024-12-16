import { StyleSheet } from 'react-native';

export const base = StyleSheet.create({
  default: {
    height: "100%",
    width: "100%",
    marginTop: 20
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
  wrap: {
    flexWrap: 'wrap',
  },
  background: {
    backgroundColor: 'black',
  },
});
