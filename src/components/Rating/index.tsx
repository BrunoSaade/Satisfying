import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { S } from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, face1, face2, face3, face4, face5 } from "./styles";
import { db } from '../../service/firebase/firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useSelector } from "react-redux";


export default function Rating(props: any) {

  const userUID = useSelector((state: any) => state.user.uid)
  const selectedCard = useSelector((state: any) => state.selectedCard)

  const handleButtonPress = (rate: string) => {
    let userDoc: any = null;
    if (userUID) {
      userDoc = doc(db, 'users', userUID);
      const subCollection = collection(userDoc, 'searchs');
      const docRef = doc(subCollection, selectedCard.id);
      getDoc(docRef).then((e) => {
        const docSearch = { [rate]: (e.data()?.[rate] || 0) + 1 };
        updateDoc(docRef, docSearch)
          .then(() => { })
          .catch((error) => { console.error(+ error) });
      })
        .catch()
    }
    props.onClick();
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => handleButtonPress("pessimo")} style={styles.column}>
        <SvgXml xml={face1} />
        <S.TextDefault style={styles.text}>Péssimo</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress("ruim")} style={styles.column}>
        <SvgXml xml={face2} />
        <S.TextDefault style={styles.text}>Ruim</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress("neutro")} style={styles.column}>
        <SvgXml xml={face3} />
        <S.TextDefault style={styles.text}>Neutro</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress("bom")} style={styles.column}>
        <SvgXml xml={face4} />
        <S.TextDefault style={styles.text}>Bom</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress("excelente")} style={styles.column}>
        <SvgXml xml={face5} />
        <S.TextDefault style={styles.text}>Excelente</S.TextDefault>
      </TouchableOpacity>
    </View >
  );
};