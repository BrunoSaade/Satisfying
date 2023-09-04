import styled from 'styled-components';
import { View } from 'react-native'; // Assuming you're using React Native
import { theme } from '../theme/styles';

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary[0]};  
  fontFamily: AveriaLibre-Regular;
`;