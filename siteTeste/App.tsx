import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Maquina from "./src/pages/home";
import CadastrarMolde from "./src/pages/cadastroMolde";
import { NavegacaoTelas } from "./src/types";
import { StatusBar } from "react-native"; // Importando StatusBar

const Stack = createStackNavigator<NavegacaoTelas>();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    text: "#ffffff",
  },
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#121212" />
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="Maquina"
          screenOptions={{
            headerStyle: { backgroundColor: "#121212" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Maquina" component={Maquina} />
          <Stack.Screen name="CadastrarMolde" component={CadastrarMolde} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
