import { combineReducers } from "redux";
import trackExpenseReducer from "./trackExpenseReducer";

export default combineReducers({
	trackExpense: trackExpenseReducer,
});
