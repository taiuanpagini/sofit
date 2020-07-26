import produce from 'immer';

const INITIAL_STATE = {
  loading: null,
  expenses: [],
};

export default function expenses(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@expense/EXPENSES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@expense/EXPENSES_SUCCESS': {
        const { expense } = action.payload;
        draft.loading = false;
        draft.expenses.unshift(expense);
        break;
      }
      case '@expense/EXPENSES_UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@expense/EXPENSES_UPDATE_SUCCESS': {
        const { expense } = action.payload;

        const expensesOld = state.expenses;
        const index = expensesOld.findIndex((x) => x.id === expense.id);
        console.tron.log(expense);
        if (index >= 0) {
          draft.loading = false;
          draft.expenses[index] = expense;
        }
        break;
      }
      case '@expense/EXPENSES_DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@expense/EXPENSES_DELETE_SUCCESS': {
        const { id } = action.payload;

        const expensesOld = state.expenses;
        const index = expensesOld.findIndex((x) => x.id === id);

        if (index >= 0) {
          draft.loading = false;
          draft.expenses.splice(index, 1);
        }
        break;
      }
      case '@expense/EXPENSES_LOGIN': {
        const { expense } = action.payload;
        draft.loading = false;
        draft.expenses = expense;
        break;
      }
      case '@expense/EXPENSES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
