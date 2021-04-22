import React from "react";
import { ExpenseTypes } from "../../constants/expenses";
import PrimaryButton from "../buttons/PrimaryButton";

const ExpenseTrackCard = ({ expense, onTrackExpense }) => {
	return (
		<div className="expense-card">
			<div className="expense-card-header">
				<strong>{expense.name}</strong> | <span>${expense.amount}</span>
			</div>
			<PrimaryButton
				onClick={() => onTrackExpense(expense.id, ExpenseTypes.WORK.value)}
				name="Work expense"
			/>
			<PrimaryButton
				onClick={() => onTrackExpense(expense.id, ExpenseTypes.PERSONAL.value)}
				name="Personal expense"
			/>
		</div>
	);
};

export default ExpenseTrackCard;
