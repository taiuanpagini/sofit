import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';
import {
  Container,
  Title,
  ContainerDespesas,
  List,
  ContainerEmpty,
  TitleEmpty,
} from './styles';
import Background from '~/components/Background';
import Expense from '~/components/Expense';
import { expensesDeleteRequest } from '~/store/modules/expense/actions';

function Home() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);
  const loading = useSelector((state) => state.expense.loading);
  const token = useSelector((state) => state.auth.token);

  async function handleCancel(id) {
    dispatch(expensesDeleteRequest(id, token));
  }

  async function confirmCancel(expense) {
    Alert.alert(
      'Atenção',
      `Deseja realmente cancelar a despesa ${expense.item}?`,
      [
        {
          text: 'Sim',
          onPress: () => handleCancel(expense.id),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Background>
      <Container>
        <Title>Minhas Despesas</Title>

        <ContainerDespesas>
          <List
            data={expenses}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Expense
                loading={loading}
                onCancel={() => confirmCancel(item)}
                expense={item}
              />
            )}
            ListEmptyComponent={
              <ContainerEmpty>
                <TitleEmpty>Nenhuma despesa cadastrada</TitleEmpty>
              </ContainerEmpty>
            }
          />
        </ContainerDespesas>
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Home);
