import { PLUS, RESET } from "./actionType";

const initialState = {
  count: 0,
};

function counterreducer(state = initialState, action, payload) {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}
export default counterreducer;
