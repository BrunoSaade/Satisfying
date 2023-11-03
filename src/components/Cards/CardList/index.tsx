import React, { useEffect } from "react";
import { S } from "../../../styles/styles";
import { FlatList } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import { db, auth } from '../../../service/firebase/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';

export default function CardList(props: any) {

  const [array, setArray] = React.useState<any[]>([])

  useEffect(() => {
    const getSnapshot = () => {
      const userUID = auth.currentUser?.uid
      let userDoc: any = null

      if (userUID) {
        userDoc = doc(db, 'users', userUID);
        const subCollection = collection(userDoc, 'searchs')

        onSnapshot(subCollection, (snapshot) => {
          const newArray = snapshot.docs.map((doc) => ({ ...doc.data() }));
          setArray(newArray);
        })
      }
    }
    getSnapshot();
  }, []);


  return (
    <S.Container>
      <FlatList
        data={array}
        keyExtractor={(item) => `${item.title}-${Math.random()}`}
        renderItem={({ item }) => <Card cardData={item} props={props} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.card_list}
      />
    </S.Container>
  );
}