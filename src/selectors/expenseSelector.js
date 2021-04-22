import { format } from "date-fns";

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
