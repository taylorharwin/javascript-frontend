import { format } from "date-fns";

export const expenseSelector = (state) => {
	const expenseGroups = Object.values(state.trackExpense.expenses).reduce(
		(groups, expense) => {
			debugger;
			const date = expense.date;
			if (!groups[date]) {
				groups[date] = [];
			}
			groups[date].push(expense);
			return groups;
		},
		{}
	);

	const groupArrays = Object.keys(expenseGroups).map((date) => {
		console.log(date);
		return {
			date: format(new Date(date), "ccc, LLL Lo"),
			expenses: expenseGroups[date],
		};
	});

	return groupArrays;
};
