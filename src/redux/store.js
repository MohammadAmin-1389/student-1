import { combineReducers, createStore } from "redux";

import counterReducer from "./counter/counterreducer";
import milkReducer from "./milkCounter/milkReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  milk: milkReducer,
});

const store = createStore(rootReducer);

export default store;