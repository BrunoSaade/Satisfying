import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import RDrawer from "../../components/RDrawer";
import { styles, navigator } from "./styles";

const DrawerNavigator = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator 
      drawerContent={(props) => <RDrawer {...props} />} 
      initialRouteName="Home" 
      screenOptions={navigator}>
      <DrawerNavigator.Screen name="Pesquisa" component={Home} options={{ headerTitle: '' }} />
    </DrawerNavigator.Navigator>
  );
}