import React, { useEffect } from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import { email_validator } from '../../plugins/validate';

export default function Register(props: any) {

  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isPasswordDifferent, setIsPasswordDifferent] = React.useState(false);

  useEffect(() => {
    if(password === confirmPassword) {
      setIsPasswordDifferent(true)
    } else {
      setIsPasswordDifferent(false)
    }
  }, [confirmPassword]); 

  useEffect(() => {
    setEmailIsValid(email_validator(email))
  }, [email]);

  function handleLogin() {
    props.navigation.popToTop()
  };

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput 
              label="E-mail" 
              placeholder="E-mail"
              value={email} 
              onChangeText={setEmail}
              error={emailIsValid ? "" : "E-mail parece ser inválido"}/>
            <RInput 
              label="Senha" 
              placeholder="Digite sua senha" 
              isPassword
              onChangeText={setPassword}
              value={password}/>
            <RInput 
              label="Repetir senha" 
              placeholder="Repita sua senha" 
              isPassword 
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              error={isPasswordDifferent ? "" : "O campo repetir senha difere da senha"}/>
            <RButton style={{marginTop: 30}} label="CADASTRAR" color="success" onPress={handleLogin}/>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};