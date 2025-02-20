import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavegacaoTelas } from "../../types"; // Importando os tipos
import { styles } from "../home/styles";

type NavigationProps = StackNavigationProp<NavegacaoTelas, "Maquina">;

export function Maquina() {
  const navigation = useNavigation<NavigationProps>(); // Aplica a tipagem

  const handleNavigate = () => {
    navigation.navigate("CadastrarMolde"); // Navega para outra página
  };

  const maquinas = [
    { id: "01", op: "111", serie: "1111", color: "green" },
    { id: "02", op: "222", serie: "2222", color: "red" },
    { id: "03", op: "333", serie: "3333", color: "yellow" },
    { id: "04", op: "444", serie: "4444", color: "blue" },
  ];

  return (
    <View style={styles.maquinas}>
      {maquinas.map((maquina) => (
        <Text key={maquina.id} style={{ color: maquina.color, fontSize: 40 }}>
          {`${maquina.op} - ${maquina.id}`}
        </Text>
      ))}

      {/* Botão que leva para outra página */}
      <TouchableOpacity style={styles.botao} onPress={handleNavigate}>
        <Text style={styles.textoBotao}>Cadastro Molde</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Maquina;
