import React from 'react';

import { Container, TextDefault } from "../../styles/styles";
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons'

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";

export default function Login() {
  return (
    <Container>
      <Container customWidth="653px">
        <Container style={styles.view_logo}>
          <TextDefault style={styles.view_logo__text}>Satisfying.you</TextDefault>
          <Icon name="sentiment-satisfied" size={60} color="white" />
        </Container>
        <Container>
          <RInput label="E-mail" placeholder="E-mail"/>
          <RInput label="Senha" placeholder="Digite sua senha" isPassword/>
          <RButton label="Entrar"/>
        </Container>
      </Container>
    </Container>
  );
};