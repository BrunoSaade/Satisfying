
import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { getRInputStyles } from './styles';
import { S } from '../../styles/styles';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ErrorMsg from '../ErrorMsg';
interface RInputProps {
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
  style?: object,
  fontSize?: number,
  icon?: string,
  error?: string,
  onPress?: () => void
  iconPosition?: string,
  editable?: boolean
}

const RInput: FC<RInputProps> = ({ 
  label, 
  placeholder,
  onChangeText, 
  value, 
  isPassword = false, 
  style,
  fontSize, 
  icon,
  error,
  onPress,
  iconPosition = "left",
  editable
}) => {
  const styles = getRInputStyles({ fontSize });
  return (
    <S.Container alignItems="start">
      {label && <S.TextDefault style={styles.r_input__label}>{label}</S.TextDefault>}
      <View style={{...styles.r_input__container, ...style, paddingHorizontal: 10, paddingRight: iconPosition === "right" ? 30 : ''}}>
        { iconPosition === "left" && <TouchableOpacity onPress={onPress}>
          {icon && <Icon name={icon} size={20} color="grey" />}
        </TouchableOpacity>}
        <TextInput
          editable={editable} 
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          style={{...styles.r_input}}
        />
        { iconPosition === "right" && <TouchableOpacity onPress={onPress}>
          {icon && <Icon name={icon} size={20} color="grey" />}
        </TouchableOpacity>}
      </View>
      {error && <ErrorMsg error={error}/>}
    </S.Container>
  );
};

export default RInput