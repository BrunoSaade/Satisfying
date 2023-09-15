import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import RDrawer from "../../components/RDrawer";

const DrawerNavigator = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator 
      drawerContent={(props) => <RDrawer {...props} />}>
      <DrawerNavigator.Screen name="Pesquisas" component={Home}/>
    </DrawerNavigator.Navigator>
  );
}