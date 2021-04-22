import { ExpenseTypes } from "../constants/expenses";

import { format } from "date-fns";
import _ from "lodash";

export const expenseSelector = (state) => {
	const expenseGroups = Object.values(state.trackExpense.expenses).reduce(
		(groups, expense) => {
			const date = expense.date.split("T")[0];
			if (!groups[date]) {
				groups[date] = [];
			}
			groups[date].push(expense);
			return groups;
		},
		{}
	);

	const groupArrays = Object.keys(expenseGroups).map((date) => {
		return {
			date: format(new Date(date), "ccc, LLL Lo"),
			expenses: expenseGroups[date],
		};
	});

	return groupArrays;
};

export const totalSavedSelector = (state) => {
	return _.reduce(
		state.trackExpense.expenses,
		(result, expense) => {
			if (expense.status === ExpenseTypes.WORK.value) {
				return result + expense.amount;
			}
			return result;
		},
		0
	);
};
