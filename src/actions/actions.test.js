import { loadExpenses, trackExpense } from "./trackExpenseActions.js";
import { LOAD_EXPENSES_SUCCESS } from "../constants/actionTypes";

import * as api from "../api";

import sinon from "sinon";

describe("actions", () => {
	it("should create an action to track an expense", (done) => {
		const expectedAction = {
			type: LOAD_EXPENSES_SUCCESS,
		};
	});
});
