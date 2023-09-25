import React, { useState } from "react";
import { S } from "../../styles/styles";
import { Text } from "react-native";
import RContainer from "../../components/RContainer";
import Rating from "../../components/Rating";
import RButton from "../../components/RButton";
import Acknowledgments from "../Acknowledgments";
import { styles } from "./styles";

export default function Collect(props: any) {

  const [showAcknowledgments, setShowAcknowledgments] = useState(false)

  const handleButtonPress = () => {
    setShowAcknowledgments(true);
    setTimeout(() => {
      setShowAcknowledgments(false)
    }, 2000)
  }

  function handleToPage() {
    props.navigation.goBack()
  }

  return (
    <RContainer >
      <S.Container>
        <RButton style={styles.closeButton} label="X" color="default" onPress={() => handleToPage()} />
        {
          showAcknowledgments
            ?
            (<Acknowledgments />)
            :
            (<>
              <S.TextDefault style={styles.text} > O que você achou do Carnaval 2024? </S.TextDefault>
              <Rating {...props} onClick={handleButtonPress} />
            </>)
        }
      </S.Container>
    </RContainer >
  );
}