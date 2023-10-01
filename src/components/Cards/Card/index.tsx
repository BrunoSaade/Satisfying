import React from "react";
import { S } from "../../../styles/styles";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardProps {
  cardData: {
    image: string;
    title: string;
    date: string;
  },
  props?: any;
  onPress: () => void;
}

export default function Card({ cardData, props, onPress }: CardProps) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{ uri: cardData.image }}
          style={styles.card_img}
        />
        <S.TextDefault style={styles.card_title}>{cardData.title}</S.TextDefault>
        <S.TextDefault style={styles.card_date}>{cardData.date}</S.TextDefault>
      </View>
    </TouchableOpacity>
  );
}