import React,{useState} from 'react';

import { S } from "../../styles/styles";

import { theme } from '../../theme/styles';
import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import {styles,svgApagarDados} from "./styles";
import { View,Modal, Image, Text, StyleSheet } from 'react-native';

export default function NewSearch(props: any) {

  const [visible,setVisible]=useState(false);

  const handleDeleteButtonPress = () => {
    setVisible(true);
  }

  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput label="Nome" placeholder="Digite o nome da pesquisa"/>
            <RInput label="Data" placeholder="Digite a data"/>
            <RImagePicker />
              <View style={styles.row}>
                <RButton style={styles.column_save} label="SALVAR" color="success" onPress={() => ''}/>
                <TouchableOpacity onPress={() => handleDeleteButtonPress()} style={styles.column_delete}>
                  <SvgXml xml={svgApagarDados} />
                  <S.TextDefault style={styles.text}>Apagar</S.TextDefault>
                </TouchableOpacity>
              </View >
              <Modal animationType='fade' transparent={true} visible={visible}>
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width: 506,height: 253 }}>
                    <RContainer >
                      <S.Container >
                        <S.Container>
                            <S.TextDefault style={styles.text_modal} > Tem certeza que deseja apagar essa pesquisa? </S.TextDefault>
                            <View style= {styles.row}>
                              <RButton label='SIM' color='error' onPress={() => setVisible(false)} style={styles.column_modal_confirm}/>
                              <RButton label='CANCELAR' color="blue" onPress={() => setVisible(false)} style={styles.column_modal_cancel} />
                          </View>
                        </S.Container>
                      </S.Container>
                    </RContainer>
                  </View>
                </View>
              </Modal>
          </S.Container>
        </S.Container>
      </S.Container>
    </RContainer>
  );
};
