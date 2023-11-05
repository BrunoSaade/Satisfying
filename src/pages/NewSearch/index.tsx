import React, { useEffect } from 'react';
import { S } from "../../styles/styles";
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import DatePicker from 'react-native-date-picker';
import { db } from '../../service/firebase/firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';


export default function NewSearch(props: any) {

  const [nameSearch, setNameSearch] = React.useState('');
  const [errorMessageName, setErrorMessageName] = React.useState('Preencha o nome da pesquisa');
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [inputDate, setInputDate] = React.useState('')
  const userUID = useSelector((state: any) => state.user.uid)


  useEffect(() => {
    const newDate = new Date(date.toDateString())
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setInputDate(formattedDate)
  }, [date]);


  const handleNameSearch = (text: string) => {
    setNameSearch(text)
    if (text === null || text === "" || text.length === 0) {
      setErrorMessageName("Preencha o nome da pesquisa")
    } else {
      setErrorMessageName("")
    }
  }


  const handleCreate = () => {
    let userDoc: any = null;
    if (userUID) {
      userDoc = doc(db, 'users', userUID)
      setDoc(userDoc, {})
        .then(() => {
          const subCollection = collection(userDoc, 'searchs')
          const docSearch = {
            title: nameSearch,
            date: inputDate,
            image: 'https://picsum.photos/id/4/200/300' // PRECISA IMPLEMENTAR A CAPTURA DINÂMICA DA IMAGEM
          }
          addDoc(subCollection, docSearch)
            .then(() => { props.navigation.push('Drawer') })
            .catch((error) => { console.error(+ error) })
        })
        .catch((error) => { console.error(error) })
    }
  }


  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{ gap: 15 }}>
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
              value={inputDate}
              icon='calendar-month'
              iconPosition="right"
              onPress={() => setOpen(true)}
              editable={false}
            />
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
              style={{ marginTop: 30 }}
              label="CADASTRAR"
              color="success"
              onPress={handleCreate} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};
