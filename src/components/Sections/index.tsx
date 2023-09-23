import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { S } from "../../styles/styles";
import { styles, svgModificar, svgColetarDados, svgRelatio } from "./styles";

export default function Sections(props: any) {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <SvgXml xml={svgModificar} />
        <S.TextDefault style={styles.text}>Modificar</S.TextDefault>
      </View>
      <View style={styles.column}>
        <SvgXml xml={svgColetarDados} />
        <S.TextDefault style={styles.text}>Coletar Dados</S.TextDefault>
      </View>
      <View style={styles.column}>
        <SvgXml xml={svgRelatio} />
        <S.TextDefault style={styles.text}>Relatórios</S.TextDefault>
      </View>
    </View>
  );
};


