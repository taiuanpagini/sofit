import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Platform } from 'react-native';
import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );
  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="rgba(0,0,0,0.6)" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={(e, d) => {
              if (Platform.OS === 'ios') {
                onChange(d);
              } else {
                onChange(d);
              }
            }}
            maximumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="datetime"
          />
        </Picker>
      )}
    </Container>
  );
}
