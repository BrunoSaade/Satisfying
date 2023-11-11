import React, { useState } from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import RInput from "../../components/RInput";
import CardList from "../../components/Cards/CardList";
import RButton from "../../components/RButton";

export default function Home(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <RContainer>
      <S.Container>
        <S.Container>
          <S.Container customPaddingHorizontal="30px" customPaddingVertical="15px">
            <RInput 
              icon="search" 
              style={{ height: 25 }} 
              fontSize={20} 
              placeholder="Insira o termo da busca..." 
              onChangeText={(text) => setSearchTerm(text)}/>
          </S.Container>
          <S.Container>
            <CardList {...props} searchTerm={searchTerm}/>
          </S.Container>
          <S.Container customPaddingHorizontal="30px" customPaddingVertical="10px">
            <RButton customHeight={30} label="NOVA PESQUISA" color="success" onPress={() => handleToPage('Nova Pesquisa')} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
}