import styled from 'styled-components';
import { Text, View } from 'react-native'; // Assuming you're using React Native
import { theme } from '../theme/styles';

interface ContainerProps {
  customWidth?: string;
  alignItems?: string;
  customPaddingVertical?: string;
}

export const S = {
  Container: styled(View)<ContainerProps>`
    flex: 1;
    background-color: ${theme.colors.primary[50]};  
    justifyContent: center;
    alignItems: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    width: 100%;
    width: ${(props) => (props.customWidth ? props.customWidth : '100%')};
    paddingVertical: ${(props) => (props.customPaddingVertical ? props.customPaddingVertical : '')}
  `,
  
  TextDefault: styled(Text)`
    fontFamily: ${theme.font};
  `,
} 