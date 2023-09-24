import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { S } from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, face1, face2, face3, face4, face5 } from "./styles";


export default function Rating(props: any) {

  const handleButtonPress = () => {
    props.onClick();
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => handleButtonPress()} style={styles.column}>
        <SvgXml xml={face1} />
        <S.TextDefault style={styles.text}>Péssimo</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress()} style={styles.column}>
        <SvgXml xml={face2} />
        <S.TextDefault style={styles.text}>Ruim</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress()} style={styles.column}>
        <SvgXml xml={face3} />
        <S.TextDefault style={styles.text}>Neutro</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress()} style={styles.column}>
        <SvgXml xml={face4} />
        <S.TextDefault style={styles.text}>Bom</S.TextDefault>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress()} style={styles.column}>
        <SvgXml xml={face5} />
        <S.TextDefault style={styles.text}>Excelente</S.TextDefault>
      </TouchableOpacity>
    </View >
  );
};