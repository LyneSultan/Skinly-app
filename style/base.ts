import { StyleSheet } from 'react-native';

export const base = StyleSheet.create({
  default: {
    height: "100%",
    marginVertical: 20,
    marginHorizontal:20,
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
  spaceAround: {
    justifyContent:"space-around"
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
  },
  padding: {
    padding:10,
  },
  gap: {
    gap:10,
  },
  whiteText: {
    color:"#fff"
  }
});
