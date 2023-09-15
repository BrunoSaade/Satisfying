import React from 'react';

import { S } from "../../styles/styles";
import { styles } from "./styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';

export default function RecoverPassword(props: any) {

  function handleToLogin() {
    props.navigation.popToTop()
  };

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput label="E-mail" placeholder="E-mail"/>
            <RButton style={{marginTop: 30}} label="RECUPERAR" color="success" onPress={handleToLogin}/>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};