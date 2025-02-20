import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    
    maquinas:{
        marginTop: 200,
        marginLeft: 130,
      },

      botao: {
        marginTop: 20,
        backgroundColor: "#12a41c", // Cor azul
        paddingVertical: 12,
        width: 180,
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
