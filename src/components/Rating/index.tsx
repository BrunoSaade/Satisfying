import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { S } from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, face1, face2, face3, face4, face5 } from "./styles";
import { db } from '../../service/firebase/firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { reducerSetSelectedCard } from '../../service/redux/selectedCardSlice';


export default function Rating(props: any) {

  const dispatch = useDispatch();
  const userUID = useSelector((state: any) => state.user.uid)
  const selectedCard = useSelector((state: any) => state.selectedCard)

  const handleButtonPress = (rate: string) => {
    if (userUID) {
      const userDoc = doc(db, 'users', userUID);
      const subCollection = collection(userDoc, 'searchs');
      const docRef = doc(subCollection, selectedCard.id);
  
      getDoc(docRef)
        .then((e) => {
          const existingRates = e.data()?.rates || {};
          const updatedRates = {
            ...existingRates,
            [rate]: (existingRates[rate] || 0) + 1,
          };
  
          const docSearch = {
            rates: updatedRates,
          };

          return updateDoc(docRef, docSearch);
        })
        .then(() => {
          return getDoc(docRef);
        })
        .then((updatedData) => {
          dispatch(
            reducerSetSelectedCard({
              id: selectedCard.id,
              title: updatedData.data()?.title,
              date: updatedData.data()?.date,
              image: updatedData.data()?.image,
              rates: updatedData.data()?.rates,
            })
          );
        })
        .catch((error) => {
          console.error('Erro ao lidar com a atualização:', error);
        })
        .finally(() => {
          props.onClick();
        });
    }
  };

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