const API_BASE = "localhost";

export const mockExpenses = {
	abc: {
		id: "abc",
		name: "test expense",
		amount: 1.324,
		status: "WORK",
		date: "2021-03-23T18:25:43.511Z",
	},
	fff: {
		id: "fff",
		name: "test expense",
		amount: 1.324,
		status: "PERSONAL",
		date: "2021-03-23T18:25:43.511Z",
	},
	ghi: {
		id: "ghi",
		name: "test expense",
		amount: 1.324,
		status: "UNKNOWN",
		date: "2021-03-23T18:25:43.511Z",
	},
};

const loadExpensesAPICall = async () => {
	return Promise.resolve(mockExpenses);
};

export { loadExpensesAPICall };
