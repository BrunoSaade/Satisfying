import React, { useEffect } from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import { email_validator } from '../../plugins/validate';

export default function RecoverPassword(props: any) {

  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(false);

  useEffect(() => {
    setEmailIsValid(email_validator(email))
  }, [email]);

  function handleToLogin() {
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
              onChangeText={setEmail}
              value={email}
              error={emailIsValid ? "" : "E-mail parece ser inválido"}/>
            <RButton style={{marginTop: 30}} label="RECUPERAR" color="success" onPress={handleToLogin}/>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};