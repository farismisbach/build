import { View, Text, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { Calendar} from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., "Monday"
  };

  const onDayPress = (day) => {
    // Store the selected date in the state
    setSelectedDate(day.dateString);
  };

  return (
    <SafeAreaView className='flex-1 p-10 items-center bg-[#FFFFFF]'>
      <Text className='font-poppins-bold text-2xl my-2.5'>Calendar</Text>
      <Calendar
        // Set the selected date (optional)
        current={selectedDate || new Date().toISOString().split('T')[0]} 
        onDayPress={onDayPress} // Event handler when a day is pressed
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'black', selectedTextColor: 'white' },
        }}
        theme={{
          selectedDayBackgroundColor: 'black',
          todayTextColor: 'white',
          todayBackgroundColor: 'blue',
          arrowColor: 'black',
        }}
      />
      {selectedDate && (
        <Text className='font-poppins-regular text-lg mt-5 text-[#000000]'>
          {getDayName(selectedDate)}, {selectedDate}
        </Text>
      )}
    </SafeAreaView>
  );
}

export default CalendarScreen