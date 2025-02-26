import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        padding: 10,
        backgroundColor:"#181818",
        overflow: "scroll" 
  },
  calendar:{
    backgroundColor:"transparent",
  },
  selected:{
    color:"#fff",
    marginTop:42,
  },
  label:{
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
  },
  moldes:{

    marginTop: 20,
    flex: 1,
    // backgroundColor: 'red'
    //flexDirection: 'row'
    // justifyContent: "center",
  },
  grupoMoldes:{    
  flex: 0,
  flexDirection: 'row',
  height: 150,
  // backgroundColor: "red"
  },
  moldesCadastrados:{
    color: 'white',
    flex: 1,
    marginTop: 60,
  },
  modal:{
    backgroundColor: "#181818",
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  caracterModal:{
    color: 'white'
  }
});
