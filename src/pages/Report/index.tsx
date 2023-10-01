import React from "react";
import { S } from "../../styles/styles";
import { View } from "react-native";
import RContainer from "../../components/RContainer";
import { SvgXml } from 'react-native-svg';
import { styles, imgGraphic } from "./styles";

export default function Report(props: any) {
  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <RContainer>
      <S.Container>
        <View style={styles.container}>

          <View style={styles.graphic}>
            <SvgXml xml={imgGraphic} />
          </View>

          <View style={styles.subtitleField}>
            <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#F1CE7E' }]}></View>
              <S.TextDefault style={styles.text}>Excelente</S.TextDefault>
            </View>

            <View style={styles.subtitle}>
              <View style={[styles.color, , { backgroundColor: '#6994FE' }]}></View>
              <S.TextDefault style={styles.text}>Bom</S.TextDefault>
            </View>

            <View style={styles.subtitle}>
              <View style={[styles.color, , { backgroundColor: '#5FCDA4' }]}></View>
              <S.TextDefault style={styles.text}>Neutro</S.TextDefault>
            </View>

            <View style={styles.subtitle}>
              <View style={[styles.color, , { backgroundColor: '#EA7288' }]}></View>
              <S.TextDefault style={styles.text}>Ruim</S.TextDefault>
            </View>

            <View style={styles.subtitle}>
              <View style={[styles.color, , { backgroundColor: '#53D8D8' }]}></View>
              <S.TextDefault style={styles.text}>Péssimo</S.TextDefault>
            </View>
          </View>

        </View>
      </S.Container>
    </RContainer >
  );
}