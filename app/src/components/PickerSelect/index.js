import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { StyleSheet } from 'react-native';
import { Container } from './styles';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Exo',
    fontSize: 14,
    color: '#444',
  },
});

export default function PickerSelect({ onValueChange }) {
  return (
    <Container>
      <RNPickerSelect
        onValueChange={(val) => onValueChange(val)}
        items={[
          { label: 'Abastecimento', value: 'Abastecimento', key: '1' },
          { label: 'Alimentação', value: 'Alimentação', key: '2' },
          { label: 'Hotel', value: 'Hotel', key: '3' },
          { label: 'Imprevistos', value: 'Imprevistos', key: '4' },
        ]}
        placeholder={{
          label: 'Selecione Tipo de despesa',
          value: null,
        }}
        textInputProps={styles.textStyle}
        Icon={() => {
          return <Icon name="keyboard-arrow-down" size={24} color="gray" />;
        }}
        doneText="OK"
      />
    </Container>
  );
}
