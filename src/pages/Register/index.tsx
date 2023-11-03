import React, { useEffect, useState } from 'react';
import { S } from "../../styles/styles";
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import { email_validator } from '../../plugins/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../service/firebase/firebase';

export default function Register(props: any) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emptyField, setEmptyField] = React.useState(true);
  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [isPasswordEquals, setisPasswordEquals] = React.useState(false);


  useEffect(() => {
    if (password === confirmPassword) {
      setisPasswordEquals(true)
    } else {
      setisPasswordEquals(false)
    }
  }, [confirmPassword]);


  useEffect(() => {
    setEmailIsValid(email_validator(email))
  }, [email]);


  useEffect(() => {
    if ((password == '') || (confirmPassword == '') || (email == '')) {
      setEmptyField(true)
    } else {
      setEmptyField(false)
    }
  }, [password, confirmPassword, email]);


  function handleLogin() {
    if (emailIsValid && isPasswordEquals && !emptyField) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => { props.navigation.popToTop() })
        .catch((error) => { console.log(JSON.stringify(error)) });
    }
  }

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{ gap: 15 }}>
            <RInput
              label="E-mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              error={emailIsValid || email == '' ? "" : "E-mail parece ser inválido"} />
            <RInput
              label="Senha"
              placeholder="Digite sua senha"
              isPassword
              onChangeText={setPassword}
              value={password} />
            <RInput
              label="Repetir senha"
              placeholder="Repita sua senha"
              isPassword
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              error={emptyField ? "Preencha todos os campos" : (!isPasswordEquals ? "O campo repetir senha difere da senha" : "")}
            />
            <RButton style={{ marginTop: 30 }} label="CADASTRAR" color="success" onPress={handleLogin} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};