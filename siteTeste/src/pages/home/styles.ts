import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        padding: 10,
        backgroundColor:"#181818"
  },
  calendar:{
    backgroundColor:"transparent",
    marginTop:20,
  },
  selected:{
    color:"#fff",
    marginTop:42,
  },
  label:{
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
  }
});
