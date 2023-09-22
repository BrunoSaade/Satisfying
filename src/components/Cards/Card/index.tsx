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
  };
}

export default function Card({ cardData }: CardProps) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={{ uri: cardData.image }}
          style={{width: '80%', height: '50%'}}
        />
        <S.TextDefault style={styles.card_title}>{cardData.title}</S.TextDefault>
        <S.TextDefault style={styles.card_date}>{cardData.date}</S.TextDefault>
      </View>
    </TouchableOpacity>
  );
}