import React from "react";
import { S } from "../../../styles/styles";
import { FlatList } from "react-native";
import { styles } from "./styles";
import Card from "../Card";

import { getCardDatas } from "../../../store/getters";
import { setSelectedCardSearch } from "../../../store/mutations"

export default function CardList(props: any) {

  function handleToActionsSearchPage(item: any) {
    setSelectedCardSearch(item)
    props.navigation.push('Carnaval', { pageTitle: item.title });
  }

  return (
    <S.Container>
      <FlatList
        data={getCardDatas()}
        keyExtractor={(item) => `${item.title}-${Math.random()}`}
        renderItem={({ item }) => <Card cardData={item} onPress={() => handleToActionsSearchPage(item)} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.card_list}
      />
    </S.Container>
  );
}