import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B1D62',
    maxWidth: 180,
    borderRadius: 10,
    paddingVertical: 30
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 23
  },
});