import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavegacaoTelas } from "../../types"; // Importando os tipos
import { styles } from "../home/styles";

type NavigationProps = StackNavigationProp<NavegacaoTelas, "Maquina">;

export function Maquina() {
  const navigation = useNavigation<NavigationProps>(); // Aplica a tipagem

  const handleNavigateToCadastroMolde = () => {
    navigation.navigate("CadastrarMolde"); // Navega para a tela de Cadastro de Molde
  };

  const handleNavigateToAgenda = (op: string, serie: string, color: string, moldes2: [string, string][]) => {
    navigation.navigate("Agenda", { op, serie, color, moldes2 }); // Navega para a Agenda passando os dados
  };

  const maquinas = [
    { id: "01", op: "111", serie: "1111", color: "green", moldes2: [['1111', 'red'] as [string, string], ['teste2', 'blue'] as [string, string], ['teste3', 'green'] as [string, string], ['teste4', 'orange'] as [string, string]] },
    { id: "02", op: "222", serie: "2222", color: "red", moldes2: [['2222', 'red'] as [string, string], ['teste2', 'blue'] as [string, string], ['teste3', 'green'] as [string, string], ['teste4', 'orange'] as [string, string]] },
    { id: "03", op: "333", serie: "3333", color: "yellow", moldes2: [['3333', 'red'] as [string, string], ['teste2', 'blue'] as [string, string], ['teste3', 'green'] as [string, string], ['teste4', 'orange'] as [string, string]] },
    { id: "04", op: "444", serie: "4444", color: "blue", moldes2: [['4444', 'red'] as [string, string], ['teste2', 'blue'] as [string, string], ['teste3', 'green'] as [string, string], ['teste4', 'orange'] as [string, string]] },
  ];

  return (
    <View style={styles.maquinas}>
      {maquinas.map((maquina) => (
        <TouchableOpacity
          key={maquina.id}
          onPress={() => handleNavigateToAgenda(maquina.op, maquina.serie, maquina.color, maquina.moldes2)}
        >
          <Text style={{ color: maquina.color, fontSize: 40 }}>
            {`${maquina.op} - ${maquina.serie}`}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Botão que leva para o Cadastro de Molde */}
      <TouchableOpacity style={styles.botao} onPress={handleNavigateToCadastroMolde}>
        <Text style={styles.textoBotao}>Cadastro Molde</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Maquina;
