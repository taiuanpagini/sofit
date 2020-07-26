export function expensesRequest(date, item, value, type, token, navigation) {
  return {
    type: '@expense/EXPENSES_REQUEST',
    payload: { date, item, value, type, token, navigation },
  };
}

export function expensesSuccess(expense) {
  return {
    type: '@expense/EXPENSES_SUCCESS',
    payload: { expense },
  };
}

export function expensesUpdateRequest(
  id,
  date,
  item,
  value,
  type,
  token,
  navigation
) {
  return {
    type: '@expense/EXPENSES_UPDATE_REQUEST',
    payload: { id, date, item, value, type, token, navigation },
  };
}

export function expensesUpdateSuccess(expense) {
  return {
    type: '@expense/EXPENSES_UPDATE_SUCCESS',
    payload: { expense },
  };
}

export function expensesDeleteRequest(id, token) {
  return {
    type: '@expense/EXPENSES_DELETE_REQUEST',
    payload: { id, token },
  };
}

export function expensesDeleteSuccess(id) {
  return {
    type: '@expense/EXPENSES_DELETE_SUCCESS',
    payload: { id },
  };
}

export function expensesLogin(expense) {
  return {
    type: '@expense/EXPENSES_LOGIN',
    payload: { expense },
  };
}

export function expensesFailure() {
  return {
    type: '@expense/EXPENSES_FAILURE',
    payload: {},
  };
}
