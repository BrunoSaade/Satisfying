import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

export const styles = StyleSheet.create({
  r_image_picker__box: {
      width: 280,
      height: 64,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    r_image_picker__label: {
      fontFamily: theme.font,
      color: 'white',
      fontSize: 20,
    },
})
