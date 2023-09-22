
import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { getRInputStyles } from './styles';
import { S } from '../../styles/styles';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface RInputProps {
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
  style?: object,
  fontSize?: number,
  icon?: string
}

const RInput: FC<RInputProps> = ({ 
  label, 
  placeholder,
  onChangeText, 
  value, 
  isPassword = false, 
  style,
  fontSize, 
  icon
}) => {
  const styles = getRInputStyles({ fontSize });
  return (
    <S.Container alignItems="start">
      {label && <S.TextDefault style={styles.r_input__label}>{label}</S.TextDefault>}
      <View style={{...styles.r_input__container, ...style, paddingHorizontal: 10,}}>
        <TouchableOpacity>
          {icon && <Icon name={icon} size={20} color="grey" />}
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPassword}
          style={{...styles.r_input}}
        />
      </View>
    </S.Container>
  );
};

export default RInput