import React from "react";
import { S } from "../../styles/styles";
import { Text } from "react-native";
import RContainer from "../../components/RContainer";

export default function ModifySearch(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container>


      </S.Container>
    </RContainer >
  );
}