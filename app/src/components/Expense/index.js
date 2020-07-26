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
  EditButton,
  ContainerItens,
} from './styles';

function Expense({ loading, onCancel, onEdit, expense }) {
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
          <>
            <EditButton onPress={onEdit}>
              <Icon size={15} name="edit" color="#FFF" />
            </EditButton>
            <CancelButton onPress={onCancel}>
              <Icon size={15} name="close" color="#FFF" />
            </CancelButton>
          </>
        )}
      </ContainerItens>
    </Container>
  );
}

export default withNavigationFocus(Expense);
