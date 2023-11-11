import React from "react";
import { S } from "../../styles/styles";
import { View } from "react-native";
import RContainer from "../../components/RContainer";
import { styles } from "./styles";
import { PieChart } from 'react-native-svg-charts'
import { useSelector } from "react-redux";

export default function Report() {

  const selectedCard = useSelector((state: any) => state.selectedCard)
  
  const data = [
    {
        key: 1,
        value: selectedCard?.rates?.excelente || 0,
        svg: { fill: '#F1CE7E' },
        arc: { outerRadius: '130%', cornerRadius: 10,  }
    },
    {
        key: 2,
        value: selectedCard?.rates?.bom || 0,
        svg: { fill: '#6994FE' }
    },
    {
        key: 3,
        value: selectedCard?.rates?.neutro || 0,
        svg: { fill: '#5FCDA4' }
    },
    {
        key: 4,
        value: selectedCard?.rates?.ruim || 0,
        svg: { fill: '#EA7288' }
    },
    {
        key: 5,
        value: selectedCard?.rates?.pessimo || 0,
        svg: { fill: '#53D8D8' }
    }
  ]   

  return (
    <RContainer>
      <S.Container style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.chartContainer}>
            <PieChart style={styles.pieChart} outerRadius={'70%'} innerRadius={10} data={data} />
          </View>
          <View style={styles.subtitleContainer}>
          <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#F1CE7E' }]}></View>
              <S.TextDefault style={styles.text}>Excelente</S.TextDefault>
            </View>
            <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#6994FE' }]}></View>
              <S.TextDefault style={styles.text}>Bom</S.TextDefault>
            </View>
            <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#5FCDA4' }]}></View>
              <S.TextDefault style={styles.text}>Neutro</S.TextDefault>
            </View>
            <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#EA7288' }]}></View>
              <S.TextDefault style={styles.text}>Ruim</S.TextDefault>
            </View>
            <View style={styles.subtitle}>
              <View style={[styles.color, { backgroundColor: '#53D8D8' }]}></View>
              <S.TextDefault style={styles.text}>Péssimo</S.TextDefault>
            </View>
          </View>
        </View>
      </S.Container>
    </RContainer>
  );
}