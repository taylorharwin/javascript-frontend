import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { expenseSelector } from "../selectors/expenseSelector";

const mockState = {
	trackExpense: {
		expenses: {
			abc: {
				id: "abc",
				name: "test expense",
				amount: 1.32,
				status: "WORK",
				date: "2021-03-23T18:25:43.511Z",
			},
			def: {
				id: "def",
				name: "test expense",
				amount: 1.0,
				status: "UNKNOWN",
				date: "2021-03-23T18:25:43.511Z",
			},
			ghi: {
				id: "ghi",
				name: "test expense",
				amount: 15000.0,
				status: "PERSONAL",
				date: "2021-03-25T18:25:43.511Z",
			},
		},
	},
};

describe("App", () => {
	it("should render", () => {
		const wrapper = shallow(
			<App orderedExpenses={expenseSelector(mockState)} />
		);
		expect(wrapper).toExist();
	});
});
