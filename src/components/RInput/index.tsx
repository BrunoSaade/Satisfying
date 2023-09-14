
import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';
import { S } from '../../styles/styles';

interface RInputProps {
  label: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
}

const RInput: FC<RInputProps> = ({ label, placeholder, onChangeText, value, isPassword = false }) => {
  return (
    <S.Container alignItems="start">
      <S.TextDefault style={styles.r_input__label}>{label}</S.TextDefault>
      <TextInput
        placeholder={placeholder}
        style={styles.r_input}
        secureTextEntry={isPassword}
      />
    </S.Container>
  );
};

export default RInput