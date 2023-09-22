import React from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';

export default function NewSearch() {

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput label="Nome" placeholder="Digite o nome da pesquisa"/>
            <RInput label="Data" placeholder="Digite a data"/>
            <RInput label="Imagem" placeholder="Câmera/Galeria de Imagens"/>
            <RButton style={{marginTop: 30}} label="CADASTRAR" color="success" onPress={() => ''}/>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};