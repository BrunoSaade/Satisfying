import React, { useEffect } from 'react';
import { S } from "../../styles/styles";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons'
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import { email_validator } from '../../plugins/validate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../service/firebase/firebase';


export default function Login(props: any) {

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);

  useEffect(() => {
    setEmailIsValid(email_validator(email))
  }, [email]);

  function handleToLogin() {
    if (emailIsValid) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoginError(false)
          props.navigation.push('Drawer')
        })
        .catch((error) => {
          setLoginError(true)
          console.log(JSON.stringify(error))
        });
    }
  }

  function handleToPage(page: String) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={styles.view_logo}>
            <S.TextDefault style={styles.view_logo__text}>Satisfying.you</S.TextDefault>
            <Icon name="sentiment-satisfied" size={60} color="white" />
          </S.Container>
          <S.Container style={{ gap: 15 }}>
            <RInput label="E-mail" placeholder="E-mail" value={email} onChangeText={setEmail} />
            <RInput
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              isPassword
              error={(emailIsValid || email == '') && !loginError ? "" : "E-mail e/ou senha inválidos."} />
            <RButton style={{ marginTop: 30 }} label="Entrar" color="success" onPress={() => handleToLogin()} />
          </S.Container>
          <S.Container style={{ marginTop: 70 }}>
            <RButton customHeight={37} label="Criar minha conta" color="info" onPress={() => handleToPage('Nova Conta')} />
            <RButton
              style={{ marginTop: 15 }}
              customHeight={37}
              label="Esqueci minha senha"
              color="neutral"
              onPress={() => handleToPage('Recuperação de senha')} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};