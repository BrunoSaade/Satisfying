// SearchActions.js
import React, { useEffect } from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import Sections from "../../components/Sections";
import { useSelector } from "react-redux";

export default function SearchActions(props: any) {
  const { title } = props.route.params || { title: "Default Title" };

  const selectedCard = useSelector((state: any) => state.selectedCard);

  useEffect(() => {
    props.navigation.setOptions({ title: selectedCard.title || title });
  }, [selectedCard.title, title, props.navigation]);

  return (
    <RContainer>
      <S.Container style={{ justifyContent: 'center' }}>
        <Sections {...props}/>
      </S.Container>
    </RContainer>
  );
}
