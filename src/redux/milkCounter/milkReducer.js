import {
  MILK_ADD,
  MILK_REMOVE,
  MILK_RESET,
  MILK_SET_PRICE,
  MILK_TOGGLE_LOW_FAT,
} from "./milkActionType";

const initialState = {
  count: 0,
  price: 0,
  isLowFat: false,
};

function milkReducer(state = initialState, action) {
  const MILK_SET_PRICE = 120;
  switch (action.type) {
    case MILK_ADD:
      return {
        ...state,
        count: state.count + action.payload,
        price: state.price + action.payload * MILK_SET_PRICE,
      };
    case MILK_REMOVE:
      if (state.count <= 0) {
        return state;
      }

      return {
        ...state,
        count: state.count - action.payload,
        price: state.price - action.payload * MILK_SET_PRICE,
      };

    case MILK_TOGGLE_LOW_FAT:
      return {
        ...state,
        isLowFat: !state.isLowFat,
      };

    case MILK_RESET:
      return initialState;

    default:
      return state;
  }
}

export default milkReducer;
