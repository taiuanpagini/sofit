/* eslint-disable array-callback-return */
import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import {
  expensesSuccess,
  expensesFailure,
  expensesDeleteSuccess,
  expensesUpdateSuccess,
} from './actions';

export function* expenses({ payload }) {
  try {
    const { date, item, value, type, token, navigation } = payload;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.post, 'expenses', {
      date,
      item,
      value,
      additionalInfo: {
        type,
      },
    });

    const { data, status } = response;

    if (status !== 201) {
      Alert.alert('Atenção', 'Não foi possível cadastrar a despesa.');
      yield put(expensesFailure());
    } else {
      const expense = {
        id: data,
        date,
        item,
        value,
        type,
      };

      yield put(expensesSuccess(expense));
      Alert.alert('Sucesso', 'Despesa cadastrada com sucesso');
      navigation.navigate('Dashboard');
    }
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível cadastrar a despesa.');
    yield put(expensesFailure());
  }
}

export function* expenseDelete({ payload }) {
  try {
    const { id, token } = payload;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.delete, `expenses/${id}`);

    const { status } = response;

    if (status !== 200) {
      Alert.alert('Atenção', 'Não foi possível remover a despesa.');
      yield put(expensesFailure());
    } else {
      yield put(expensesDeleteSuccess(id));
      Alert.alert('Sucesso', 'Despesa removida com sucesso');
    }
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível remover a despesa.');
    yield put(expensesFailure());
  }
}

export function* expenseUpdate({ payload }) {
  try {
    const { id, date, item, value, type, token, navigation } = payload;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.put, `expenses/${id}`, {
      date,
      item,
      value,
      additionalInfo: {
        type,
      },
    });

    const { status } = response;

    if (status !== 200) {
      Alert.alert('Atenção', 'Não foi possível atualizar a despesa.');
      yield put(expensesFailure());
    } else {
      const expense = {
        id,
        date,
        item,
        value,
        type,
      };

      yield put(expensesUpdateSuccess(expense));
      Alert.alert('Sucesso', 'Despesa atualizada com sucesso');
      navigation.goBack();
    }
  } catch (error) {
    Alert.alert('Atenção', 'Não foi possível atualizar a despesa.');
    yield put(expensesFailure());
  }
}

export default all([
  takeLatest('@expense/EXPENSES_REQUEST', expenses),
  takeLatest('@expense/EXPENSES_DELETE_REQUEST', expenseDelete),
  takeLatest('@expense/EXPENSES_UPDATE_REQUEST', expenseUpdate),
]);
