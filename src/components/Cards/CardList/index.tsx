import React from "react";
import { S } from "../../../styles/styles";
import { FlatList } from "react-native";
import { styles } from "./styles";
import Card from "../Card";

import { getCardDatas } from "../../../store/getters";
import { setSelectedCardResearch } from "../../../store/mutations"

export default function CardList() {

  // function handleResearchActionPage(item: object) {
  //   setSelectedCardResearch(item)
  //   props.navigation.push(  )
  // }

  return (
    <S.Container>
      <FlatList
        data={getCardDatas()}
        keyExtractor={(item) => `${item.title}-${Math.random()}`}
        renderItem={
          ({ item }) => <Card 
          onPress={() => ''}
          cardData={item} />
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.card_list}
      />
    </S.Container>
  );
}