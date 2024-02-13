import React, { Fragment, useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import IconAnt from 'react-native-vector-icons/AntDesign'

LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt'

export default function CalendarFC(){
    const [markedDates, setMarkedDates] = useState<{ [date: string]: { selected: boolean; marked: boolean; selectedColor?: string } }>({});
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'red'};
    const workout = {key: 'workout', color: 'green'};
    const test = {
        container: {
          backgroundColor: 'green'
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }

    }

    const onDayPress = (day: any) => {
      setMarkedDates(
        prevState =>
        {
          return {
            ...prevState,
            [day.dateString]: {
              dots: [vacation, massage, workout],
              selected: true,
              marked: true,
              selectedColor: '#735BF2',
              customStyles: {
                container: {
                  backgroundColor: 'green',
                  borderRadius: 10,
                  width: 30,
                  height: 30,
                },
                text: {
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: 15,
                }
              }
            }
          }
        }
      )
    };

  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().split('T')[0]);
  const customHeaderProps: any = useRef();
  const splitDate = currentMonth.split('-');
  // @ts-ignore
  const monthNamesCurrent = LocaleConfig.locales['pt'].monthNames[splitDate[1] - 1]
  const yearCurrent = splitDate[0]

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().split('T')[0]);
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const renderCalendarWithCustomHeader = () => {
    const CustomHeader = React.forwardRef((props, ref) => {
      customHeaderProps.current = props;

      return (
        // @ts-expect-error
        <View ref={ref} {...props} style={styles.header}>
            <TouchableOpacity
              onPress={movePrevious}
              style={{
                width: 40,
                height: 40,
                borderStyle: 'solid',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 10,
                borderColor: '#CED3DE',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconAnt name={"left"} size={16} color="#000" />
            </TouchableOpacity>
          <View
          style={
            {
              justifyContent: 'center',
              alignItems: 'center',
            }
          }
          >
            <Text style={
              {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#222B45',
              }
            }>{monthNamesCurrent}</Text>
            <Text
            style={
              {
                fontSize: 12,
                fontWeight: 'bold',
                color: '#8F9BB3',
              }
            }
            >{yearCurrent}</Text>
          </View>
            <TouchableOpacity
              onPress={moveNext}
              style={{
                width: 40,
                height: 40,
                borderStyle: 'solid',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 10,
                borderColor: '#CED3DE',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconAnt   name={"right"} size={16} color="#000000" />
            </TouchableOpacity>
        </View>
      );
    });

    return (
      <Fragment>
        <Calendar
          style={[styles.calendar]}
          markingType={'custom'}
          customHeader={CustomHeader}
          markedDates={markedDates}
          onDayPress={onDayPress}
        />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {renderCalendarWithCustomHeader()}
    </Fragment>
  )
};

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  calendar: {
    borderWidth: 0,
    borderColor: '#cccccc',
    borderRadius: 0,
    marginBottom: 0,
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
    padding: 10,
    flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',
  }
});
