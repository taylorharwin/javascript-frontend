import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import {
	expenseSelector,
	totalSavedSelector,
} from "../selectors/expenseSelector";

const mockState = {
	trackExpense: {
		expenses: {
			abc: {
				id: "abc",
				name: "test expense",
				amount: 1.32,
				status: "work",
				date: "2021-03-23T18:25:43.511Z",
			},
			def: {
				id: "def",
				name: "test expense",
				amount: 1.0,
				status: "unknown",
				date: "2021-03-23T18:25:43.511Z",
			},
			ghi: {
				id: "ghi",
				name: "test expense",
				amount: 15000.0,
				status: "personal",
				date: "2021-03-25T18:25:43.511Z",
			},
		},
	},
};

describe("App", () => {
	it("should render", () => {
		const wrapper = shallow(
			<App
				totalSaved={totalSavedSelector(mockState)}
				orderedExpenses={expenseSelector(mockState)}
			/>
		);
		expect(wrapper).toExist();
	});
	it("renders an icon card for categorized expenses", () => {
		const wrapper = shallow(
			<App
				totalSaved={totalSavedSelector(mockState)}
				orderedExpenses={expenseSelector(mockState)}
			/>
		);
		expect(wrapper.find("IconCard").length).toEqual(2);
	});
	it("renders the sum total of all expenses categorized as work", () => {
		const wrapper = shallow(
			<App
				totalSaved={totalSavedSelector(mockState)}
				orderedExpenses={expenseSelector(mockState)}
			/>
		);
		expect(wrapper.find(".calculated-number").text()).toEqual("1.32");
	});
	it("renders an expense track card for unknown expenses", () => {
		const wrapper = shallow(
			<App
				totalSaved={totalSavedSelector(mockState)}
				orderedExpenses={expenseSelector(mockState)}
			/>
		);
		expect(wrapper.find("ExpenseTrackCard").length).toEqual(1);
	});
});
