// import { View } from 'react-native';
// import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

interface RButtonProps {
  customWidth?: string;
  color: string;
  customHeight?: string
}

export const getRButtonStyles = (props: RButtonProps) => {
  
  return StyleSheet.create({
    r_button: {
      backgroundColor: theme.colors[props.color],
      height: props.customHeight || 51,
      width: props.customWidth || '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    r_button__text: {
      color: 'white',
      fontSize: !!props.customHeight ? 24 : 28,
    },
  })}