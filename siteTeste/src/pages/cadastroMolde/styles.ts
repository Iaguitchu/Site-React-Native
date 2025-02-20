import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#007bff", // Cor azul
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8, // Borda arredondada
    elevation: 3, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: "#fff", // Cor branca
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
