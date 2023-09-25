import React from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import Sections from "../../components/Sections";

export default function SearchActions(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container style={{ justifyContent: 'center' }}>
        <Sections {...props} />
      </S.Container>
    </RContainer >
  );
}