const API_BASE = "http://localhost:8080";

const loadExpensesAPICall = async () => {
	const res = await fetch(`${API_BASE}/expenses`);
	const json = await res.json();
	return json.expenses;
};

const trackExpenseAPICall = async (expenseID, expenseStatus) => {
	const res = await fetch(`${API_BASE}/expenses/track`, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify({ id: expenseID, status: expenseStatus }),
	});
	const json = await res.json();
	return json.expense;
};

export { loadExpensesAPICall, trackExpenseAPICall };
