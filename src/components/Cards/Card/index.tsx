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
  props: any;
}

export default function Card({ cardData, props }: CardProps) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <TouchableOpacity onPress={() => handleToPage('Carnaval')}>
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