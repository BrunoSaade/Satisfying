import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function RDrawer(props: any) {

  function handleLogout() {
    props.navigation.popToTop()
  }

  return (
    <DrawerContentScrollView {...props} style={styles.r_drawer}>
      <DrawerItemList {...props} />
      <DrawerItem labelStyle={styles.r_drawer__logout} label="Sair" onPress={handleLogout}/>
    </DrawerContentScrollView>
  )
}