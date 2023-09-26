import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

export const styles = StyleSheet.create({
  closeButton: {
    maxWidth: 40,
    maxHeight: 40,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  text: {
    marginVertical: 50,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 35
  }
})