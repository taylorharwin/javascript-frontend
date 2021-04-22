import {
	TRACK_EXPENSE_SUCCESS,
	LOAD_EXPENSES_SUCCESS,
	LOAD_EXPENSES_ERROR,
} from "../constants/actionTypes";

import { loadExpensesAPICall } from "../api";

export const trackExpenseSuccess = ({ expenseID, expenseType }) => ({
	type: TRACK_EXPENSE_SUCCESS,
	expenseID,
	expenseType,
});

export const loadExpensesSuccess = ({ expenses }) => ({
	type: LOAD_EXPENSES_SUCCESS,
	expenses,
});

export const trackExpense = () => {
	return async (dispatch) => {
		try {
		} catch (err) {}
	};
};

export const loadExpenses = () => {
	return async (dispatch) => {
		try {
			const expenses = await loadExpensesAPICall();
			debugger;
			dispatch(loadExpensesSuccess({ expenses: expenses }));
		} catch (err) {
			dispatch({
				type: LOAD_EXPENSES_ERROR,
			});
		}
	};
};
