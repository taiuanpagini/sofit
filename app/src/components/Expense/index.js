import React from 'react';
import { ActivityIndicator } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import {
  Container,
  DadosExpense,
  Date,
  ContainerDado,
  TitleDado,
  Title,
  Value,
  Type,
  CancelButton,
  ContainerItens,
  TextButton,
} from './styles';

function Expense({ loading, onCancel, expense }) {
  const dateFormatted = format(
    parseISO(expense.date),
    "dd 'de' MMMM 'de' yyyy",
    { locale: pt }
  );
  return (
    <Container>
      <DadosExpense loading={loading}>
        <Date>{dateFormatted}</Date>
        <ContainerDado>
          <TitleDado>Despesa: </TitleDado>
          <Title>{expense.item}</Title>
        </ContainerDado>
        <ContainerDado>
          <TitleDado>Valor: </TitleDado>
          <Value value={expense.value} />
        </ContainerDado>
        <ContainerDado>
          <TitleDado>Tipo: </TitleDado>
          <Type>{expense.type}</Type>
        </ContainerDado>
      </DadosExpense>

      <ContainerItens>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <CancelButton onPress={onCancel}>
            <Icon size={15} name="close" color="#FFF" />
            <TextButton>Cancelar</TextButton>
          </CancelButton>
        )}
      </ContainerItens>
    </Container>
  );
}

export default withNavigationFocus(Expense);
