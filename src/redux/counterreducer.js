const initialState = {
  count: 0,
};

function counterreducer(state = initialState, action) {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        count: state.count + 1,
      };
    case "NEGETIVE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "FIVE":
      return {
        ...state,
        count: state.count + 5,
      };
    case "FIVEE":
      return {
        ...state,
        count: state.count - 5,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}
export default counterreducer;
