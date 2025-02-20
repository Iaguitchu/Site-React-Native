import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../agenda/styles";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../utils/localeCalendarConfig";
import { useRoute } from "@react-navigation/native";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

type Parametros = {
  op: string;
  serie: string;
  color: string;
  moldes2:{[key: string]: [string, string]};
};


export function Agenda() {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [selectedMold, setSelectedMold] = useState<{ id: string; color: string } | null>(null);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [savedIntervals, setSavedIntervals] = useState<{ start: string; end: string; color: string }[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const route = useRoute();
  const { op, serie, color, moldes2 } = route.params as Parametros;

  console.log(op, serie, color, moldes2[1])
 

  const moldes = [
    { id: "01", desc: `${moldes2[0][0]}`, color: "#FF5733", dataInicio: '2025-02-17', dataFim: '2025-02-19'},
    { id: "02", desc: `${moldes2[1][0]}`, color: "#33FF57", dataInicio: null, dataFim: null}, 
    { id: "03", desc: `${moldes2[2][0]}`, color: "#3357FF", dataInicio: null, dataFim: null},
    { id: "04", desc: `${moldes2[3][0]}`, color: "red",  dataInicio: null, dataFim: null},
  ];

  const onDayPress = (day: DateData) => {
    if (!selectedMold) {
      alert("Selecione um molde antes de escolher as datas!");
      return;
    }
  
    if (selectedDays.includes(day.dateString)) {
      alert("Esse dia já está selecionado para outro molde!");
      return;
    }
  
    if (!startDate) {
      setStartDate(day.dateString);
    }

    else if (!endDate) {
      if (day.dateString < startDate) {
        setStartDate(day.dateString);
        return;
      } 
      else if (day.dateString === startDate) {
        return;
      }
      
      let teste1 = new Date(startDate)
      let teste2 = new Date(day.dateString)

      while(teste1 <= teste2){
        let dateStr = teste1.toISOString().split("T")[0];
        if(selectedDays.includes(dateStr)){
          alert(`Dia ${dateStr} já cadastrado`);
          setStartDate(null)
          return;
        }
        teste1.setDate(teste1.getDate() + 1);
      }

      setEndDate(day.dateString);
      saveInterval(startDate, day.dateString, selectedMold.color);
    } 
    else if (day.dateString === startDate) {
      setEndDate(null);
    }
    else {
      setStartDate(day.dateString);
      setEndDate(null);
    }
  };
  
  const saveInterval = (start: string, end: string, color: string) => {
    const newInterval = { start, end, color };
    const updatedIntervals = [...savedIntervals, newInterval];
    setSavedIntervals(updatedIntervals);
    atualizaCalendario(updatedIntervals);
  };

  const atualizaCalendario = (intervals: { start: string; end: string; color: string }[]) => {
    let newMarkedDates: { [key: string]: any } = { ...markedDates };
    let allSelectedDays = [...selectedDays];

    intervals.forEach(({ start, end, color }) => {
      let currentDate = new Date(start);
      let finalDate = new Date(end);

      while (currentDate <= finalDate) {
        let dateStr = currentDate.toISOString().split("T")[0];
        newMarkedDates[dateStr] = {
          startinDay: true,
          color: color,
          textColor: "white",
        };

        allSelectedDays.push(dateStr);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      newMarkedDates[start] = {
        startingDay: true,
        color: color,
        textColor: "white",
      };

      newMarkedDates[end] = {
        endingDay: true,
        color: color,
        textColor: "white",
      };
    });

    setMarkedDates(newMarkedDates);
    setSelectedDays(allSelectedDays);
  };

  useEffect(() => {
    moldes.forEach((datas) => { 
      if (datas.dataInicio && datas.dataFim) {
        atualizaCalendario([{ start: datas.dataInicio, end: datas.dataFim, color: datas.color }]);
      }
    });
  }, []); // [] só roda quando a pagina carrega

  // console.log(markedDates)
  
  return (
    
    <View style={styles.container}>

      <View style={styles.moldes} >
      {moldes.map((molde) => (
        <Text 
        key={molde.id} style={{ color: molde.color}} onPress={() => setSelectedMold(molde)}> {molde.desc} </Text> 
      ))}
      </View>
      <Calendar
        style={styles.calendar}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
        minDate={new Date().toDateString()}
        theme={{
          textMonthFontSize: 18,
          monthTextColor: "#E8E8E8",
          todayTextColor: "#F06543",
          selectedDayBackgroundColor: "#F06543",
          selectedDayTextColor: "#E8E8E8",
          arrowColor: "#E8E8E8",
          calendarBackground: "transparent",
          textDayStyle: { color: "#E8E8E8" },
          textDisabledColor: "#717171",
        }}
      />

      <Text style={styles.selected}>
        {startDate && !endDate ? `Início: ${startDate}` : ""}
        {startDate && endDate ? `Início: ${startDate}  |  Fim: ${endDate}` : ""}
      </Text>
      
    </View>
  );
}

export default Agenda;
