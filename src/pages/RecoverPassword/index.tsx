import React, { useEffect } from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';

export default function RecoverPassword(props: any) {

  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(false);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailIsValid(false)
    } else {
      setEmailIsValid(true)
    }
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