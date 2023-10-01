import React from "react";
import { S } from "../../styles/styles";
import { View } from "react-native";
import { styles } from "./styles";
interface CardProps {
  error?: string
}

export default function ErrorMsg({ error }: CardProps) {
  return (
    <View>
      <S.TextDefault style={styles.error_msg}>{error}</S.TextDefault>
    </View>
  );
}