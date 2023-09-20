
import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { getRInputStyles } from './styles';
import { S } from '../../styles/styles';

interface RInputProps {
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
  style?: object,
  fontSize?: number,
}

const RInput: FC<RInputProps> = ({ 
  label, 
  placeholder,
  onChangeText, 
  value, 
  isPassword = false, 
  style,
  fontSize
}) => {
  const styles = getRInputStyles({ fontSize });
  return (
    <S.Container alignItems="start">
      {label && <S.TextDefault style={styles.r_input__label}>{label}</S.TextDefault>}
      <TextInput
        placeholder={placeholder}
        style={{...styles.r_input, ...style}}
        secureTextEntry={isPassword}
      />
    </S.Container>
  );
};

export default RInput