// import { View } from 'react-native';
// import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

interface RButtonProps {
  customWidth?: string;
  color: string;
}

export const getRButtonStyles = (props: RButtonProps) => {
  
  return StyleSheet.create({
    r_button: {
      backgroundColor: theme.colors[props.color],
      padding: 10,
      height: 51,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: props.customWidth || '100%',
    },
    r_button__text: {
      color: 'white',
      fontSize: 28,
    },
  })}