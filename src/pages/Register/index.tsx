import React from 'react';

import { S } from "../../styles/styles";
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons'

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';

export default function Register(props: any) {

  function handleLogin() {
    props.navigation.popToTop()
  };

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput label="E-mail" placeholder="E-mail"/>
            <RInput label="Senha" placeholder="Digite sua senha" isPassword/>
            <RInput label="Repetir senha" placeholder="Repita sua senha" isPassword/>
            <RButton style={{marginTop: 30}} label="CADASTRAR" color="success" onPress={handleLogin}/>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};