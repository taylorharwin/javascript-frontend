import { shallow } from "enzyme";
import sinon from "sinon";
import ExpenseTrackCard from "./ExpenseTrackCard";

const workExpense = {
	id: "abc",
	name: "test expense",
	amount: 1.324,
	status: "WORK",
	date: "2021-03-23T18:25:43.511Z",
};

const personalExpense = {
	id: "fff",
	name: "test expense",
	amount: 1.324,
	status: "PERSONAL",
	date: "2021-03-23T18:25:43.511Z",
};

describe("ExpenseTrackCard", () => {
	it("renders a work expense tracking card with two primary buttons", () => {
		const onTrackExpense = sinon.spy();

		const wrapper = shallow(
			<ExpenseTrackCard expense={workExpense} onTrackExpense={onTrackExpense} />
		);
		expect(wrapper.find("PrimaryButton").length).toEqual(2);
	});
	it("clicks the work expense button and tracks a work expense", () => {
		const onTrackExpense = sinon.spy();

		const wrapper = shallow(
			<ExpenseTrackCard expense={workExpense} onTrackExpense={onTrackExpense} />
		);
		const workButtons = wrapper.find("PrimaryButton");
		workButtons.first().simulate("click");
		expect(onTrackExpense.calledOnceWith("abc", "WORK")).toEqual(true);
	});
	it("clicks the personal expense button and tracks a personal expense", () => {
		const onTrackExpense = sinon.spy();

		const wrapper = shallow(
			<ExpenseTrackCard
				expense={personalExpense}
				onTrackExpense={onTrackExpense}
			/>
		);
		const workButtons = wrapper.find("PrimaryButton");
		workButtons.at(1).simulate("click");

		expect(onTrackExpense.calledOnceWith("fff", "PERSONAL")).toEqual(true);
	});
});
