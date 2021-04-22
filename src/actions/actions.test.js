import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { loadExpenses, trackExpense } from "./trackExpenseActions.js";
import { LOAD_EXPENSES_SUCCESS } from "../constants/actionTypes";

import * as api from "../api";

import sinon from "sinon";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
	it("should create an action to track an expense", async () => {
		sinon
			.stub(api, "loadExpensesAPICall")
			.returns(Promise.resolve("some expenses"));

		const store = mockStore({ trackExpenses: {} });
		const expectedActions = [
			{
				type: LOAD_EXPENSES_SUCCESS,
				expenses: "some expenses",
			},
		];
		await store.dispatch(loadExpenses());

		expect(store.getActions()).toEqual(expectedActions);
	});
});
