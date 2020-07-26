/* eslint-disable array-callback-return */
import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { signFailure, signInSuccess } from './actions';
import { expensesLogin } from '../expense/actions';

export function* signIn({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.get, `/start/${email}`, {
      email,
    });

    const { data, status } = response;

    if (status !== 200) {
      Alert.alert('Atenção', 'Digite um e-mail válido!');
      yield put(signFailure());
      return;
    }

    const { _id, token } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const page = 1;
    const perPage = 20;

    const responseExpenses = yield call(
      api.get,
      `expenses?page=${page}&perPage=${perPage}`
    );

    const expenses = [];
    responseExpenses.data.map((expense) => {
      const item = {
        id: expense._id,
        date: expense.date,
        item: expense.item,
        value: expense.value,
        type: expense.additionalInfo.type,
      };

      expenses.unshift(item);
    });

    yield put(expensesLogin(expenses));

    yield put(signInSuccess(token, email, _id));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados.'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
