import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";

const DrawerNavigator = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Pesquisas" component={Home}/>
    </DrawerNavigator.Navigator>
  );
}