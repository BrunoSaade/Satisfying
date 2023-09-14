import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getRButtonStyles } from './styles';

interface RButtonProps {
  label: string;
  onPress?: () => void;
  color: string;
}

const RButton: FC<RButtonProps> = ({ label, onPress, color }) => {
  const styles = getRButtonStyles({ color });

  return (
    <TouchableOpacity style={styles.r_button} onPress={onPress}>
      <Text style={styles.r_button__text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RButton;
