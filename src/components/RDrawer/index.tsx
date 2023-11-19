import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import { S } from "../../styles/styles";
import { styles } from "./styles";
import { db, auth } from '../../service/firebase/firebase';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function RDrawer(props: any) {

  function handleLogout() {
    props.navigation.popToTop()
  }

  return (
    <DrawerContentScrollView {...props} style={styles.r_drawer__container}>
      <View>
        <S.TextDefault style={styles.user_text}> {auth.currentUser?.email} </S.TextDefault>
      </View>
      <View style={styles.view} />
      <View style={styles.r_drawer__itens}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sair"
          onPress={handleLogout}
          labelStyle={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'AveriaLibre-Regular',
          }}
          icon={() => (
            <Icon name="logout" size={30} color="white" />
          )}
        />
      </View>
    </DrawerContentScrollView>
  )
}