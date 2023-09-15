import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";

export default function RDrawer(props: any) {

  function handleLogout() {
    props.navigation.popToTop()
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handleLogout}/>
    </DrawerContentScrollView>
  )
}