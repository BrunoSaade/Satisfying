import React from "react";
import { S } from "../../../styles/styles";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import cardsData from '../../../store/cardsData.json'

export default function CardList() {
  return (
    <S.Container>
      <FlatList
        data={cardsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Card cardData={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.card_list}
      />
    </S.Container>
  );
}