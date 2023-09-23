import React from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import RInput from "../../components/RInput";
import Card from "../../components/Cards/Card";
import CardList from "../../components/Cards/CardList";
import { Image } from "react-native";
import RButton from "../../components/RButton";
import Sections from "../../components/Sections";

export default function SearchActions(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container style={{ justifyContent: 'center', alignItems: 'space-evenly' }} /* mano, ele dá esse erro mas foi o unico jeito que consegui de ajustar o display */>
        <Sections {...props} />
      </S.Container>
    </RContainer >
  );
}