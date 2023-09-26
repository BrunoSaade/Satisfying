import React from "react";
import { S } from "../../styles/styles";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

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