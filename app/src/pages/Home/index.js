import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Alert, Platform } from 'react-native';
import {
  Container,
  ContainerDespesas,
  List,
  ContainerEmpty,
  TitleEmpty,
} from './styles';
import Background from '~/components/Background';
import Expense from '~/components/Expense';
import { expensesDeleteRequest } from '~/store/modules/expense/actions';

function Home({ navigation }) {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);
  const loading = useSelector((state) => state.expense.loading);
  const token = useSelector((state) => state.auth.token);
  const [device] = useState(Platform.OS);

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

  async function editExpense(id) {
    navigation.navigate('Edit', { id });
  }

  return (
    <Background>
      <Container>
        <ContainerDespesas>
          <List
            data={expenses}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Expense
                loading={loading}
                onCancel={() => confirmCancel(item)}
                onEdit={() => editExpense(item.id)}
                expense={item}
              />
            )}
            ListEmptyComponent={
              <ContainerEmpty>
                <TitleEmpty param={device}>
                  Nenhuma despesa cadastrada
                </TitleEmpty>
              </ContainerEmpty>
            }
          />
        </ContainerDespesas>
      </Container>
    </Background>
  );
}

Home.navigationOptions = () => ({
  title: 'Minhas Despesas',
});

export default withNavigationFocus(Home);
