import _ from "lodash";

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
      const keyed = _.keyBy(action.expenses, "id");
      return {
        ...state,
        expenses: keyed,
      };
    }
    case TRACK_EXPENSE_SUCCESS: {
      const toUpdate = state.expenses;
      toUpdate[action.expense.id] = action.expense;

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
