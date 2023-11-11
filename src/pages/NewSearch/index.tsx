import React, { useEffect } from 'react';
import { S } from "../../styles/styles";
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import DatePicker from 'react-native-date-picker';
import { db, storage } from '../../service/firebase/firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function NewSearch(props: any) {

  const selectedImage = useSelector((state: any) => state.selectedImage.image.image)

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

  function generateRandomId() {
    const id = Date.now().toString(16) + Math.random().toString(16)
    return id.replace(/\./g, '')
  }

  const handleUpload = async () => {

    const fileRandomRef = "images/" + generateRandomId() + '.jpeg'

    const imageRef = (ref(storage, fileRandomRef))
    const file = await fetch(selectedImage)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
      .then(() => {
        getImgUploadedSource(imageRef)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getImgUploadedSource = (imageRef: any) => {
    getDownloadURL(imageRef)
      .then((url) => {
        handleCreate(url)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleCreate = (url: any) => {
    let userDoc: any = null;
    if (userUID) {
      userDoc = doc(db, 'users', userUID)
      setDoc(userDoc, {})
        .then(() => {
          const subCollection = collection(userDoc, 'searchs')
          const docSearch = {
            title: nameSearch,
            date: inputDate,
            image: url,
            rates: {}
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
        <S.Container customWidth="653px" customPaddingVertical="10px">
          <S.Container style={{ gap: 5 }}>
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
              style={{ marginTop: 5 }}
              label="CADASTRAR"
              color="success"
              onPress={handleUpload} />
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};
