import React,{useState,useEffect} from 'react';

import { S } from "../../styles/styles";

import RInput from "../../components/RInput";
import RButton from "../../components/RButton";
import RContainer from '../../components/RContainer';
import RImagePicker from '../../components/RImagePicker';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import {styles,svgApagarDados} from "./styles";
import { View, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function NewSearch(props: any) {
  const [visible,setVisible]=useState(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [inputDate, setInputDate] = useState('')

  useEffect(() => {    
    const newDate = new Date(date.toDateString())
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;    
    setInputDate(formattedDate)
  }, [date]);  
  
  const handleDeleteButtonPress = () => {
    setVisible(true);
  }
  
  return (
    <RContainer>
      <S.Container>
        <S.Container customWidth="653px" customPaddingVertical="30px">
          <S.Container style={{gap: 15}}>
            <RInput label="Nome" placeholder="Digite o nome da pesquisa"/>
            <RInput 
              label="Data" 
              placeholder="Digite a data"
              value={inputDate}
              icon='calendar-month'
              iconPosition="right"
              onPress={() => setOpen(true)}
              editable={false}
            />
            <DatePicker
              modal
              locale={"pt-BR"}
              open={open}
              date={date}
              mode={"date"}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
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
