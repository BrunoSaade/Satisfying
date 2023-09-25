import React from "react";
import Login from "./pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Drawer from "./pages/Drawer";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import NewResearch from "./pages/NewResarch";
import ResearchActions from "./pages/ResearchActions";

import { getSelectedCardResearch } from "./store/getters"

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name="Nova Conta" component={Register} />
        <Stack.Screen name="Recuperação de senha" component={RecoverPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nova Pesquisa" component={NewResearch} />
        <Stack.Screen name="Carnaval" component={ResearchActions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}