import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

const moldes = [
  { id: "01", desc: "Molde uva 20cm", color: "#FF5733" },
  { id: "02", desc: "Molde Tapoer", color: "#33FF57" },
  { id: "03", desc: "Bandeja de ovo", color: "#3357FF" },
];


 
export default function (){
    return ( 
    <View> 
            <FlatList  
                data = {moldes}
                keyExtractor={item => item.id}
                renderItem={({item})=> 
                <View style={[styles.view, { backgroundColor: item.color }]}>
                     <Text style={styles.texto}>Descrição {item.desc} - Valor: {item.id}</Text>
                </View>}
            />
    </View>
    )
}