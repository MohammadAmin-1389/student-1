import { PLUS, RESET } from "./actionType";

export const plus = (payload) => {
  return {
    type: PLUS,
    payload,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
