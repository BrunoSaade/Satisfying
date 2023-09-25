import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { S } from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, svgModificar, svgColetarDados, svgRelatio } from "./styles";


export default function Sections(props: any) {

  function handleToPage(page: string) {
    props.navigation.push(page)
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.column} onPress={() => handleToPage('Modificar Pesquisa')}>
        <SvgXml xml={svgModificar} />
        <S.TextDefault style={styles.text}>Modificar</S.TextDefault>
      </TouchableOpacity>
      <TouchableOpacity style={styles.column} onPress={() => handleToPage('Coleta')}>
        <SvgXml xml={svgColetarDados} />
        <S.TextDefault style={styles.text}>Coletar Dados</S.TextDefault>
      </TouchableOpacity>
      <TouchableOpacity style={styles.column} onPress={() => handleToPage('Relatório')}>
        <SvgXml xml={svgRelatio} />
        <S.TextDefault style={styles.text}>Relatórios</S.TextDefault>
      </TouchableOpacity>
    </View>
  );
};


