import { StyleSheet } from 'react-native';
import { theme } from '../../theme/styles';

export const styles = StyleSheet.create({
    view_logo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      },
      view_logo__text: {
        fontSize: 40,
        color: 'white',
      },
      row:{
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
      },
      column_save: {  
        width: '90%'
      },
      column_delete: { 
        alignItems: 'center',
        marginLeft: 20
       },
       modal:{
       },

      column_modal_confirm: { 
        width: 216,
        height:71,
        marginLeft: 24,
        marginTop: 30
      },
      column_modal_cancel: { 
        width: 216,
        height:71,
        marginLeft: 20,
        marginTop: 30
      },
      text_modal: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        width:403,
        height:73,
        marginLeft: 44,
        marginTop: 29
      }
})

export const svgApagarDados = `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.87496 30C4.18746 30 3.59892 29.7552 3.10933 29.2656C2.61975 28.776 2.37496 28.1875 2.37496 27.5V3.75H0.666626V1.25H8.49996V0H19.5V1.25H27.3333V3.75H25.625V27.5C25.625 28.1667 25.375 28.75 24.875 29.25C24.375 29.75 23.7916 30 23.125 30H4.87496ZM23.125 3.75H4.87496V27.5H23.125V3.75ZM9.29163 23.9167H11.7916V7.29167H9.29163V23.9167ZM16.2083 23.9167H18.7083V7.29167H16.2083V23.9167Z" fill="white"/>
</svg>`