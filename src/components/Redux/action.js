import { ADD_COUNTER, RED_COUNTER } from "./actionType";

export const addCounter = () => {
  return {
    type: ADD_COUNTER
  };
};

export const redCounter = () => {
  return {
    type: RED_COUNTER
  };
};
