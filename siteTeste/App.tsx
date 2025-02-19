import Agenda from "./src/pages/agenda/index";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Maquina from "./src/pages/home";
import CadastrarMolde from "./src/pages/cadastroMolde";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Maquina">
        <Stack.Screen name="Maquina" component={Maquina} />
        <Stack.Screen name="CadastrarMolde" component={CadastrarMolde} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
