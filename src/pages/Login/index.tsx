import React from 'react';

import { S } from "../../styles/styles";
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons'

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login(props: any) {

  const handleLogin = () => {
    props.navigation.push('Drawer')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Container>
          <S.Container customWidth="653px">
            <S.Container style={styles.view_logo}>
              <S.TextDefault style={styles.view_logo__text}>Satisfying.you</S.TextDefault>
              <Icon name="sentiment-satisfied" size={60} color="white" />
            </S.Container>
            <S.Container>
              <RInput label="E-mail" placeholder="E-mail"/>
              <RInput label="Senha" placeholder="Digite sua senha" isPassword/>
              <RButton label="Entrar" color="success" onPress={handleLogin}/>
            </S.Container>
          </S.Container>
        </S.Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};