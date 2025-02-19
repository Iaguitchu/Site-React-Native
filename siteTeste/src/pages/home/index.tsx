import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../home/styles";

export function Maquina() {
  const navigation = useNavigation(); // Adiciona a navegação

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
      <Button title="Cadastrar Molde" onPress={handleNavigate} />
    </View>
  );
}

export default Maquina;



