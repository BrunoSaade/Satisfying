import React from "react";
import { S } from "../../styles/styles";
import { Text } from "react-native";
import RContainer from "../../components/RContainer";
import Rating from "../../components/Rating";
import RButton from "../../components/RButton";

export default function Collect(props: any) {

  function handleToPage() {
    props.navigation.goBack()
  }

  return (
    <RContainer >
      <S.Container>
        <RButton style={{ maxWidth: 40, maxHeight: 40, alignSelf: 'flex-end', justifyContent: 'flex-end' }} label="X" color="default" onPress={() => handleToPage()} />
        <S.TextDefault style={{ marginVertical: 50, marginTop: 10, textAlign: 'center', color: 'white', fontSize: 35 }} > O que você achou do Carnaval 2024? </S.TextDefault>
        <Rating {...props} />
      </S.Container>
    </RContainer >
  );
}