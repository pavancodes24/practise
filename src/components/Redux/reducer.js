import { ADD_COUNTER, RED_COUNTER } from "./actionType";

const initState = {
  counter: 0
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case RED_COUNTER:
      return {
        ...state,
        counter: state.counter === 0 ? state.counter : state.counter - 1
      };
    default:
      return state;
  }
};
