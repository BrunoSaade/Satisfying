import React, { useEffect } from "react";
import { S } from "../../../styles/styles";
import { FlatList } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import { db, auth } from '../../../service/firebase/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from "react-redux";

export default function CardList(props: any) {

  const [array, setArray] = React.useState<any[]>([])
  const userUID = useSelector((state: any) => state.user.uid)

  useEffect(() => {
    const getSnapshot = () => {
      let userDoc: any = null
      if (userUID) {
        userDoc = doc(db, 'users', userUID);
        const subCollection = collection(userDoc, 'searchs')

        onSnapshot(subCollection, (snapshot) => {
          const newArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

          const filteredArray = newArray.filter((item) =>
            (item as any).title.toLowerCase().includes(props.searchTerm.toLowerCase())
          );

          setArray(filteredArray);
        })
      }
    }
    getSnapshot();
  }, [props.searchTerm]);


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