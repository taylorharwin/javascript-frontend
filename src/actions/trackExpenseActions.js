import {
	TRACK_EXPENSE_SUCCESS,
	TRACK_EXPENSE_ERROR,
	LOAD_EXPENSES_SUCCESS,
	LOAD_EXPENSES_ERROR,
} from "../constants/actionTypes";

import { loadExpensesAPICall, trackExpenseAPICall } from "../api";

export const trackExpenseSuccess = ({ expense }) => ({
	type: TRACK_EXPENSE_SUCCESS,
	expense,
});

export const loadExpensesSuccess = ({ expenses }) => ({
	type: LOAD_EXPENSES_SUCCESS,
	expenses,
});

export const trackExpenseError = ({ error }) => ({
	type: TRACK_EXPENSE_ERROR,
	error,
});

export const loadExpensesError = ({ error }) => ({
	type: LOAD_EXPENSES_ERROR,
	error,
});

export const trackExpense = (expenseID, expenseType) => {
	return async (dispatch) => {
		const expense = await trackExpenseAPICall(expenseID, expenseType);
		dispatch(trackExpenseSuccess({ expense }));
		try {
		} catch (error) {
			dispatch(trackExpenseError({ error }));
		}
	};
};

export const loadExpenses = () => {
	return async (dispatch) => {
		try {
			const expenses = await loadExpensesAPICall();
			dispatch(loadExpensesSuccess({ expenses }));
		} catch (error) {
			dispatch(loadExpensesError({ error }));
		}
	};
};
