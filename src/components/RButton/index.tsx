import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getRButtonStyles } from './styles';
import { theme } from '../../theme/styles';

type RButtonColor = keyof typeof theme.colors;
interface RButtonProps {
  label: string;
  onPress: () => void;
  color: RButtonColor;
  customHeight?: number;
  style?: object,
  customWidth?: number,
}

const RButton: FC<RButtonProps> = ({ label, onPress, color, customHeight, style, customWidth }) => {
  const styles = getRButtonStyles({ color, customHeight, customWidth });

  return (
    <TouchableOpacity style={{...styles.r_button, ...style}} onPress={onPress}>
      <Text style={styles.r_button__text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RButton;
