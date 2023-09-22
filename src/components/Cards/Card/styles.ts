import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/styles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    fontFamily: theme.font,
    width: 271,
    height: 238,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  card_img: {

  },
  card_title: {
    color: theme.colors.blue[50],
    fontSize: 36,
  },
  card_date: {
    fontSize: 16,
  },
})