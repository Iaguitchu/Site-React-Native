import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../cadastroMolde/styles";

export function CadastrarMolde() {
  const navigation = useNavigation(); // Para voltar para a tela anterior

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Novo Molde</Text>

      {/* Botão estilizado */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CadastrarMolde;
