import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/styles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    fontFamily: theme.font,
    width: 200,
    height: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  card_img: {
    width: '50%',
    height: '50%'
  },
  card_title: {
    color: theme.colors.blue[50],
    fontSize: 28,
  },
  card_date: {
    fontSize: 14,
  },
})