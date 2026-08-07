import {
  MILK_ADD,
  MILK_REMOVE,
  MILK_RESET,
  MILK_SET_PRICE,
  MILK_TOGGLE_LOW_FAT,
} from "./milkActionType";
export const addMilk = (amount = 1) => {
  return {
    type: MILK_ADD,
    payload: amount,
  };
};

export const removeMilk = (amount = 1) => {
  return {
    type: MILK_REMOVE,
    payload: amount,
  };
};

export const setMilkPrice = (price) => {
  return {
    type: MILK_SET_PRICE,
    payload: price,
  };
};

export const toggleLowFat = () => {
  return {
    type: MILK_TOGGLE_LOW_FAT,
  };
};

export const resetMilk = () => {
  return {
    type: MILK_RESET,
  };
};
