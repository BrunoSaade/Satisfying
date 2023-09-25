import React from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import RInput from "../../components/RInput";
import Card from "../../components/Cards/Card";
import CardList from "../../components/Cards/CardList";
import { Image } from "react-native";
import RButton from "../../components/RButton";

export default function Home(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container>
        <S.Container>
          <S.Container customPaddingHorizontal="30px" customPaddingVertical="20px">
            <RInput icon="search" style={{ height: 35 }} fontSize={20} placeholder="Insira o termo da busca..." />
          </S.Container>
          <S.Container style={{ marginTop: 20 }}>
            <CardList {...props} />
          </S.Container>
          <S.Container customPaddingHorizontal="30px" customPaddingVertical="30px">
            <RButton style={{ marginTop: 30 }} label="NOVA PESQUISA" color="success" onPress={() => handleToPage('Nova Pesquisa')} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
}