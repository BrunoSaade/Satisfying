import React, { useEffect } from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native';
import { format } from 'date-fns';

export default function NewSearch(props: any) {

  const [nameSearch, setNameSearch] = React.useState('');
  const [dateSearch, setDateSearch] = React.useState('');
  const [imageSearch, setImageSearch] = React.useState('');
  const [nameIsValid, setNameIsValid] = React.useState(false);
  const [dateIsValid, setDateIsValid] = React.useState(false);
  const [errorMessageName, setErrorMessageName] = React.useState('Preencha o nome da pesquisa');
  const [errorMessageDate, setErrorMessageDate] = React.useState('Preencha a data da pesquisa');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [inputDate, setInputDate] = React.useState('')
  useEffect(() => {    
    const newDate = new Date(date.toDateString())
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;    
    setInputDate(formattedDate)
  }, [date]);  
  
  const handleSearch = () => {
    if(nameIsValid && dateIsValid) {
      props.navigation.popToTop()
    } else {
      setErrorMessage("Nome e data obrigatórios")
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
    setInputDate(text)
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
              onChangeText={handleDateSearch}
              value={inputDate}
              error={errorMessageDate}
            />
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
              modal
              locale={"pt-BR"}
              open={open}
              date={date}
              mode={"date"}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
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
