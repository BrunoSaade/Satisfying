import React from "react";
import Login from "./pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./pages/Drawer";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import NewSearch from "./pages/NewSearch";
import SearchActions from "./pages/SearchActions";
import ModifySearch from "./pages/ModifySearch";
import Collect from "./pages/Collect";
import Report from "./pages/Report";
import { Provider } from "react-redux";
import { store } from "./service/redux/store";

const Stack = createStackNavigator()

const styles = {
  headerStyle: { backgroundColor: '#2B1D62', elevation: 0 },
  headerTintColor: 'white', headerTitleStyle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={styles}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
          <Stack.Screen name="Nova Conta" component={Register} />
          <Stack.Screen name="Recuperação de senha" component={RecoverPassword} />
          <Stack.Screen name="Nova Pesquisa" component={NewSearch} />
          <Stack.Screen
            name="SearchActions"
            component={SearchActions}
            initialParams={{ title: "SearchActions" }}
          />
          <Stack.Screen name="Modificar Pesquisa" component={ModifySearch} />
          <Stack.Screen name="Coleta" component={Collect} options={{ headerShown: false }} />
          <Stack.Screen name="Relatório" component={Report} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}