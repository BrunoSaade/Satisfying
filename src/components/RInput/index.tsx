
import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';
import { Container, TextDefault } from '../../styles/styles';

interface RInputProps {
  label: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
}

const RInput: FC<RInputProps> = ({ label, placeholder, onChangeText, value, isPassword = false }) => {
  return (
    <Container alignItems="start">
      <TextDefault style={styles.r_input__label}>{label}</TextDefault>
      <TextInput
        placeholder={placeholder}
        style={styles.r_input}
        secureTextEntry={isPassword}
      />
    </Container>
  );
};

export default RInput