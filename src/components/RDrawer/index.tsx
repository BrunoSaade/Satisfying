import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { S } from "../../styles/styles";
import { styles } from "./styles";

export default function RDrawer(props: any) {

  function handleLogout() {
    props.navigation.popToTop()
  }

  return (
    <DrawerContentScrollView {...props}>

      <S.TextDefault style={styles.user_text}> Satisfying </S.TextDefault>
      <View style={styles.view} />
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handleLogout} labelStyle={{ color: 'white', fontSize: 20, fontFamily: 'AveriaLibre-Regular' }} />

    </DrawerContentScrollView>
  )
}