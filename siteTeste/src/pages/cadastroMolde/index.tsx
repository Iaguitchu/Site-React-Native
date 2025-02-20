import React from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavegacaoTelas, Maquina } from "../../types"; // Importa os tipos
import { styles } from "../cadastroMolde/styles";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";


type RouteParams = RouteProp<NavegacaoTelas, "CadastrarMolde">;

export function CadastrarMolde() {
  const navigation = useNavigation();
  const route = useRoute<RouteParams>();
  const { maquinas } = route.params;

  const listaMaquinas: Maquina[] = maquinas.map((maquina) => ({
    id: maquina.id,
    op: maquina.op,
    serie: maquina.serie,
    color: maquina.color,
    moldes2: maquina.moldes2.map((molde) => [...molde] as [string, string]), // Mantém o formato original
  }));
  

  listaMaquinas.forEach((maquina) => {
    console.log(`Máquina ${maquina.op} - ${maquina.serie}:`);
    maquina.moldes2.forEach((molde, index) => {
      console.log(`  Molde ${index + 1}: ${molde[0]}, Cor: ${molde[1]}`);
    });
  });
  


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


