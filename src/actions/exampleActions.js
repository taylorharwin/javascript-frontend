import { INCREMENT_COUNTER } from "../constants/exampleConstants";

export const incrementCounter = ({ amount }) => ({
  type: INCREMENT_COUNTER,
  amount,
});
