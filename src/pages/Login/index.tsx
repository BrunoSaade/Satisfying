import React from 'react';

import { S } from "../../styles/styles";
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons'

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";

export default function Login(props: any) {

  const handleLogin = () => {
    props.navigation.push('Drawer')
  };

  return (
    <S.Container>
      <S.Container customWidth="653px">
        <S.Container style={styles.view_logo}>
          <S.TextDefault style={styles.view_logo__text}>Satisfying.you</S.TextDefault>
          <Icon name="sentiment-satisfied" size={60} color="white" />
        </S.Container>
        <S.Container>
          <RInput label="E-mail" placeholder="E-mail"/>
          <RInput label="Senha" placeholder="Digite sua senha" isPassword/>
          <RButton label="Entrar" onPress={handleLogin}/>
        </S.Container>
      </S.Container>
    </S.Container>
  );
};