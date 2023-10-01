import styled from 'styled-components';
import { Text, View } from 'react-native'; // Assuming you're using React Native
import { theme } from '../theme/styles';

interface ContainerProps {
  customWidth?: string;
  alignItems?: string;
  customPaddingVertical?: string;
  customPaddingHorizontal?: string;
  justifyContent?: string;
}

export const S = {
  Container: styled(View)<ContainerProps>`
    flex: 1;
    background-color: ${theme.colors.primary[50]};  
    justifyContent: ${(props) => (props.justifyContent || '')};
    alignItems: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    width: ${(props) => (props.customWidth ? props.customWidth : '100%')};
    paddingVertical: ${(props) => (props.customPaddingVertical ? props.customPaddingVertical : '')};
    paddingHorizontal: ${(props) => (props.customPaddingHorizontal ? props.customPaddingHorizontal : '')};
  `,
  
  TextDefault: styled(Text)`
    fontFamily: ${theme.font};
  `,
} 