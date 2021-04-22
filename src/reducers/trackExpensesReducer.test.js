import reducer from "./trackExpenseReducer";
import {
	LOAD_EXPENSES_SUCCESS,
	TRACK_EXPENSE_SUCCESS,
} from "../constants/ActionTypes";

import { mockExpenses } from "../../fixtures/mocks";

describe("track expenses reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			expenses: {},
		});
	});
	it("should store expenses", () => {
		expect(
			reducer(undefined, {
				type: LOAD_EXPENSES_SUCCESS,
				expenses: mockExpenses,
			})
		).toEqual({
			expenses: mockExpenses,
		});
	});
});
