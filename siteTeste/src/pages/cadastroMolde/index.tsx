import React from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavegacaoTelas } from "../../types"; // Importa os tipos
import { styles } from "../cadastroMolde/styles";

type NavigationProps = StackNavigationProp<NavegacaoTelas, "CadastrarMolde">;

export function CadastrarMolde() {
  const navigation = useNavigation(); // Para voltar para a tela anterior



  return (
    // Colocando a opção de ciclar fora do input 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Novo Molde</Text>
    
      <TextInput style={styles.input} placeholder="Nome do Molde" placeholderTextColor="#BDBDBD" />

      <TextInput keyboardType="numeric" returnKeyType="done" style={styles.input} placeholder="Número de Cavidade" placeholderTextColor="#BDBDBD" />
      
      <TextInput keyboardType="numeric" returnKeyType="done" style={styles.input} placeholder="Kilos Teoricos" placeholderTextColor="#BDBDBD" />

      <TextInput keyboardType="numeric"  returnKeyType="done" style={styles.input} placeholder="Quantidade de ciclo" placeholderTextColor="#BDBDBD" />

      {/* Botão estilizado */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default CadastrarMolde;