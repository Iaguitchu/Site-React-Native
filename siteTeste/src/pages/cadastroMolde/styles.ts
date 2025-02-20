import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    overflow: 'hidden'
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: 'white'
  },
  botao: {
    marginTop:150,
    backgroundColor: "#4fff02", // Cor azul
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8, // Borda arredondada
    elevation: 3, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: "black", // Cor branca
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  input:{
    backgroundColor: '#424242',
    width: 200,
    height: 50,
    borderRadius: 8,
    padding: 10,
    color: 'white',
    marginTop: 20

  }
});
