import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../agenda/styles";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../utils/localeCalendarConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export function Home() {
  const [startDate, setStartDate] = useState<string | null>(null);''
  const [endDate, setEndDate] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});

  const onDayPress = (day: DateData) => {
    if (!startDate) {
      // Define a primeira data
      setStartDate(day.dateString);
      setMarkedDates({
        [day.dateString]: {
          startingDay: true,
          color: "#F06543",
          textColor: "white",
        },
      });
    } else if (!endDate) {
      // Define a data final e preenche o intervalo
      setEndDate(day.dateString);
      let newMarkedDates: { [key: string]: any } = { ...markedDates };

      let currentDate = new Date(startDate);
      let finalDate = new Date(day.dateString);

      while (currentDate <= finalDate) {
        let dateStr = currentDate.toISOString().split("T")[0];
        newMarkedDates[dateStr] = { color: "#F06543", textColor: "white" };
        currentDate.setDate(currentDate.getDate() + 1);
      }

      newMarkedDates[startDate] = {
        startingDay: true,
        color: "#F06543",
        textColor: "white",
      };
      newMarkedDates[day.dateString] = {
        endingDay: true,
        color: "#F06543",
        textColor: "white",
      };

      console.log(newMarkedDates);
      setMarkedDates(newMarkedDates);
    } else {
      // Reseta tudo e escolhe nova data inicial
      setStartDate(day.dateString);
      setEndDate(null);
      setMarkedDates({
        [day.dateString]: {
          startingDay: true,
          color: "#F06543",
          textColor: "white",
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selected}>
        {startDate && !endDate ? `Início: ${startDate}` : ""}
        {startDate && endDate ? `Início: ${startDate}  |  Fim: ${endDate}` : ""}
      </Text>

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
    </View>
  );
}

export default Home;
