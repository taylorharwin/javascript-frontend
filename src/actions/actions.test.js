import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { loadExpenses, trackExpense } from "./trackExpenseActions.js";
import {
	LOAD_EXPENSES_SUCCESS,
	LOAD_EXPENSES_ERROR,
} from "../constants/actionTypes";

import * as api from "../api";

import sinon from "sinon";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
	let apiStub;
	beforeEach(() => {
		apiStub = sinon.stub(api, "loadExpensesAPICall");
	});
	afterEach(() => apiStub && apiStub.restore());

	it("should create an action to load an expense", async () => {
		apiStub.returns(Promise.resolve("some expenses"));

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
	it("should create an action when loading fails", async () => {
		apiStub.returns(Promise.reject("some error"));

		const store = mockStore({ trackExpenses: {} });
		const expectedActions = [
			{
				type: LOAD_EXPENSES_ERROR,
				error: "some error",
			},
		];
		await store.dispatch(loadExpenses());

		expect(store.getActions()).toEqual(expectedActions);
	});
});
