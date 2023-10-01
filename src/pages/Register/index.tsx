import React from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';

export default function NewSearch(props: any) {

  const [nameSearch, setNameSearch] = React.useState('');
  const [dateSearch, setDateSearch] = React.useState('');
  const [imageSearch, setImageSearch] = React.useState('');
  const [nameIsValid, setNameIsValid] = React.useState(false);
  const [dateIsValid, setDateIsValid] = React.useState(false);
  const [errorMessageName, setErrorMessageName] = React.useState('Preencha o nome da pesquisa');
  const [errorMessageDate, setErrorMessageDate] = React.useState('Preencha a data da pesquisa');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSearch = () => {
    if(nameIsValid && dateIsValid) {
      props.navigation.popToTop()
    } else {
      setErrorMessage("Nome e data obrigatório")
    }
  }

  const handleNameSearch = (text: string) => {
    setErrorMessage("")
    setNameSearch(text)
    if (text === null || text === "" || text.length === 0) {
      setNameIsValid(false)
      setErrorMessageName("Preencha o nome da pesquisa")
    }else{
      setErrorMessageName("")
      setNameIsValid(true)
    }
  }

  const handleDateSearch = (text: string) => {
    setErrorMessage("")
    setDateSearch(text)
    if (text === null || text === "" || text.length === 0) {
      setDateIsValid(false)
      setErrorMessageDate("Preencha a data da pesquisa")
    }else{
      setErrorMessageDate("")
      setDateIsValid(true)
    }
  }

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput 
              label="Nome" 
              placeholder="Digite o nome da pesquisa"
              onChangeText={handleNameSearch}
              value={nameSearch}
              error={errorMessageName}
            />
            <RInput 
              label="Data" 
              placeholder="Digite a data"
              keyboardType="date"
              format="DD/MM/YYYY"
              onChangeText={handleDateSearch}
              value={dateSearch}
              error={errorMessageDate}
            />
            <RImagePicker />
            <RButton 
              style={{marginTop: 30}}
              label="CADASTRAR"
              color="success"
              onPress={handleSearch}/>
              {errorMessage && (
                <S.ErrorMessage>
                  {errorMessage}
                </S.ErrorMessage>
              )}
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};
