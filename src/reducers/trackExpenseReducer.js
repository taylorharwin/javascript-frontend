import {
  TRACK_EXPENSE_SUCCESS,
  LOAD_EXPENSES_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  expenses: {},
};

const trackExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EXPENSES_SUCCESS: {
      debugger;
      state.expenses = action.expenses;
      return { ...state };
    }
    case TRACK_EXPENSE_SUCCESS: {
      const toUpdate = state.expenses;

      toUpdate[action.expense.id] = {
        ...toUpdate[action.expense.id],
        expenseType: action.expenseType,
      };

      return {
        ...state,
        expenses: toUpdate,
      };
    }

    default: {
      return state;
    }
  }
};

export default trackExpenseReducer;
