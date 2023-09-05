import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface RButtonProps {
  label: string;
  onPress?: () => void;
}

const RButton: FC<RButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.r_button} onPress={onPress}>
      <Text style={styles.r_button__text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RButton;
