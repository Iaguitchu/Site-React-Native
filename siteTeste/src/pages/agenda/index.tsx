import React, { useState, useEffect } from "react";
import { View, Text, Button, Modal, Image, TouchableOpacity } from "react-native";
import { styles } from "../agenda/styles";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../utils/localeCalendarConfig";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

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
  // const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const route = useRoute();
  const { op, serie, color, moldes2 } = route.params as Parametros;

  const [visivel, setVisivel] = useState(false)
  const [textoModal, setTextoModal] = useState('')

  // console.log(op, serie, color, moldes2[1])


  const moldes = [
    { id: "01", desc: `${moldes2[0][0]}`, color: "#FF5733", dataInicio: '2025-02-17', dataFim: '2025-02-19'},
    { id: "02", desc: `${moldes2[1][0]}`, color: "#33FF57", dataInicio: null, dataFim: null}, 
    { id: "03", desc: `${moldes2[2][0]}`, color: "#3357FF", dataInicio: null, dataFim: null},
    { id: "04", desc: `${moldes2[3][0]}`, color: "red",  dataInicio: null, dataFim: null},
    // { id: "04", desc: `${moldes2[3][0]}`, color: "red",  dataInicio: null, dataFim: null},
    // { id: "04", desc: `${moldes2[3][0]}`, color: "red",  dataInicio: null, dataFim: null},
    // { id: "04", desc: `${moldes2[3][0]}`, color: "red",  dataInicio: null, dataFim: null},
  ];

 

  const onDayPress = (day: DateData) => {
    if (!selectedMold) {
      alert("Selecione um molde antes de escolher as datas!");
      return;
    }
  
    // if (selectedDays.includes(day.dateString)) {
    //   alert("Esse dia já está selecionado para outro molde!");
    //   console.log("estou aqui")
    //   return;
    // }
  
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

      // while(teste1 <= teste2){
      //   let dateStr = teste1.toISOString().split("T")[0];
      //   if(selectedDays.includes(dateStr)){
      //     alert(`Dia ${dateStr} já cadastrado`);
      //     setStartDate(null)
      //     return;
      //   }
      //   teste1.setDate(teste1.getDate() + 1);
      // }

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
    // Filtra moldes com dataInicio e transforma no formato correto
    const teste = moldes
      .filter(molde => molde.dataInicio !== null) 
      .map(molde => ({ start: molde.dataInicio, end: molde.dataFim, color: molde.color }));

    const newInterval = { start, end, color };
    const combinedIntervals = [...savedIntervals, newInterval];

    // Filtra os moldes que já existem para evitar repetição
    const uniqueMoldes = teste.filter(t => 
      !combinedIntervals.some(interval => 
        interval.start === t.start && interval.end === t.end && interval.color === t.color
      )
    );

    // Cria um novo array garantindo que não há duplicação
    const updatedIntervals = [...combinedIntervals, ...uniqueMoldes];

    setSavedIntervals(updatedIntervals);
    atualizaCalendario(updatedIntervals);
};


  console.log(savedIntervals)
  const atualizaCalendario = (intervals: { start: string; end: string; color: string }[]) => {
    let newMarkedDates: { [key: string]: { periods: { color: string; startingDay: boolean; endingDay: boolean }[] } } = {}; // Mantém os períodos anteriores corretamente
    
    
    intervals.forEach(({ start, end, color }) => {
      let currentDate = new Date(start);
      let finalDate = new Date(end);
  
      while (currentDate <= finalDate) {
        let dateStr = currentDate.toISOString().split("T")[0];
  
        // Se a data já existe, preservamos os períodos anteriores
        if (!newMarkedDates[dateStr]) {
          newMarkedDates[dateStr] = { periods: [] };
        }
          newMarkedDates[dateStr].periods.push({
            color: color,
            startingDay: dateStr === start,
            endingDay: dateStr === end,
          });
        // }
  
        // selectedDays.push(dateStr);
       
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });
  
    setMarkedDates(newMarkedDates);
    // console.log(newMarkedDates)
    // setSelectedDays([...new Set(selectedDays)]); // Remove duplicatas
  };
  
  

  useEffect(() => {
    // Filtra moldes que já têm dataInicio e dataFim
    const moldesIniciais = moldes
      .filter(molde => molde.dataInicio && molde.dataFim)
      .map(molde => ({
        start: molde.dataInicio!,
        end: molde.dataFim!,
        color: molde.color
      }));
  
    // Atualiza o estado `savedIntervals`
    setSavedIntervals(prev => [...prev, ...moldesIniciais]);
  
    // Atualiza o calendário com esses moldes
    atualizaCalendario(moldesIniciais);
  }, []); // Executa apenas ao carregar a tela
  
  return (

    
    
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.grupoMoldes}>
        <View style={styles.moldes} >
        {moldes.map((molde) => (
          <Text
          key={molde.id} style={{ color: molde.color, padding: 5}} onPress={() => setSelectedMold(molde)}> {molde.desc} </Text> 
        ))}
        </View>

        <Text style={styles.moldesCadastrados} onPress={() => {setVisivel(true); setTextoModal('teste')}}>ola mundo</Text>
        
        <Modal  visible={visivel}> 
        <View>
            <Text style ={{marginTop:100}} onPress={() => {setVisivel(false)}}> {textoModal} </Text>
        </View>  
          </Modal>
        
        
      </View>

      
      <Calendar
  style={styles.calendar}
  markingType="multi-period"
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
        {startDate && !endDate ? `Iníci o: ${startDate}` : ""}
        {startDate && endDate ? `Início: ${startDate}  |  Fim: ${endDate}` : ""}
      </Text>

  
  
  
  <View style={styles.moldes}>
  {savedIntervals.map((molde) => (
    <TouchableOpacity
      key={molde.start}
      style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
      onPress={() => { setVisivel(true); setTextoModal(`${molde.start} - ${molde.end}`); }}
    >
      <Text style={{ color: molde.color, fontSize: 16 }}>
        {`${molde.start} - ${molde.end}`}
      </Text>

      <Image
         source={require("../../imagens/editar.png")}
        style={{ width: 20, height: 20, marginLeft: 10 }}
      />
    </TouchableOpacity>
  ))}
</View>
      
    </View>
    </ScrollView>
  );
}

export default Agenda; 