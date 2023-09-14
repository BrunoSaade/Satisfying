import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getRButtonStyles } from './styles';

interface RButtonProps {
  label: string;
  onPress?: () => void;
  color: string;
  customHeight?: string;
  style?: object,
}

const RButton: FC<RButtonProps> = ({ label, onPress, color, customHeight, style }) => {
  const styles = getRButtonStyles({ color, customHeight });

  return (
    <TouchableOpacity style={{...styles.r_button, ...style}} onPress={onPress}>
      <Text style={styles.r_button__text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RButton;
