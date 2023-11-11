import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

interface RInputProps {
  fontSize?: number,
}

export const getRInputStyles = (props: RInputProps) => {
  return StyleSheet.create({
    r_input__container: {
      width: '100%',
      height: 31,
      backgroundColor: '#FFFFFF',
      paddingVertical: 0,
      flexDirection: 'row',
      alignItems: 'center'
    },
    r_input__label: {
      fontFamily: theme.font,
      color: 'white',
      fontSize: 20,
    },
    r_input_icon: {},
    r_input: {
      height: '100%',
      fontFamily: theme.font,
      color: theme.colors.blue,
      fontSize: props.fontSize || 22,
      paddingVertical: 0,
      width: '100%'
    }
  })
}