import React from 'react';
import { TextMask } from 'react-native-masked-text';

export default function MaskText({ value }) {
  return (
    <TextMask
      value={value}
      type="money"
      options={{
        precision: 0,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
        suffixUnit: '',
      }}
    />
  );
}
