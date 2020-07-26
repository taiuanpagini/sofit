import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import expense from './expense/sagas';

export default function* rootSaga() {
  return yield all([auth, expense]);
}
