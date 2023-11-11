import React, { useState } from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import Rating from "../../components/Rating";
import RButton from "../../components/RButton";
import Acknowledgments from "../Acknowledgments";
import { styles } from "./styles";
import { useSelector } from "react-redux";

export default function Collect(props: any) {

  const [showAcknowledgments, setShowAcknowledgments] = useState(false)
  const selectedCard = useSelector((state: any) => state.selectedCard)

  const handleButtonPress = () => {
    setShowAcknowledgments(true);
    setTimeout(() => {
      setShowAcknowledgments(false)
    }, 3000)
  }

  function handleToPage() {
    props.navigation.goBack()
  }


  return (
    <RContainer >
      <S.Container>
        <RButton style={styles.closeButton} label="" color="default" onPress={() => handleToPage()} />
        {
          showAcknowledgments
            ?
            (<Acknowledgments />)
            :
            (<>
              <S.TextDefault style={styles.text} > O que você achou do {selectedCard.title}? </S.TextDefault>
              <Rating {...props} onClick={handleButtonPress} />
            </>)
        }
      </S.Container>
    </RContainer >
  );
}