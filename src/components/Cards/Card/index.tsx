import React from "react";
import { S } from "../../../styles/styles";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from 'react-redux';
import { reducerSetSelectedCard } from '../../../service/redux/selectedCardSlice';

interface CardProps {
  cardData: {
    id: string;
    image: string;
    title: string;
    date: string;
    rates: Object;
  },
  props: any;
}

export default function Card({ cardData, props }: CardProps) {

  const dispatch = useDispatch();

  function handleToPage(page: string) {

    dispatch(reducerSetSelectedCard({
      id: cardData.id,
      title: cardData.title,
      date: cardData.date,
      image: cardData.image,
      rates: cardData.rates,
    }))

    props.navigation.push(page)
  }

  return (
    <TouchableOpacity onPress={() => handleToPage('SearchActions')}>
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