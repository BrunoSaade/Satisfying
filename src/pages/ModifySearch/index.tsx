import React, { useState, useEffect } from 'react';
import { S } from "../../styles/styles";
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, svgApagarDados } from "./styles";
import { View, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { db, storage } from '../../service/firebase/firebase';
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';



export default function NewSearch(props: any) {

  const userUID = useSelector((state: any) => state.user.uid)
  const selectedCard = useSelector((state: any) => state.selectedCard)

  const selectedImage = useSelector((state: any) => state.selectedImage.image.image)

  const [nameSearch, setNameSearch] = React.useState(selectedCard.title)
  const [date, setDate] = useState(new Date())
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false)
  const [inputDate, setInputDate] = useState('')


  useEffect(() => {
    const newDate = new Date(date.toDateString())
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setInputDate(formattedDate)
  }, [date]);


  const handleDelete = () => {
    let userDoc: any = null;
    if (userUID) {
      userDoc = doc(db, 'users', userUID);
      const subCollection = collection(userDoc, 'searchs');
      const docRef = doc(subCollection, selectedCard.id);
      deleteDoc(docRef)
        .then(() => {
          setVisible(false)
          props.navigation.push('Drawer')
        })
        .catch((error) => { console.error(+ error) });
    }
  }

  function generateRandomId() {
    const id = Date.now().toString(16) + Math.random().toString(16)
    return id.replace(/\./g, '')
  }

  const handleUpload = async () => {
    if (selectedImage) {
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
    } else {
      handleSave(selectedCard.image)
    }
  }

  const getImgUploadedSource = (imageRef: any) => {
    getDownloadURL(imageRef)
      .then((url) => {
        handleSave(url)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleSave = (url: any) => {
    let userDoc: any = null;
    if (userUID) {
      userDoc = doc(db, 'users', userUID);
      const subCollection = collection(userDoc, 'searchs');
      const docSearch = {
        title: nameSearch,
        date: inputDate,
        image: url,
      };
      const docRef = doc(subCollection, selectedCard.id);
      updateDoc(docRef, docSearch)
        .then(() => { props.navigation.push('Drawer') })
        .catch((error) => { console.error(+ error) });
    }
  }
  
  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="15px">
          <S.Container style={{ gap: 5 }}>
            <RInput
              label="Nome"
              value={nameSearch}
              onChangeText={(text: string) => setNameSearch(text)}
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
            <RImagePicker cardImage={selectedCard.image}/>

            <View style={styles.row}>
              <RButton style={styles.column_save} label="SALVAR" color="success" onPress={handleUpload}/>

              <TouchableOpacity onPress={() => setVisible(true)} style={styles.column_delete}>
                <SvgXml xml={svgApagarDados} width={30} />
                <S.TextDefault style={styles.text}>Apagar</S.TextDefault>
              </TouchableOpacity>
            </View >

            <Modal animationType='fade' transparent={true} visible={visible}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 506, height: 253 }}>
                  <RContainer >
                    <S.Container >
                      <S.Container>
                        <S.TextDefault style={styles.text_modal} > Tem certeza que deseja apagar essa pesquisa? </S.TextDefault>
                        <View style={styles.row}>
                          <RButton label='SIM' color='error' onPress={handleDelete} style={styles.column_modal_confirm} />
                          <RButton label='CANCELAR' color="blue" onPress={() => setVisible(false)} style={styles.column_modal_cancel} />
                        </View>
                      </S.Container>
                    </S.Container>
                  </RContainer>
                </View>
              </View>
            </Modal>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};
