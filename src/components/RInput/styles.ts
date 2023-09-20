import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

interface RInputProps {
  fontSize?: number,
}

export const getRInputStyles = (props: RInputProps) => {
  return StyleSheet.create({
    r_input: {
      width: '100%',
      height: 51,
      backgroundColor: '#FFFFFF',
      fontFamily: theme.font,
      color: theme.colors.blue[50],
      fontSize: props.fontSize || 28,
      paddingHorizontal: 25,
      paddingVertical: 0,
    },
    r_input__label: {
      fontFamily: theme.font,
      color: 'white',
      fontSize: 28,
    },
  })
}