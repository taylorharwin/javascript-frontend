import { INCREMENT_COUNTER } from "../constants/exampleConstants";

const initialState = {
  counter: 0,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    }

    default: {
      return state;
    }
  }
};

export default exampleReducer;
