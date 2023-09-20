// import { View } from 'react-native';
// import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

export const styles = StyleSheet.create({
  r_drawer: {
    backgroundColor: theme.colors.primary[100],
    fontFamily: theme.font,
  },
  r_drawer__logout: {
    color: 'white',
    fontFamily: theme.font,
    fontSize: 30,
  }
})